import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * LuxuryAtmosphere3D
 * Lightweight GPU-Optimized Living Background Atmosphere in Deep Midnight Navy, Crimson Ruby & Warm Platinum.
 * Optimizations:
 * - No MSAA antialiasing on soft alpha sprites (massive GPU fillrate savings)
 * - PixelRatio capped at 1 for ambient background particles
 * - 65 luminous motes + 16x8 cardiac wireframe wave
 * - Auto-pauses when tab is hidden or prefers-reduced-motion is active
 */
export default function LuxuryAtmosphere3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(1);
    container.appendChild(renderer.domElement);

    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    const createRubyGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 48;
      canvas.height = 48;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(24, 24, 0, 24, 24, 24);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(225, 29, 72, 0.9)');
      gradient.addColorStop(0.65, 'rgba(190, 18, 60, 0.35)');
      gradient.addColorStop(1, 'rgba(10, 17, 40, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 48, 48);
      return new THREE.CanvasTexture(canvas);
    };

    const rubyTexture = createRubyGlowTexture();

    // 65 Floating Luminous Light Motes (Ruby)
    const count = 65;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const sways = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 32;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      speeds[i] = Math.random() * 0.012 + 0.005;
      sways[i] = Math.random() * Math.PI * 2;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.48,
      map: rubyTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geo, mat);
    sceneGroup.add(particles);

    // 2. Lightweight Undulating 3D Wireframe Cardiac Plane (16x8 = 153 vertices)
    const planeGeo = new THREE.PlaneGeometry(36, 18, 16, 8);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0xBE123C,
      wireframe: true,
      transparent: true,
      opacity: 0.045,
    });
    const waveMesh = new THREE.Mesh(planeGeo, planeMat);
    waveMesh.position.set(0, -2, -4);
    waveMesh.rotation.x = -Math.PI / 3;
    sceneGroup.add(waveMesh);

    // 3. Floating 3D Geometric Cardiac Rings
    const ringGeo = new THREE.RingGeometry(2.4, 2.45, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x0A1128,
      transparent: true,
      opacity: 0.075,
      side: THREE.DoubleSide,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat1);
    ringMesh1.position.set(7, 3, -2);
    sceneGroup.add(ringMesh1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xE11D48,
      transparent: true,
      opacity: 0.085,
      side: THREE.DoubleSide,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo, ringMat2);
    ringMesh2.position.set(-7, -2, -3);
    ringMesh2.scale.set(1.4, 1.4, 1.4);
    sceneGroup.add(ringMesh2);

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / width) * 2 - 1;
      targetY = -(e.clientY / height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationId;
    let clock = 0;
    let lastTime = 0;
    const FRAME_INTERVAL = 1000 / 45; // Smooth 45fps cap for ambient background frees main GPU for scroll/UI at 60-120fps

    const animate = (now) => {
      animationId = requestAnimationFrame(animate);
      if (document.hidden) return;
      if (now - lastTime < FRAME_INTERVAL) return;
      lastTime = now;

      clock += 0.015;

      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      sceneGroup.rotation.y = currentX * 0.12;
      sceneGroup.rotation.x = currentY * 0.08;

      const pos = planeGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getY(i);
        pos.setZ(i, Math.sin(clock * 1.5 + u * 0.4) * Math.cos(clock * 1.2 + v * 0.3) * 0.7);
      }
      pos.needsUpdate = true;

      ringMesh1.rotation.z = clock * 0.2;
      ringMesh1.rotation.x = clock * 0.15;
      ringMesh2.rotation.z = -clock * 0.18;
      ringMesh2.rotation.y = clock * 0.12;

      const posAttr = geo.attributes.position;
      const array = posAttr.array;

      for (let i = 0; i < count; i++) {
        array[i * 3 + 1] += speeds[i];
        array[i * 3] += Math.sin(clock + sways[i]) * 0.005;

        if (array[i * 3 + 1] > 12) {
          array[i * 3 + 1] = -12;
          array[i * 3] = (Math.random() - 0.5) * 32;
        }
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geo.dispose();
      mat.dispose();
      planeGeo.dispose();
      planeMat.dispose();
      ringGeo.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      rubyTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-1 overflow-hidden select-none"
      aria-hidden="true"
    />
  );
}
