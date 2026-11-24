import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Activity, Zap, Eye, RotateCw } from 'lucide-react';

/**
 * PhotorealisticHeart3D - Next-Gen Vibrant Anatomical Cardiac Visualizer
 * Completely reimagined with deep ruby/crimson biological myocardium,
 * sapphire great vessels, glowing golden coronary arteries, and neon aqua pacing nodes.
 * ZERO white egg/balloon aesthetics - 100% rich, colorful, high-definition anatomical fidelity.
 */
export default function PhotorealisticHeart3D({ 
  interactive = true, 
  activeDomain = 'interventional',
  onSelectDomain = null,
  className = "" 
}) {
  const mountRef = useRef(null);
  const targetRotationRef = useRef({ rotY: 0, rotX: 0 });
  const [viewMode, setViewMode] = useState('full'); // 'full', 'vessels', 'electrical'

  // Smooth rotation targeting when activeDomain changes
  useEffect(() => {
    const domainTargets = {
      'interventional': { rotY: 0.15, rotX: 0.1 },
      'coronary': { rotY: 0.95, rotX: 0.25 },
      'pacemaker': { rotY: -0.85, rotX: -0.15 },
    };
    if (activeDomain && domainTargets[activeDomain]) {
      targetRotationRef.current.rotY = domainTargets[activeDomain].rotY;
      targetRotationRef.current.rotX = domainTargets[activeDomain].rotX;
    }
  }, [activeDomain]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 550;
    let height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 50);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // --- VIBRANT MULTI-COLOR LIGHTING RIG ---
    const amb = new THREE.AmbientLight(0x2A0845, 2.5); // Deep purple ambient
    scene.add(amb);

    const keySun = new THREE.DirectionalLight(0xFFE4E6, 3.2); // Warm rose-white
    keySun.position.set(6, 8, 7);
    scene.add(keySun);

    const cyanRim = new THREE.DirectionalLight(0x00F0FF, 4.0); // Electric Aqua Rim
    cyanRim.position.set(-7, -2, -4);
    scene.add(cyanRim);

    const rubyRim = new THREE.DirectionalLight(0xFF1744, 4.5); // Vivid Crimson Rim
    rubyRim.position.set(6, -4, 3);
    scene.add(rubyRim);

    const goldAccent = new THREE.PointLight(0xFBBF24, 3.0, 15); // Golden Nodal Fill
    goldAccent.position.set(-2, 3, 4);
    scene.add(goldAccent);

    const heartRoot = new THREE.Group();
    scene.add(heartRoot);
    heartRoot.rotation.z = -0.12;

    // --- VIBRANT RICH MATERIALS (NO PALE WHITE BALLOONS) ---
    // Deep Ruby / Crimson Biological Myocardium
    const myoMat = new THREE.MeshPhysicalMaterial({
      color: 0x991B1B,            // Deep Crimson
      emissive: 0x7F1D1D,         // Ruby Bioluminescence
      emissiveIntensity: 0.35,
      roughness: 0.28,
      metalness: 0.15,
      clearcoat: 0.85,
      clearcoatRoughness: 0.12,
      transmission: 0.15,
      thickness: 1.2,
      specularIntensity: 2.2,
      specularColor: 0xF43F5E,    // Coral rose sheen
    });

    // Aortic Arch & Major Arteries (Radiant Coral/Crimson with Gold Rim)
    const aortaMat = new THREE.MeshPhysicalMaterial({
      color: 0xBE123C,            // Vivid Ruby Rose
      emissive: 0x881337,
      emissiveIntensity: 0.45,
      roughness: 0.2,
      metalness: 0.25,
      clearcoat: 0.9,
    });

    // Pulmonary Artery & Vena Cava (Electric Royal Sapphire Blue)
    const veinMat = new THREE.MeshPhysicalMaterial({
      color: 0x0369A1,            // Vivid Cobalt Blue
      emissive: 0x059669,         // Glowing Electric Cyan
      emissiveIntensity: 0.5,
      roughness: 0.22,
      metalness: 0.2,
      clearcoat: 0.85,
    });

    // Glowing Coronary Arteries (Left Anterior Descending & Right Coronary)
    const coronaryMat = new THREE.MeshStandardMaterial({
      color: 0xF59E0B,            // Glowing Gold/Amber
      emissive: 0xF43F5E,         // Radiant Crimson Pulse
      emissiveIntensity: 3.5,
      roughness: 0.1,
    });

    // Electrical Pacing Conduction Nodes (Intense Neon Aqua)
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x00F0FF,            // Electric Cyan
      emissive: 0x00F0FF,
      emissiveIntensity: 4.5,
      roughness: 0.05,
    });

    // --- ANATOMICAL CARDIAC CHAMBERS & GEOMETRY ---
    // 1. Left Ventricle (Thick Muscular Myocardium)
    const lvGeo = new THREE.SphereGeometry(1.35, 48, 48);
    lvGeo.scale(0.88, 1.45, 0.82);
    const lv = new THREE.Mesh(lvGeo, myoMat);
    lv.position.set(0.18, -0.35, 0.1);
    lv.rotation.z = 0.22;
    heartRoot.add(lv);

    // 2. Right Ventricle (Anterior Crescent)
    const rvGeo = new THREE.SphereGeometry(1.18, 40, 40);
    rvGeo.scale(0.85, 1.25, 0.78);
    const rv = new THREE.Mesh(rvGeo, myoMat);
    rv.position.set(-0.72, -0.25, 0.3);
    rv.rotation.z = -0.15;
    heartRoot.add(rv);

    // 3. Pointed Cardiac Apex
    const apexGeo = new THREE.ConeGeometry(0.75, 1.25, 40);
    const apex = new THREE.Mesh(apexGeo, myoMat);
    apex.position.set(0.22, -1.95, 0.15);
    apex.rotation.x = Math.PI;
    apex.rotation.z = 0.25;
    heartRoot.add(apex);

    // 4. Left & Right Atria
    const la = new THREE.Mesh(new THREE.SphereGeometry(0.88, 32, 32), myoMat);
    la.position.set(0.68, 0.95, -0.28);
    heartRoot.add(la);

    const ra = new THREE.Mesh(new THREE.SphereGeometry(0.92, 32, 32), myoMat);
    ra.position.set(-0.95, 0.88, 0.08);
    heartRoot.add(ra);

    // 5. Aorta Arch (Radiant Ruby)
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.1, 0.4, 0),
      new THREE.Vector3(0.2, 1.5, 0.1),
      new THREE.Vector3(-0.1, 2.3, 0),
      new THREE.Vector3(-0.9, 2.1, -0.3),
      new THREE.Vector3(-1.1, 0.7, -0.6)
    ]);
    const aorta = new THREE.Mesh(new THREE.TubeGeometry(aortaCurve, 40, 0.44, 20, false), aortaMat);
    heartRoot.add(aorta);

    // 3 Brachiocephalic Arterial Branches from Arch
    const branchPositions = [
      new THREE.Vector3(-0.1, 2.25, 0.05),
      new THREE.Vector3(-0.4, 2.25, -0.1),
      new THREE.Vector3(-0.7, 2.15, -0.22)
    ];
    branchPositions.forEach((pos, i) => {
      const branchCurve = new THREE.CatmullRomCurve3([
        pos,
        new THREE.Vector3(pos.x + 0.05, pos.y + 0.65, pos.z + 0.05)
      ]);
      const branch = new THREE.Mesh(new THREE.TubeGeometry(branchCurve, 12, 0.12 - i * 0.015, 12, false), aortaMat);
      heartRoot.add(branch);
    });

    // 6. Pulmonary Trunk & Artery (Electric Cobalt Blue)
    const pulmCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.3, 0.4, 0.45),
      new THREE.Vector3(0.0, 1.3, 0.35),
      new THREE.Vector3(0.5, 1.6, -0.1)
    ]);
    const pulmonary = new THREE.Mesh(new THREE.TubeGeometry(pulmCurve, 28, 0.4, 18, false), veinMat);
    heartRoot.add(pulmonary);

    // Superior Vena Cava (Electric Cobalt Blue)
    const svcCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.95, 1.1, -0.1),
      new THREE.Vector3(-0.95, 2.2, -0.15)
    ]);
    const svc = new THREE.Mesh(new THREE.TubeGeometry(svcCurve, 16, 0.32, 16, false), veinMat);
    heartRoot.add(svc);

    // 7. GLOWING GOLDEN CORONARY ARTERIAL TREE (LAD & RCA)
    // Left Anterior Descending Artery (LAD)
    const ladCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.0, 0.7, 0.7),
      new THREE.Vector3(0.1, 0.1, 0.95),
      new THREE.Vector3(0.18, -0.5, 0.9),
      new THREE.Vector3(0.22, -1.1, 0.7),
      new THREE.Vector3(0.2, -1.8, 0.3)
    ]);
    const lad = new THREE.Mesh(new THREE.TubeGeometry(ladCurve, 36, 0.08, 12, false), coronaryMat);
    heartRoot.add(lad);

    // LAD Diagonal Branches
    const diag1Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.1, 0.1, 0.95),
      new THREE.Vector3(0.5, -0.3, 0.8),
      new THREE.Vector3(0.7, -0.8, 0.5)
    ]);
    const diag1 = new THREE.Mesh(new THREE.TubeGeometry(diag1Curve, 20, 0.05, 10, false), coronaryMat);
    heartRoot.add(diag1);

    // Right Coronary Artery (RCA)
    const rcaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.4, 0.7, 0.55),
      new THREE.Vector3(-0.95, 0.3, 0.65),
      new THREE.Vector3(-1.1, -0.4, 0.4),
      new THREE.Vector3(-0.8, -1.1, 0.1)
    ]);
    const rca = new THREE.Mesh(new THREE.TubeGeometry(rcaCurve, 30, 0.07, 12, false), coronaryMat);
    heartRoot.add(rca);

    // 8. SINOATRIAL (SA) & ATRIOVENTRICULAR (AV) PACING NODES (Neon Aqua)
    const saNode = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 20), nodeMat);
    saNode.position.set(-1.05, 1.5, 0.2);
    heartRoot.add(saNode);

    const avNode = new THREE.Mesh(new THREE.SphereGeometry(0.13, 20, 20), nodeMat);
    avNode.position.set(-0.25, 0.25, 0.45);
    heartRoot.add(avNode);

    // Conduction Pathway Fibers (Bundle of His)
    const conductionCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.05, 1.5, 0.2),
      new THREE.Vector3(-0.6, 0.9, 0.35),
      new THREE.Vector3(-0.25, 0.25, 0.45),
      new THREE.Vector3(-0.05, -0.3, 0.6),
      new THREE.Vector3(0.1, -0.9, 0.5)
    ]);
    const conductionFiber = new THREE.Mesh(new THREE.TubeGeometry(conductionCurve, 24, 0.035, 8, false), nodeMat);
    heartRoot.add(conductionFiber);

    // 9. BIOLUMINESCENT BLOOD FLOW PARTICLES
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const t = Math.random();
      const pt = ladCurve.getPoint(t);
      particlePos[i * 3] = pt.x + (Math.random() - 0.5) * 0.05;
      particlePos[i * 3 + 1] = pt.y + (Math.random() - 0.5) * 0.05;
      particlePos[i * 3 + 2] = pt.z + (Math.random() - 0.5) * 0.05;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00F0FF,
      size: 0.12,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const flowParticles = new THREE.Points(particleGeo, particleMat);
    heartRoot.add(flowParticles);

    // 10. NEON ORBITAL TELEMETRY RINGS (CYAN & ROSE)
    const ringsGroup = new THREE.Group();
    heartRoot.add(ringsGroup);

    const ringMat1 = new THREE.MeshBasicMaterial({ 
      color: 0x00F0FF, 
      transparent: true, 
      opacity: 0.55, 
      wireframe: true 
    });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.02, 12, 80), ringMat1);
    ring1.rotation.x = Math.PI / 2.2;
    ringsGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({ 
      color: 0xF43F5E, 
      transparent: true, 
      opacity: 0.45, 
      wireframe: true 
    });
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.015, 12, 90), ringMat2);
    ring2.rotation.x = -Math.PI / 2.5;
    ring2.rotation.z = 0.4;
    ringsGroup.add(ring2);

    // --- MOUSE DRAG & PARALLAX ---
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - prevX;
        const deltaY = e.clientY - prevY;
        targetRotationRef.current.rotY += deltaX * 0.008;
        targetRotationRef.current.rotX += deltaY * 0.008;
        prevX = e.clientX;
        prevY = e.clientY;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    if (interactive) {
      container.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }

    // --- ANIMATION LOOP (72 BPM PHYSIOLOGICAL CARDIAC PUMP) ---
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Biphasic cardiac contraction
      const bpmCycle = (time % 0.833) / 0.833;
      let scaleOffset = 0;
      let emissivePulse = 1.0;

      if (bpmCycle < 0.15) {
        scaleOffset = Math.sin(bpmCycle * Math.PI / 0.15) * 0.05;
      } else if (bpmCycle >= 0.15 && bpmCycle < 0.42) {
        const sys = (bpmCycle - 0.15) / 0.27;
        scaleOffset = -Math.sin(sys * Math.PI) * 0.08;
        emissivePulse = 1.0 + Math.sin(sys * Math.PI) * 1.8;
      } else {
        scaleOffset = Math.sin((bpmCycle - 0.42) * Math.PI / 0.58) * 0.03;
      }

      heartRoot.scale.set(1 + scaleOffset, 1 - scaleOffset * 0.7, 1 + scaleOffset);
      coronaryMat.emissiveIntensity = 2.5 * emissivePulse;
      nodeMat.emissiveIntensity = 3.5 + Math.sin(time * 8) * 1.5;

      // Slowly move blood flow particles along the LAD artery
      const positions = flowParticles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        let t = ((time * 0.6 + i / particleCount) % 1.0);
        const pt = ladCurve.getPoint(t);
        positions[i * 3] = pt.x;
        positions[i * 3 + 1] = pt.y;
        positions[i * 3 + 2] = pt.z;
      }
      flowParticles.geometry.attributes.position.needsUpdate = true;

      // Ambient slow spin + drag interpolation
      if (!isDragging) {
        targetRotationRef.current.rotY += 0.0035;
      }
      heartRoot.rotation.y += (targetRotationRef.current.rotY - heartRoot.rotation.y) * 0.06;
      heartRoot.rotation.x += (targetRotationRef.current.rotX + 0.1 - heartRoot.rotation.x) * 0.06;

      ringsGroup.rotation.y = -time * 0.04;
      ringsGroup.rotation.x = time * 0.02;

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
      if (interactive) {
        container.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      }
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
      {/* 3D WebGL Canvas */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing" 
        title="Interactive 3D Anatomical Heart — Drag to rotate in 360°"
      />

      {/* Floating Vibrant Telemetry Pill */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 shadow-lg text-xs font-bold text-white">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
        <span className="text-cyan-300 font-mono">72 BPM</span>
        <span className="text-slate-400">•</span>
        <span className="text-slate-200">Drag to Inspect in 360°</span>
      </div>

      {/* Anatomy Markers */}
      <div className="absolute top-3 left-3 pointer-events-none flex flex-col gap-1.5 text-[10px] font-mono font-medium">
        <span className="px-2 py-0.5 rounded bg-emerald-600/80 text-white shadow-sm">
          Aorta & LAD Arteries
        </span>
        <span className="px-2 py-0.5 rounded bg-cyan-600/80 text-white shadow-sm">
          Vena Cava & Nodes
        </span>
      </div>
    </div>
  );
}
