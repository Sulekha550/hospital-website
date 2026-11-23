import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * DiagnosticScannerCanvas
 * 3D Layered Volumetric Tomography Scanner with moving laser-slice beam and holographic medical imaging discs.
 * Lighting: Ice-blue and medical cyan.
 */
export default function DiagnosticScannerCanvas({ className = "" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const amb = new THREE.AmbientLight(0xE0F2FE, 1.8);
    scene.add(amb);

    const cyanLight = new THREE.DirectionalLight(0x0284C7, 3.5);
    cyanLight.position.set(4, 6, 5);
    scene.add(cyanLight);

    const scanRoot = new THREE.Group();
    scene.add(scanRoot);
    scanRoot.rotation.x = 0.35;

    // Layered Translucent Tomographic Discs (Representing 128-Slice Volumetric CT)
    const sliceCount = 8;
    const slices = [];
    const discGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.05, 48);

    for (let i = 0; i < sliceCount; i++) {
      const discMat = new THREE.MeshPhysicalMaterial({
        color: 0x0284C7,
        transmission: 0.8,
        opacity: 0.65,
        transparent: true,
        roughness: 0.15,
        clearcoat: 1.0,
        wireframe: i % 2 === 1,
      });
      const slice = new THREE.Mesh(discGeo, discMat);
      slice.position.y = (i - sliceCount / 2) * 0.45;
      slices.push(slice);
      scanRoot.add(slice);
    }

    // Moving Laser Diagnostic Scan Beam
    const beamGeo = new THREE.RingGeometry(1.7, 1.76, 64);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    });
    const laserBeam = new THREE.Mesh(beamGeo, beamMat);
    laserBeam.rotation.x = Math.PI / 2;
    scanRoot.add(laserBeam);

    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Continuous Slow Rotation
      scanRoot.rotation.y = time * 0.3;

      // Laser Beam Sweeping Up and Down the Volumetric Stack
      const beamY = Math.sin(time * 1.8) * 1.8;
      laserBeam.position.y = beamY;

      // Light up slices as laser passes through them
      slices.forEach((s) => {
        const diff = Math.abs(s.position.y - beamY);
        if (diff < 0.25) {
          s.scale.set(1.05, 1.0, 1.05);
        } else {
          s.scale.set(1.0, 1.0, 1.0);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`w-full h-full min-h-[300px] ${className}`} />;
}
