import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * NeurologyFullCanvas
 * Full-section background environment for Neurology:
 * 3D Neural Network with 60+ synaptic nodes, axonal fibers, firing action potentials,
 * and deep blue-violet ambient lighting.
 */
export default function NeurologyFullCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Atmospheric Deep Violet Lighting
    const amb = new THREE.AmbientLight(0x7C3AED, 1.8);
    scene.add(amb);

    const cyanSpot = new THREE.PointLight(0x22D3EE, 4.0, 25);
    cyanSpot.position.set(6, 6, 6);
    scene.add(cyanSpot);

    const purpleSpot = new THREE.PointLight(0xA855F7, 3.5, 20);
    purpleSpot.position.set(-6, -4, 4);
    scene.add(purpleSpot);

    const networkGroup = new THREE.Group();
    // Offset slightly right for visual balance
    networkGroup.position.set(1.5, 0, 0);
    scene.add(networkGroup);

    // 55 Synaptic Nodes
    const nodeCount = 55;
    const nodes = [];
    const nodeGeo = new THREE.SphereGeometry(0.14, 16, 16);
    const nodeMat = new THREE.MeshPhysicalMaterial({
      color: 0x8B5CF6,
      emissive: 0x6D28D9,
      emissiveIntensity: 1.5,
      roughness: 0.2,
      clearcoat: 1.0,
    });

    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.position.set(
        (Math.random() - 0.5) * 8.5,
        (Math.random() - 0.5) * 6.5,
        (Math.random() - 0.5) * 5.0
      );
      nodes.push(mesh);
      networkGroup.add(mesh);
    }

    // Axonal Connecting Fibers
    const linePositions = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < 2.8) {
          linePositions.push(
            nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
            nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
          );
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    networkGroup.add(lines);

    // Firing Action Potentials (Cyan Energy Pulses)
    const impGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const impMat = new THREE.MeshBasicMaterial({ color: 0x22D3EE });
    const impulses = [];
    for (let k = 0; k < 12; k++) {
      const imp = new THREE.Mesh(impGeo, impMat);
      impulses.push({
        mesh: imp,
        from: Math.floor(Math.random() * nodeCount),
        to: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
        speed: 0.009 + Math.random() * 0.015
      });
      networkGroup.add(imp);
    }

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

      // Smooth camera tilt
      camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.4 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Continuous Slow Orbit
      networkGroup.rotation.y = time * 0.12;
      networkGroup.rotation.x = Math.sin(time * 0.08) * 0.15;

      // Move action potential pulses
      impulses.forEach((item) => {
        item.progress += item.speed;
        if (item.progress > 1.0) {
          item.progress = 0;
          item.from = Math.floor(Math.random() * nodeCount);
          item.to = Math.floor(Math.random() * nodeCount);
        }
        const p1 = nodes[item.from].position;
        const p2 = nodes[item.to].position;
        item.mesh.position.lerpVectors(p1, p2, item.progress);
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
