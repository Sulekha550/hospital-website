import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * HeroArchitectural3DCanvas
 * Full-bleed futuristic medical architecture with:
 * - Sweeping translucent architectural glass canopy ribs & atrium vaults
 * - Central translucent biological 3D cardiac sculpture with glowing coronaries
 * - 80+ floating bioluminescent medical micro-particles and light trails
 * - Interactive mouse perspective tilt & continuous smooth cinematic orbit
 */
export default function HeroArchitectural3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 9.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Studio Medical & Architectural Lighting Rig
    const amb = new THREE.AmbientLight(0xF0F9FF, 2.0);
    scene.add(amb);

    const keySun = new THREE.DirectionalLight(0xFFFFFF, 3.2);
    keySun.position.set(8, 12, 10);
    scene.add(keySun);

    const cyanRim = new THREE.DirectionalLight(0x06B6D4, 3.8);
    cyanRim.position.set(-9, -2, -4);
    scene.add(cyanRim);

    const coralFill = new THREE.PointLight(0xF43F5E, 2.8, 25);
    coralFill.position.set(4, -3, 4);
    scene.add(coralFill);

    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- 1. Architectural Canopy Glass Ribs (Curved Hospital Vaulting) ---
    const archGroup = new THREE.Group();
    masterGroup.add(archGroup);

    const ribMat = new THREE.MeshPhysicalMaterial({
      color: 0xBAE6FD,
      transmission: 0.85,
      opacity: 0.75,
      transparent: true,
      roughness: 0.1,
      metalness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });

    const ribCount = 9;
    for (let i = 0; i < ribCount; i++) {
      const zOffset = (i - ribCount / 2) * 1.6;
      const radius = 6.2 - Math.abs(zOffset) * 0.35;
      const curve = new THREE.EllipseCurve(
        0, -1.2,
        radius, radius * 0.85,
        Math.PI * 0.08, Math.PI * 0.92,
        false,
        0
      );
      const points = curve.getPoints(50);
      const curve3D = new THREE.CatmullRomCurve3(
        points.map(p => new THREE.Vector3(p.x, p.y, zOffset))
      );
      const tubeGeo = new THREE.TubeGeometry(curve3D, 40, 0.08, 12, false);
      const tubeMesh = new THREE.Mesh(tubeGeo, ribMat);
      archGroup.add(tubeMesh);
    }

    // --- 2. Central Translucent Anatomical Heart Sculpture ---
    const heartGroup = new THREE.Group();
    heartGroup.position.set(2.4, 0.2, 0);
    heartGroup.rotation.z = -0.15;
    masterGroup.add(heartGroup);

    const myoMat = new THREE.MeshPhysicalMaterial({
      color: 0x9F1239,
      emissive: 0x881337,
      emissiveIntensity: 0.45,
      roughness: 0.2,
      metalness: 0.15,
      transmission: 0.25,
      clearcoat: 1.0,
      specularIntensity: 2.8,
      specularColor: 0xFDE047,
    });

    const leftVentGeo = new THREE.SphereGeometry(1.25, 32, 32);
    leftVentGeo.scale(0.85, 1.45, 0.95);
    const leftVent = new THREE.Mesh(leftVentGeo, myoMat);
    leftVent.position.set(-0.35, -0.4, 0);
    leftVent.rotation.z = 0.22;
    heartGroup.add(leftVent);

    const rightVentGeo = new THREE.SphereGeometry(1.1, 32, 32);
    rightVentGeo.scale(0.8, 1.3, 0.9);
    const rightVent = new THREE.Mesh(rightVentGeo, myoMat);
    rightVent.position.set(0.45, -0.45, 0.15);
    rightVent.rotation.z = -0.18;
    heartGroup.add(rightVent);

    // Glowing Coronary Conduit Line
    const ladCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.15, 0.6, 0.95),
      new THREE.Vector3(-0.1, 0.1, 1.05),
      new THREE.Vector3(0.05, -0.5, 0.95),
      new THREE.Vector3(-0.05, -1.1, 0.75),
      new THREE.Vector3(-0.1, -1.45, 0.45),
    ]);
    const ladGeo = new THREE.TubeGeometry(ladCurve, 32, 0.07, 12, false);
    const ladMat = new THREE.MeshStandardMaterial({
      color: 0x22D3EE,
      emissive: 0x06B6D4,
      emissiveIntensity: 2.2,
    });
    const ladMesh = new THREE.Mesh(ladGeo, ladMat);
    heartGroup.add(ladMesh);

    // Aortic Arch
    const aortaCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-0.25, 0.5, 0),
      new THREE.Vector3(-0.3, 1.8, 0),
      new THREE.Vector3(1.1, 1.8, -0.2),
      new THREE.Vector3(1.0, 0.2, -0.5)
    );
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 36, 0.32, 16, false);
    const aortaMat = new THREE.MeshPhysicalMaterial({
      color: 0xBE123C,
      transmission: 0.45,
      thickness: 1.0,
      clearcoat: 1.0,
    });
    const aorta = new THREE.Mesh(aortaGeo, aortaMat);
    heartGroup.add(aorta);

    // --- 3. 85 Floating Bioluminescent Particles ---
    const pCount = 85;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 16;
      pPos[i + 1] = (Math.random() - 0.5) * 10;
      pPos[i + 2] = (Math.random() - 0.5) * 8;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x0284C7,
      size: 0.12,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Mouse Tracking for Interactive Depth Tilt
    let mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth camera perspective response to mouse
      camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 0.5 + 0.5 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Slow Continuous Architectural Canopy Sway
      archGroup.rotation.y = Math.sin(time * 0.15) * 0.12;

      // Heart Cardiac Pulse (72 BPM)
      const pulseCycle = (time % 0.833) / 0.833;
      let scale = 1.0;
      if (pulseCycle < 0.18) {
        scale = 1.0 + Math.sin((pulseCycle / 0.18) * Math.PI) * 0.09;
      } else if (pulseCycle > 0.22 && pulseCycle < 0.38) {
        scale = 1.0 + Math.sin(((pulseCycle - 0.22) / 0.16) * Math.PI) * 0.05;
      }
      heartGroup.scale.set(scale, scale, scale);
      heartGroup.rotation.y = Math.sin(time * 0.35) * 0.3;

      // Particle Drift
      particles.rotation.y = time * 0.03;
      particles.rotation.x = time * 0.015;

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
