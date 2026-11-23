import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * CardiologyFullCanvas
 * Full-section background environment for Cardiology:
 * Large prominent 3D anatomical heart, glowing coronary arteries, and floating blood bioparticles.
 */
export default function CardiologyFullCanvas() {
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
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Precision Medical Emerald Ambient Lighting
    const amb = new THREE.AmbientLight(0xF0FDF4, 2.5);
    scene.add(amb);

    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 3.2);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    const emeraldRim = new THREE.DirectionalLight(0x10B981, 4.0);
    emeraldRim.position.set(-8, -2, -4);
    scene.add(emeraldRim);

    const mintGlow = new THREE.PointLight(0x34D399, 3.0, 20);
    mintGlow.position.set(3, -2, 4);
    scene.add(mintGlow);

    const heartRoot = new THREE.Group();
    heartRoot.position.set(2.5, 0, 0);
    scene.add(heartRoot);

    // Subtle Holographic Vascular Rings (Clean, non-intrusive)
    const ringMat1 = new THREE.MeshPhysicalMaterial({
      color: 0x059669,
      emissive: 0x047857,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.25,
      roughness: 0.2,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.2, 0.02, 16, 64);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.8;
    heartRoot.add(ring1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x10B981,
      emissive: 0x059669,
      emissiveIntensity: 0.9,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const ringGeo2 = new THREE.TorusGeometry(2.6, 0.015, 16, 48);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3.2;
    heartRoot.add(ring2);

    // 160 Floating Hemodynamic Emerald Micro-particles
    const pCount = 160;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 20;
      pPos[i + 1] = (Math.random() - 0.5) * 14;
      pPos[i + 2] = (Math.random() - 0.5) * 8;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x10B981,
      size: 0.08,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

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

      // Camera responds smoothly to mouse
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // 72 BPM Ventricular Cardiac Pulse (period: ~0.833s)
      const pulseCycle = (time % 0.833) / 0.833;
      let scale = 1.0;
      if (pulseCycle < 0.18) {
        scale = 1.0 + Math.sin((pulseCycle / 0.18) * Math.PI) * 0.1;
      } else if (pulseCycle > 0.22 && pulseCycle < 0.38) {
        scale = 1.0 + Math.sin(((pulseCycle - 0.22) / 0.16) * Math.PI) * 0.05;
      }
      heartRoot.scale.set(scale, scale, scale);

      // Continuous Slow Orbit
      heartRoot.rotation.y = Math.sin(time * 0.35) * 0.35 + 0.2;
      heartRoot.rotation.x = Math.cos(time * 0.25) * 0.1;

      particles.rotation.y = time * 0.04;

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
