import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**

 */
export default function DiagnosticScannerFullCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const amb = new THREE.AmbientLight(0xFEF2F2, 2.0);
    scene.add(amb);

    const brandLight = new THREE.DirectionalLight(0x0284C7, 3.8);
    brandLight.position.set(5, 7, 7);
    scene.add(brandLight);

    const scanRoot = new THREE.Group();
    // Offset right for visual balance
    scanRoot.position.set(1.8, 0, 0);
    scanRoot.rotation.x = 0.35;
    scene.add(scanRoot);

    // 10 Layered Translucent Tomographic Discs in Red & Cyan
    const sliceCount = 10;
    const slices = [];
    const discGeo = new THREE.CylinderGeometry(2.0, 2.0, 0.05, 48);

    for (let i = 0; i < sliceCount; i++) {
      const discMat = new THREE.MeshPhysicalMaterial({
        color: i % 2 === 0 ? 0x0284C7 : 0x991B1B,
        transmission: 0.82,
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

    // Moving Laser Diagnostic Scan Beam in Teal & Mint
    const beamGeo = new THREE.RingGeometry(2.1, 2.18, 64);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x34D399,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
    });
    const laserBeam = new THREE.Mesh(beamGeo, beamMat);
    laserBeam.rotation.x = Math.PI / 2;
    scanRoot.add(laserBeam);

    // Mouse tilt
    let mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Continuous Slow Rotation
      scanRoot.rotation.y = time * 0.28;

      // Laser Beam Sweeping Up and Down
      const beamY = Math.sin(time * 1.8) * 2.1;
      laserBeam.position.y = beamY;

      // Slices pulse as laser passes through them
      slices.forEach((s) => {
        const diff = Math.abs(s.position.y - beamY);
        if (diff < 0.28) {
          s.scale.set(1.06, 1.0, 1.06);
        } else {
          s.scale.set(1.0, 1.0, 1.0);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" />;
}


