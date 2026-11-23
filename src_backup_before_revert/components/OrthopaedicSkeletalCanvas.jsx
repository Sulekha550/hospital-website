import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * OrthopaedicSkeletalCanvas
 * 3D Biometric Joint & Skeletal Mechanics with sub-millimeter robotic alignment guides.
 * Lighting: Mint-emerald and architectural ice-blue.
 */
export default function OrthopaedicSkeletalCanvas({ className = "" }) {
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

    // Studio Mint Lighting Rig
    const amb = new THREE.AmbientLight(0xECFDF5, 1.8);
    scene.add(amb);

    const mintLight = new THREE.DirectionalLight(0x10B981, 3.2);
    mintLight.position.set(5, 6, 6);
    scene.add(mintLight);

    const silverRim = new THREE.DirectionalLight(0xE2E8F0, 3.5);
    silverRim.position.set(-6, -3, -4);
    scene.add(silverRim);

    const jointRoot = new THREE.Group();
    scene.add(jointRoot);

    // Anatomical Cortical Bone Material (Pearl Ivory with Sub-Surface Scatter)
    const boneMat = new THREE.MeshPhysicalMaterial({
      color: 0xF8FAFC,
      roughness: 0.3,
      metalness: 0.1,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
      specularIntensity: 2.0,
    });

    // Robotic Prosthetic Metal Component (Cobalt-Chrome Mirror Alloy)
    const alloyMat = new THREE.MeshPhysicalMaterial({
      color: 0x94A3B8,
      metalness: 0.95,
      roughness: 0.1,
      clearcoat: 1.0,
      specularIntensity: 3.5,
    });

    // Femoral Shaft & Condyle
    const femurGeo = new THREE.CylinderGeometry(0.5, 0.65, 3.2, 32);
    const femur = new THREE.Mesh(femurGeo, boneMat);
    femur.position.set(0, 1.6, 0);
    jointRoot.add(femur);

    // Femoral Condylar Joint Spool
    const condyleGeo = new THREE.TorusGeometry(0.75, 0.35, 16, 32);
    const condyle = new THREE.Mesh(condyleGeo, alloyMat);
    condyle.rotation.x = Math.PI / 2;
    condyle.position.set(0, 0.1, 0);
    jointRoot.add(condyle);

    // Tibial Plateau & Baseplate
    const tibialGeo = new THREE.CylinderGeometry(0.65, 0.45, 3.0, 32);
    const tibia = new THREE.Mesh(tibialGeo, boneMat);
    tibia.position.set(0, -1.8, 0);
    jointRoot.add(tibia);

    // Robotic Sub-Millimeter Biometric Navigation Ring (Glowing Mint Grid)
    const ringGeo = new THREE.RingGeometry(1.6, 1.65, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x10B981,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
    });
    const navRing = new THREE.Mesh(ringGeo, ringMat);
    navRing.rotation.x = Math.PI / 3;
    jointRoot.add(navRing);

    // Sub-millimeter Crosshair Coordinate Marker
    const crossGeo = new THREE.RingGeometry(1.9, 1.93, 4);
    const crossMat = new THREE.MeshBasicMaterial({
      color: 0x34D399,
      side: THREE.DoubleSide,
      wireframe: true
    });
    const crossMesh = new THREE.Mesh(crossGeo, crossMat);
    jointRoot.add(crossMesh);

    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Slow Continuous Robotic Alignment Orbit
      jointRoot.rotation.y = time * 0.25;
      navRing.rotation.z = time * 0.4;
      crossMesh.rotation.z = -time * 0.2;

      // Subtle articulating joint flex
      condyle.rotation.x = (Math.PI / 2) + Math.sin(time * 1.5) * 0.15;

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
