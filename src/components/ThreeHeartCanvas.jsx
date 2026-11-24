import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { pulseAudio } from '../utils/soundEffects';

/**
 * ThreeHeartCanvas - High-Fidelity 3D Anatomical Heart with Architectural Glass Ribbons
 * Features:
 * - Procedural anatomical heart chambers (Ventricles, Atria, Aortic Arch, Pulmonary Trunk, Coronary Arteries)
 * - Realistic physiological cardiac contraction cycle (72 BPM biphasic systole/diastole)
 * - Translucent physical materials with iridescence, clearcoat, and glowing coronary vasculature
 * - Orbiting architectural glass rings and floating bio-luminescent particles
 * - Interactive mouse parallax and drag tilt
 */
export default function ThreeHeartCanvas({ 
  interactive = true, 
  activeHotspot = null, 
  onSelectHotspot = null,
  showRings = true,
  className = ""
}) {
  const mountRef = useRef(null);
  const [hoveredPart, setHoveredPart] = useState(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 600;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance" 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Lighting Rig (Luxury Pearl & Electric Studio Setup)
    const ambientLight = new THREE.AmbientLight(0xf0f9ff, 1.4);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    mainKeyLight.position.set(5, 8, 7);
    scene.add(mainKeyLight);

    const electricRimLight = new THREE.DirectionalLight(0x0284c7, 3.5);
    electricRimLight.position.set(-6, -2, -4);
    scene.add(electricRimLight);

    const violetFillLight = new THREE.PointLight(0xa855f7, 2.2, 20);
    violetFillLight.position.set(4, -4, 3);
    scene.add(violetFillLight);

    const coralGlowLight = new THREE.PointLight(0xf43f5e, 1.8, 15);
    coralGlowLight.position.set(0, -1, 2);
    scene.add(coralGlowLight);

    // 3. Heart Group Hierarchy
    const heartRoot = new THREE.Group();
    scene.add(heartRoot);

    // Subtle natural tilt of cardiac axis (~45 deg to left and anterior)
    heartRoot.rotation.z = -0.15;
    heartRoot.rotation.x = 0.1;

    // --- MATERIALS ---
    // Translucent Pearl-Crystal Myocardium
    const myocardialMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfaf5ff,
      emissive: 0x0284c7,
      emissiveIntensity: 0.08,
      roughness: 0.22,
      metalness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.28,
      ior: 1.42,
      thickness: 1.2,
      specularIntensity: 1.5,
      specularColor: 0x38bdf8,
    });

    // Right Ventricle subtle accent
    const rightVentricleMaterial = myocardialMaterial.clone();
    rightVentricleMaterial.color = new THREE.Color(0xf1f5f9);

    // Great Vessels (Aorta & Pulmonary Artery) - Electric Blue / Ice Sheen
    const aortaMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe0f2fe,
      emissive: 0x0369a1,
      emissiveIntensity: 0.15,
      roughness: 0.18,
      metalness: 0.25,
      clearcoat: 1.0,
      transmission: 0.18,
      ior: 1.5,
    });

    const pulmonaryMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xede9fe,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.12,
      roughness: 0.2,
      metalness: 0.2,
      clearcoat: 0.9,
      transmission: 0.2,
    });

    // Glowing Coronary Arteries (Vascular network)
    const coronaryMaterial = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      emissive: 0xf43f5e,
      emissiveIntensity: 1.6,
      roughness: 0.3,
    });

    const conductionNodeMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 2.2,
      roughness: 0.2,
    });

    // --- PROCEDURAL ANATOMICAL GEOMETRY ---
    // 1. Left Ventricle (Apex & Main Mass)
    const lvGeo = new THREE.SphereGeometry(1.3, 36, 36);
    lvGeo.scale(0.9, 1.4, 0.85);
    const leftVentricle = new THREE.Mesh(lvGeo, myocardialMaterial);
    leftVentricle.position.set(0.2, -0.3, 0.1);
    leftVentricle.rotation.z = 0.2;
    heartRoot.add(leftVentricle);

    // 2. Right Ventricle
    const rvGeo = new THREE.SphereGeometry(1.15, 32, 32);
    rvGeo.scale(0.85, 1.2, 0.8);
    const rightVentricle = new THREE.Mesh(rvGeo, rightVentricleMaterial);
    rightVentricle.position.set(-0.7, -0.2, 0.3);
    rightVentricle.rotation.z = -0.15;
    heartRoot.add(rightVentricle);

    // 3. Cardiac Apex (Pointed bottom)
    const apexGeo = new THREE.ConeGeometry(0.7, 1.1, 32);
    const apex = new THREE.Mesh(apexGeo, myocardialMaterial);
    apex.position.set(0.2, -1.8, 0.15);
    apex.rotation.x = Math.PI;
    apex.rotation.z = 0.25;
    heartRoot.add(apex);

    // 4. Left Atrium (Posterior/Superior)
    const laGeo = new THREE.SphereGeometry(0.85, 28, 28);
    laGeo.scale(1, 0.85, 0.9);
    const leftAtrium = new THREE.Mesh(laGeo, myocardialMaterial);
    leftAtrium.position.set(0.65, 0.9, -0.3);
    heartRoot.add(leftAtrium);

    // 5. Right Atrium (Right lateral/superior)
    const raGeo = new THREE.SphereGeometry(0.9, 28, 28);
    raGeo.scale(0.9, 0.95, 0.85);
    const rightAtrium = new THREE.Mesh(raGeo, myocardialMaterial);
    rightAtrium.position.set(-0.95, 0.85, 0.05);
    heartRoot.add(rightAtrium);

    // 6. Aorta (Ascending, Arch, Descending with 3 Brachiocephalic branches)
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.0, 0.5, 0.0),
      new THREE.Vector3(0.1, 1.4, 0.1),
      new THREE.Vector3(0.0, 2.0, 0.0),
      new THREE.Vector3(-0.5, 2.1, -0.2),
      new THREE.Vector3(-0.9, 1.6, -0.4),
      new THREE.Vector3(-0.8, 0.2, -0.5),
    ]);
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 32, 0.38, 20, false);
    const aortaMesh = new THREE.Mesh(aortaGeo, aortaMaterial);
    heartRoot.add(aortaMesh);

    // Brachiocephalic artery branches takeoff from arch
    const branch1Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.15, 2.05, 0.0),
      new THREE.Vector3(-0.15, 2.65, 0.1),
    ]);
    const branch1 = new THREE.Mesh(new THREE.TubeGeometry(branch1Curve, 10, 0.09, 12, false), aortaMaterial);
    heartRoot.add(branch1);

    const branch2Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.35, 2.08, -0.1),
      new THREE.Vector3(-0.4, 2.62, -0.05),
    ]);
    const branch2 = new THREE.Mesh(new THREE.TubeGeometry(branch2Curve, 10, 0.08, 12, false), aortaMaterial);
    heartRoot.add(branch2);

    const branch3Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.55, 2.0, -0.2),
      new THREE.Vector3(-0.65, 2.55, -0.15),
    ]);
    const branch3 = new THREE.Mesh(new THREE.TubeGeometry(branch3Curve, 10, 0.08, 12, false), aortaMaterial);
    heartRoot.add(branch3);

    // 7. Pulmonary Artery Trunk
    const pulmonaryCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.4, 0.6, 0.4),
      new THREE.Vector3(-0.3, 1.3, 0.35),
      new THREE.Vector3(0.3, 1.4, -0.1),
    ]);
    const pulmonaryMesh = new THREE.Mesh(new THREE.TubeGeometry(pulmonaryCurve, 24, 0.32, 16, false), pulmonaryMaterial);
    heartRoot.add(pulmonaryMesh);

    // 8. Coronary Arterial Vascular Network (LAD, RCA, Circumflex)
    const ladCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.05, 0.5, 0.95),
      new THREE.Vector3(-0.1, 0.0, 1.05),
      new THREE.Vector3(0.0, -0.6, 0.95),
      new THREE.Vector3(0.12, -1.2, 0.65),
      new THREE.Vector3(0.2, -1.75, 0.25),
    ]);
    const ladMesh = new THREE.Mesh(new THREE.TubeGeometry(ladCurve, 32, 0.055, 10, false), coronaryMaterial);
    heartRoot.add(ladMesh);

    // Diagonal branches
    const diagCurve1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.08, 0.1, 1.02),
      new THREE.Vector3(0.4, -0.2, 0.85),
      new THREE.Vector3(0.65, -0.5, 0.6),
    ]);
    const diagMesh1 = new THREE.Mesh(new THREE.TubeGeometry(diagCurve1, 16, 0.035, 8, false), coronaryMaterial);
    heartRoot.add(diagMesh1);

    // RCA (Right Coronary Artery)
    const rcaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.6, 0.45, 0.5),
      new THREE.Vector3(-0.95, 0.1, 0.55),
      new THREE.Vector3(-1.05, -0.5, 0.4),
      new THREE.Vector3(-0.85, -1.1, 0.2),
    ]);
    const rcaMesh = new THREE.Mesh(new THREE.TubeGeometry(rcaCurve, 24, 0.045, 8, false), coronaryMaterial);
    heartRoot.add(rcaMesh);

    // 9. SA/AV Node Pacing Marker (Pacemaker connection node)
    const saNodeGeo = new THREE.SphereGeometry(0.14, 16, 16);
    const saNodeMesh = new THREE.Mesh(saNodeGeo, conductionNodeMaterial);
    saNodeMesh.position.set(-0.88, 1.25, 0.15);
    heartRoot.add(saNodeMesh);

    // 10. Architectural Floating Glass Rings (Surrounding the heart)
    const ringsGroup = new THREE.Group();
    if (showRings) {
      scene.add(ringsGroup);

      const ringMaterial1 = new THREE.MeshPhysicalMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.1,
        transmission: 0.85,
        roughness: 0.1,
        metalness: 0.05,
        ior: 1.35,
        transparent: true,
        opacity: 0.5,
      });

      const ring1Geo = new THREE.TorusGeometry(2.7, 0.035, 16, 100);
      const ring1 = new THREE.Mesh(ring1Geo, ringMaterial1);
      ring1.rotation.x = Math.PI / 2.8;
      ring1.rotation.y = 0.2;
      ringsGroup.add(ring1);

      const ring2Geo = new THREE.TorusGeometry(3.3, 0.02, 16, 120);
      const ring2 = new THREE.Mesh(ring2Geo, ringMaterial1);
      ring2.rotation.x = -Math.PI / 3.2;
      ring2.rotation.z = 0.4;
      ringsGroup.add(ring2);

      // Orbiting Clinical Data Spheres
      const dataOrbGeo = new THREE.SphereGeometry(0.07, 16, 16);
      const dataOrbMat = new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        emissive: 0x06b6d4,
        emissiveIntensity: 2.0,
      });

      for (let i = 0; i < 6; i++) {
        const orb = new THREE.Mesh(dataOrbGeo, dataOrbMat);
        const angle = (i / 6) * Math.PI * 2;
        orb.position.set(Math.cos(angle) * 2.7, Math.sin(angle) * 0.4, Math.sin(angle) * 2.7);
        ringsGroup.add(orb);
      }
    }

    // 11. Subtle Ambient Particle Dust (Medical Science atmosphere)
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 12;
      particlePos[i + 1] = (Math.random() - 0.5) * 10;
      particlePos[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- MOUSE PARALLAX & DRAG INTERACTION ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = normX;
      mouseY = normY;

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotY += deltaX * 0.008;
        targetRotX += deltaY * 0.008;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    if (interactive) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
    }

    // --- ANIMATION LOOP (72 BPM CARDIAC CYCLE) ---
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Realistic Biphasic Cardiac Pulse Wave (72 BPM = period ~0.833s)
      const bpmCycle = (time % 0.833) / 0.833;
      let scaleOffset = 0;
      let emissivePulse = 1.0;

      if (bpmCycle < 0.15) {
        // Atrial kick & Ventricular pre-contraction
        scaleOffset = Math.sin(bpmCycle * Math.PI / 0.15) * 0.035;
      } else if (bpmCycle >= 0.15 && bpmCycle < 0.42) {
        // Ventricular Systole (deep contraction)
        const systolePhase = (bpmCycle - 0.15) / 0.27;
        scaleOffset = -Math.sin(systolePhase * Math.PI) * 0.06;
        emissivePulse = 1.0 + Math.sin(systolePhase * Math.PI) * 1.5;
      } else {
        // Diastolic relaxation & passive filling
        scaleOffset = Math.sin((bpmCycle - 0.42) * Math.PI / 0.58) * 0.015;
      }

      // Apply cardiac deformation
      heartRoot.scale.set(
        1 + scaleOffset, 
        1 - scaleOffset * 0.7, 
        1 + scaleOffset
      );

      // Pulse coronary arterial glow with systole
      coronaryMaterial.emissiveIntensity = 1.2 * emissivePulse;
      conductionNodeMaterial.emissiveIntensity = 1.5 + Math.sin(time * 8) * 0.8;

      // Smooth inertia rotation
      if (!isDragging) {
        targetRotY += 0.0035; // Slow ambient architectural spin
        targetRotX = mouseY * 0.25;
      }
      heartRoot.rotation.y += (targetRotY - heartRoot.rotation.y) * 0.06;
      heartRoot.rotation.x += (targetRotX + 0.1 - heartRoot.rotation.x) * 0.06;

      // Rotate architectural rings
      if (showRings && ringsGroup) {
        ringsGroup.rotation.y -= 0.002;
        ringsGroup.rotation.x += 0.001;
      }

      // Gentle floating particles
      particles.rotation.y = time * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
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
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      }
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive, showRings]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Anatomical Heart — Drag to rotate"
      />
      
      {/* 3D Interaction Badge */}
      <div className="absolute bottom-3 left-4 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm text-xs font-medium text-slate-600">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        <span>Interactive 3D Anatomical Geometry • 72 BPM Rhythm</span>
      </div>
    </div>
  );
}
