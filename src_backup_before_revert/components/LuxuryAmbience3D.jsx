import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * LuxuryAmbience3D - High-End Award-Winning Atmospheric Canvas
 * Features:
 * - Floating crystal glass architectural ribbons
 * - Bioluminescent floating data nodes & caustic light refractions
 * - Dynamic mouse tilt & slow ambient orbital rotation
 * - Luminous, airy pearl-white & ice-blue luxury atmosphere
 */
export default function LuxuryAmbience3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xF8FAFD, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Luxury Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xF8FAFC, 2.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xFFFFFF, 2.5);
    sunLight.position.set(6, 10, 8);
    scene.add(sunLight);

    const cyanRim = new THREE.DirectionalLight(0x00F0FF, 2.8);
    cyanRim.position.set(-8, -4, -4);
    scene.add(cyanRim);

    const roseFill = new THREE.PointLight(0xFF3366, 2.0, 30);
    roseFill.position.set(4, -5, 4);
    scene.add(roseFill);

    const violetFill = new THREE.PointLight(0x8B5CF6, 1.8, 30);
    violetFill.position.set(-5, 6, -5);
    scene.add(violetFill);

    // Group for floating architectural elements
    const artGroup = new THREE.Group();
    scene.add(artGroup);

    // 1. Fluid Sculptural Glass Ribbons (Smooth Bezier Toruses)
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xF0F9FF,
      emissive: 0x0284C7,
      emissiveIntensity: 0.08,
      roughness: 0.1,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.92,
      ior: 1.45,
      transparent: true,
      opacity: 0.65,
    });

    const ribbon1 = new THREE.Mesh(new THREE.TorusGeometry(5.5, 0.045, 16, 120), glassMat);
    ribbon1.rotation.x = Math.PI / 3;
    ribbon1.rotation.y = 0.4;
    artGroup.add(ribbon1);

    const ribbon2 = new THREE.Mesh(new THREE.TorusGeometry(7.2, 0.035, 16, 140), glassMat);
    ribbon2.rotation.x = -Math.PI / 2.8;
    ribbon2.rotation.z = 0.5;
    artGroup.add(ribbon2);

    const ribbon3 = new THREE.Mesh(new THREE.TorusGeometry(9.0, 0.025, 16, 160), glassMat);
    ribbon3.rotation.y = Math.PI / 2.2;
    artGroup.add(ribbon3);

    // 2. Floating Bioluminescent Cardiac Nodes (Particles)
    const particleCount = 140;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 18;
      posArray[i + 1] = (Math.random() - 0.5) * 14;
      posArray[i + 2] = (Math.random() - 0.5) * 10;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x0284C7,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    artGroup.add(particles);

    // Mouse Parallax & Scroll Interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      // Slow majestic rotation
      artGroup.rotation.y = time * 0.03 + mouseX * 0.2;
      artGroup.rotation.x = Math.sin(time * 0.02) * 0.1 - mouseY * 0.15;

      ribbon1.rotation.z = time * 0.04;
      ribbon2.rotation.z = -time * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
}
