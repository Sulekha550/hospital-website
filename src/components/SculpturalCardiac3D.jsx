import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Activity, ShieldCheck, RotateCw } from 'lucide-react';

/**
 * SculpturalCardiac3D
 * Custom-designed abstract anatomical 3D cardiac sculpture
 * - Biological ruby myocardium with pearl & silver specular clearcoat
 * - Translucent aortic arch & great vessels
 * - Glowing branching coronary arteries (LAD, Circumflex, RCA)
 * - Rhythmic 72 BPM ventricular cardiac pulse
 * - Interactive mouse drag & continuous slow orbit
 */
export default function SculpturalCardiac3D({ className = "" }) {
  const mountRef = useRef(null);
  const [bpm, setBpm] = useState(72);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 450;
    let height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0, 7.8);

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

    // Multi-Angle Luxury Studio Lighting Rig
    const amb = new THREE.AmbientLight(0xF5F0FF, 2.2);
    scene.add(amb);

    const keySun = new THREE.DirectionalLight(0xFFFFFF, 3.2);
    keySun.position.set(6, 8, 7);
    scene.add(keySun);

    const silverRim = new THREE.DirectionalLight(0xE2E8F0, 4.0);
    silverRim.position.set(-7, -2, -4);
    scene.add(silverRim);

    const rubyRim = new THREE.DirectionalLight(0xE11D48, 3.8);
    rubyRim.position.set(6, -4, 3);
    scene.add(rubyRim);

    const lavenderFill = new THREE.PointLight(0xC4B5FD, 2.5, 20);
    lavenderFill.position.set(-3, 4, 3);
    scene.add(lavenderFill);

    const heartGroup = new THREE.Group();
    scene.add(heartGroup);
    heartGroup.rotation.z = -0.12;

    // --- High-End Sculptural Materials ---
    // Deep Ruby / Crimson Biological Myocardium
    const myoMat = new THREE.MeshPhysicalMaterial({
      color: 0x9F1239,
      emissive: 0x881337,
      emissiveIntensity: 0.35,
      roughness: 0.22,
      metalness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.12,
      specularIntensity: 2.5,
      specularColor: 0xFDE047,
    });

    // Translucent Aortic Arch & Great Vessels
    const aortaMat = new THREE.MeshPhysicalMaterial({
      color: 0xBE123C,
      emissive: 0x9F1239,
      emissiveIntensity: 0.4,
      roughness: 0.15,
      clearcoat: 1.0,
      transmission: 0.35,
      ior: 1.45,
    });

    // Glowing Platinum/Golden Coronary Arteries
    const arteryMat = new THREE.MeshStandardMaterial({
      color: 0xFDE047,
      emissive: 0xF59E0B,
      emissiveIntensity: 0.75,
      roughness: 0.18,
      metalness: 0.6,
    });

    // Platinum Surgical Catheter Ring
    const stentMat = new THREE.MeshStandardMaterial({
      color: 0xE2E8F0,
      metalness: 0.95,
      roughness: 0.1,
    });

    // 1. Left & Right Ventricles (Dual Sculptural Ovoids)
    const lvGeo = new THREE.SphereGeometry(1.4, 36, 36);
    lvGeo.scale(0.85, 1.45, 0.9);
    const leftVent = new THREE.Mesh(lvGeo, myoMat);
    leftVent.position.set(-0.35, -0.2, 0);
    leftVent.rotation.z = 0.22;
    heartGroup.add(leftVent);

    const rvGeo = new THREE.SphereGeometry(1.2, 36, 36);
    rvGeo.scale(0.9, 1.3, 0.85);
    const rightVent = new THREE.Mesh(rvGeo, myoMat);
    rightVent.position.set(0.55, -0.05, 0.2);
    rightVent.rotation.z = -0.15;
    heartGroup.add(rightVent);

    // 2. Aortic Arch Curve (Toroidal Extrusion)
    const aortaGeo = new THREE.TorusGeometry(0.85, 0.32, 24, 48, Math.PI * 1.15);
    const aorta = new THREE.Mesh(aortaGeo, aortaMat);
    aorta.position.set(-0.15, 1.25, -0.1);
    aorta.rotation.x = Math.PI / 1.8;
    aorta.rotation.z = -0.3;
    heartGroup.add(aorta);

    // 3. Brachiocephalic & Carotid Branch Vessels
    [-0.35, -0.05, 0.25].forEach((xPos, idx) => {
      const branchGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.75, 16);
      const branch = new THREE.Mesh(branchGeo, aortaMat);
      branch.position.set(xPos, 2.05, -0.05);
      branch.rotation.z = (idx - 1) * -0.12;
      heartGroup.add(branch);
    });

    // 4. Branching Coronary Arteries (LAD & Circumflex)
    const ladCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.1, 0.9, 0.85),
      new THREE.Vector3(-0.25, 0.3, 0.95),
      new THREE.Vector3(-0.15, -0.4, 0.9),
      new THREE.Vector3(-0.05, -1.1, 0.75),
    ]);
    const ladGeo = new THREE.TubeGeometry(ladCurve, 32, 0.055, 12, false);
    const ladMesh = new THREE.Mesh(ladGeo, arteryMat);
    heartGroup.add(ladMesh);

    const rcaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.25, 0.75, 0.7),
      new THREE.Vector3(0.7, 0.15, 0.75),
      new THREE.Vector3(0.65, -0.65, 0.65),
    ]);
    const rcaGeo = new THREE.TubeGeometry(rcaCurve, 32, 0.045, 12, false);
    const rcaMesh = new THREE.Mesh(rcaGeo, arteryMat);
    heartGroup.add(rcaMesh);

    // 5. Stented Arterial Ring (Precision Catheter Marker)
    const stentRing = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.02, 12, 24), stentMat);
    stentRing.position.set(-0.25, 0.3, 0.95);
    stentRing.rotation.y = 0.5;
    heartGroup.add(stentRing);

    // 6. Orbiting Translucent Gyro Rings
    const ringMat = new THREE.MeshPhysicalMaterial({
      color: 0xE2E8F0,
      emissive: 0xC4B5FD,
      emissiveIntensity: 0.1,
      roughness: 0.1,
      transmission: 0.9,
      transparent: true,
      opacity: 0.5,
    });
    const gyroRing = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.02, 16, 100), ringMat);
    gyroRing.rotation.x = Math.PI / 3;
    heartGroup.add(gyroRing);

    // Mouse Drag Rotation
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      heartGroup.rotation.y += deltaX * 0.008;
      heartGroup.rotation.x += deltaY * 0.008;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation Loop with 72 BPM Cardiac Respiration
    let animationId;
    let clock = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      clock += 0.016;

      if (!isDragging) {
        heartGroup.rotation.y += 0.004;
      }
      gyroRing.rotation.z += 0.006;

      // 72 BPM Ventricular Cardiac Pulse (Systole & Diastole)
      const pulsePhase = (clock * 1.2 * Math.PI) % (Math.PI * 2);
      const pulseScale = 1.0 + (Math.sin(pulsePhase) > 0.6 ? Math.sin(pulsePhase * 2) * 0.045 : 0);
      leftVent.scale.set(0.85 * pulseScale, 1.45 * pulseScale, 0.9 * pulseScale);
      rightVent.scale.set(0.9 * pulseScale, 1.3 * pulseScale, 0.85 * pulseScale);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 450;
      height = container.clientHeight || 450;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      domEl.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container && domEl && container.contains(domEl)) {
        container.removeChild(domEl);
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full min-h-[360px] sm:min-h-[440px] cursor-grab active:cursor-grabbing flex items-center justify-center relative select-none"
      />

      {/* Floating Clinical Telemetry HUD */}
      <div className="absolute top-2 left-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-purple-200/80 shadow-sm flex items-center gap-2 text-[11px] font-mono text-slate-800 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>72 BPM • Sinus Rhythm</span>
      </div>

      <div className="absolute bottom-2 right-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-md text-[10px] font-mono text-amber-200 flex items-center gap-1.5 pointer-events-none">
        <RotateCw className="w-3 h-3 text-amber-300 animate-spin" />
        <span>Drag to Inspect Anatomy</span>
      </div>
    </div>
  );
}
