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

    // --- 2. Central Translucent Crystalline Medical Helix Core (Clean Futuristic Architectural Centerpiece) ---
    const coreGroup = new THREE.Group();
    coreGroup.position.set(2.4, 0.2, 0);
    masterGroup.add(coreGroup);

    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284C7,
      emissive: 0x0EA5E9,
      emissiveIntensity: 0.35,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85,
      thickness: 1.5,
      clearcoat: 1.0,
      specularIntensity: 2.5,
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xF59E0B,
      emissive: 0xD97706,
      emissiveIntensity: 1.5,
      metalness: 0.8,
      roughness: 0.2,
    });

    // Holographic Telemetry Rings
    const ringGeo1 = new THREE.TorusGeometry(1.5, 0.03, 16, 64);
    const ring1 = new THREE.Mesh(ringGeo1, goldMat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(1.8, 0.025, 16, 64);
    const ring2 = new THREE.Mesh(ringGeo2, crystalMat);
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    // Dynamic Central Prism
    const prismGeo = new THREE.OctahedronGeometry(1.1, 0);
    const prism = new THREE.Mesh(prismGeo, crystalMat);
    coreGroup.add(prism);

    // Glowing Conduit Wave
    const waveCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.3, -1.8, 0),
      new THREE.Vector3(0.4, -0.9, 0.4),
      new THREE.Vector3(-0.4, 0, -0.2),
      new THREE.Vector3(0.5, 0.9, 0.3),
      new THREE.Vector3(-0.2, 1.8, 0),
    ]);
    const waveGeo = new THREE.TubeGeometry(waveCurve, 40, 0.05, 12, false);
    const waveMat = new THREE.MeshStandardMaterial({
      color: 0x38BDF8,
      emissive: 0x0284C7,
      emissiveIntensity: 2.2,
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    coreGroup.add(waveMesh);

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

      // Futuristic Crystalline Helix Core Rotation
      coreGroup.rotation.y = time * 0.2;
      ring1.rotation.z = time * 0.35;
      ring2.rotation.x = -time * 0.25;
      prism.rotation.y = time * 0.4;
      prism.rotation.z = Math.sin(time * 0.5) * 0.2;

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
