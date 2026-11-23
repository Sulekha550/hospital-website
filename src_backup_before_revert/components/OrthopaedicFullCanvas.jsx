import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * OrthopaedicFullCanvas
 * Full-section background environment for Orthopaedics:
 * 3D Biometric Joint & Skeletal Mechanics with sub-millimeter robotic alignment guides
 * and mint-emerald lighting.
 */
export default function OrthopaedicFullCanvas() {
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

    // Studio Mint & Emerald Lighting
    const amb = new THREE.AmbientLight(0xECFDF5, 2.0);
    scene.add(amb);

    const mintLight = new THREE.DirectionalLight(0x10B981, 3.8);
    mintLight.position.set(7, 8, 8);
    scene.add(mintLight);

    const silverRim = new THREE.DirectionalLight(0xE2E8F0, 4.0);
    silverRim.position.set(-8, -3, -5);
    scene.add(silverRim);

    const jointRoot = new THREE.Group();
    // Offset right for visual balance
    jointRoot.position.set(2.0, 0, 0);
    scene.add(jointRoot);

    // Cortical Bone Material
    const boneMat = new THREE.MeshPhysicalMaterial({
      color: 0xF8FAFC,
      roughness: 0.28,
      metalness: 0.1,
      clearcoat: 0.9,
      specularIntensity: 2.2,
    });

    // Cobalt-Chrome Prosthetic Alloy
    const alloyMat = new THREE.MeshPhysicalMaterial({
      color: 0x94A3B8,
      metalness: 0.95,
      roughness: 0.1,
      clearcoat: 1.0,
      specularIntensity: 3.8,
    });

    // Femoral Shaft & Condyle
    const femurGeo = new THREE.CylinderGeometry(0.65, 0.85, 4.0, 32);
    const femur = new THREE.Mesh(femurGeo, boneMat);
    femur.position.set(0, 2.1, 0);
    jointRoot.add(femur);

    const condyleGeo = new THREE.TorusGeometry(0.95, 0.45, 20, 36);
    const condyle = new THREE.Mesh(condyleGeo, alloyMat);
    condyle.rotation.x = Math.PI / 2;
    condyle.position.set(0, 0.15, 0);
    jointRoot.add(condyle);

    // Tibial Baseplate
    const tibialGeo = new THREE.CylinderGeometry(0.85, 0.6, 3.8, 32);
    const tibia = new THREE.Mesh(tibialGeo, boneMat);
    tibia.position.set(0, -2.3, 0);
    jointRoot.add(tibia);

    // Robotic Sub-Millimeter Biometric Navigation Ring (Glowing Mint Grid)
    const ringGeo = new THREE.RingGeometry(2.1, 2.16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x10B981,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75,
    });
    const navRing = new THREE.Mesh(ringGeo, ringMat);
    navRing.rotation.x = Math.PI / 3;
    jointRoot.add(navRing);

    const outerCrossGeo = new THREE.RingGeometry(2.4, 2.44, 4);
    const outerCrossMat = new THREE.MeshBasicMaterial({
      color: 0x34D399,
      side: THREE.DoubleSide,
      wireframe: true
    });
    const crossMesh = new THREE.Mesh(outerCrossGeo, outerCrossMat);
    jointRoot.add(crossMesh);

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

      // Slow Continuous Robotic Alignment Orbit
      jointRoot.rotation.y = time * 0.22;
      navRing.rotation.z = time * 0.35;
      crossMesh.rotation.z = -time * 0.18;

      condyle.rotation.x = (Math.PI / 2) + Math.sin(time * 1.5) * 0.15;

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
