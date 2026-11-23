import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * NeurologySynapseCanvas
 * 3D Neural Network with firing synapses, axonal fibers, and deep blue-violet ambient lighting.
 * Visualizes brain cognition, neuro-pathways, and hyperacute stroke connectivity.
 */
export default function NeurologySynapseCanvas({ className = "" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    camera.position.set(0, 0, 7.0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Atmospheric Lighting
    const amb = new THREE.AmbientLight(0x7C3AED, 1.5);
    scene.add(amb);

    const cyanSpot = new THREE.PointLight(0x22D3EE, 3.5, 20);
    cyanSpot.position.set(4, 5, 5);
    scene.add(cyanSpot);

    const violetFill = new THREE.PointLight(0xA855F7, 3.0, 15);
    violetFill.position.set(-4, -4, 3);
    scene.add(violetFill);

    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Neural Nodes (Synaptic Spheres)
    const nodeCount = 38;
    const nodes = [];
    const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const nodeMat = new THREE.MeshPhysicalMaterial({
      color: 0x8B5CF6,
      emissive: 0x6D28D9,
      emissiveIntensity: 1.2,
      roughness: 0.2,
      clearcoat: 1.0,
    });

    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.position.set(
        (Math.random() - 0.5) * 5.0,
        (Math.random() - 0.5) * 4.2,
        (Math.random() - 0.5) * 3.5
      );
      nodes.push(mesh);
      networkGroup.add(mesh);
    }

    // Axonal Synaptic Connecting Fibers
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const linePositions = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < 2.2) {
          linePositions.push(
            nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
            nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
          );
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    networkGroup.add(lines);

    // Firing Action Potential Pulses
    const impulseGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const impulseMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
    });
    const impulses = [];
    for (let k = 0; k < 6; k++) {
      const imp = new THREE.Mesh(impulseGeo, impulseMat);
      impulses.push({
        mesh: imp,
        from: Math.floor(Math.random() * nodeCount),
        to: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.012
      });
      networkGroup.add(imp);
    }

    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Continuous Slow Rotation
      networkGroup.rotation.y = time * 0.12;
      networkGroup.rotation.x = Math.sin(time * 0.08) * 0.15;

      // Animate action potentials along axons
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
