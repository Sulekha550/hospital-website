import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * LuxuryAtmosphere3D
 * Visibly Alive Living Background Atmosphere in Deep Midnight Navy, Crimson Ruby & Warm Platinum
 * Features:
 * - Floating, glowing luminous bio-particles / ruby & platinum light motes drifting upward continuously
 * - Undulating 3D telemetry ribbon mesh that breathes with cardiac systolic/diastolic rhythm
 * - Smooth interactive mouse parallax that causes particles and geometry to sway with user interaction
 * - 100% lightweight and GPU-optimized 60fps
 */
export default function LuxuryAtmosphere3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group for Smooth Ambient Movement
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // Helper to generate soft radial glowing particle texture
    const createRubyGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(225, 29, 72, 0.9)'); // vibrant crimson ruby
      gradient.addColorStop(0.65, 'rgba(190, 18, 60, 0.4)');
      gradient.addColorStop(1, 'rgba(10, 17, 40, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const createPlatinumGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.35, 'rgba(203, 213, 225, 0.85)'); // warm platinum
      gradient.addColorStop(0.7, 'rgba(148, 163, 184, 0.35)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const rubyTexture = createRubyGlowTexture();
    const platinumTexture = createPlatinumGlowTexture();

    // 140 Floating Luminous Light Motes (Ruby & Platinum)
    const count = 140;
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
      size: 0.42,
      map: rubyTexture,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geo, mat);
    sceneGroup.add(particles);

    // 2. Undulating 3D Wireframe Cardiac Plane in Background
    const planeGeo = new THREE.PlaneGeometry(36, 18, 36, 18);
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

    // 3. Floating 3D Geometric Cardiac Octahedron Rings
    const ringGeo = new THREE.RingGeometry(2.4, 2.45, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0A1128,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide
    });
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh1.position.set(7, 3, -2);
    sceneGroup.add(ringMesh1);

    const ringMesh2 = ringMesh1.clone();
    ringMesh2.material = new THREE.MeshBasicMaterial({
      color: 0xE11D48,
      transparent: true,
      opacity: 0.09,
      side: THREE.DoubleSide
    });
    ringMesh2.position.set(-7, -2, -3);
    ringMesh2.scale.set(1.4, 1.4, 1.4);
    sceneGroup.add(ringMesh2);

    // Parallax Interpolation
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationId;
    let clock = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      clock += 0.012;

      // Mouse Parallax Lerp
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      sceneGroup.rotation.y = currentX * 0.14;
      sceneGroup.rotation.x = currentY * 0.09;

      // Animate 3D Undulating Wave Vertices
      const pos = planeGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getY(i);
        const z = Math.sin(clock * 1.5 + u * 0.4) * Math.cos(clock * 1.2 + v * 0.3) * 0.7;
        pos.setZ(i, z);
      }
      pos.needsUpdate = true;

      // Rotate geometric rings
      ringMesh1.rotation.z = clock * 0.2;
      ringMesh1.rotation.x = clock * 0.15;
      ringMesh2.rotation.z = -clock * 0.18;
      ringMesh2.rotation.y = clock * 0.12;

      // Continual Upward Drift & Horizontal Sway for Every Particle
      const posAttr = geo.attributes.position;
      const array = posAttr.array;

      for (let i = 0; i < count; i++) {
        // Upward floating movement
        array[i * 3 + 1] += speeds[i];
        // Gentle sinusoidal horizontal sway
        array[i * 3] += Math.sin(clock + sways[i]) * 0.005;

        // Reset if drifted beyond top boundary
        if (array[i * 3 + 1] > 12) {
          array[i * 3 + 1] = -12;
          array[i * 3] = (Math.random() - 0.5) * 32;
        }
      }

      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };
    window.addEventListener('resize', handleResize);

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
      ringMat.dispose();
      rubyTexture.dispose();
      platinumTexture.dispose();
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
