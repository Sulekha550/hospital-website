import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * CardiologyAmbientCanvas
 * 3D Anatomical Heart with glowing vascular pathways and rhythmic 72 BPM ventricular pulse.
 * Lighting: Red-coral, biological crimson, specular pearl clearcoat, and glowing cyan coronary arteries.
 */
export default function CardiologyAmbientCanvas({ className = "" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

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
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Studio Medical Lighting
    const ambLight = new THREE.AmbientLight(0xFFF1F2, 1.8);
    scene.add(ambLight);

    const keySun = new THREE.DirectionalLight(0xFFFFFF, 3.0);
    keySun.position.set(5, 7, 6);
    scene.add(keySun);

    const coralRim = new THREE.DirectionalLight(0xF43F5E, 3.5);
    coralRim.position.set(-6, -2, -3);
    scene.add(coralRim);

    const cyanVesselGlow = new THREE.PointLight(0x06B6D4, 3.0, 15);
    cyanVesselGlow.position.set(2, -2, 3);
    scene.add(cyanVesselGlow);

    const heartRoot = new THREE.Group();
    scene.add(heartRoot);
    heartRoot.rotation.z = -0.1;

    // Sculptural Ventricles (Left & Right)
    const myoMat = new THREE.MeshPhysicalMaterial({
      color: 0x9F1239,
      emissive: 0x881337,
      emissiveIntensity: 0.35,
      roughness: 0.25,
      metalness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.15,
      specularIntensity: 2.5,
      specularColor: 0xFDE047,
    });

    const leftVentGeo = new THREE.SphereGeometry(1.2, 32, 32);
    leftVentGeo.scale(0.85, 1.45, 0.95);
    const leftVent = new THREE.Mesh(leftVentGeo, myoMat);
    leftVent.position.set(-0.35, -0.4, 0);
    leftVent.rotation.z = 0.22;
    heartRoot.add(leftVent);

    const rightVentGeo = new THREE.SphereGeometry(1.05, 32, 32);
    rightVentGeo.scale(0.8, 1.3, 0.9);
    const rightVent = new THREE.Mesh(rightVentGeo, myoMat);
    rightVent.position.set(0.45, -0.45, 0.15);
    rightVent.rotation.z = -0.18;
    heartRoot.add(rightVent);

    // Apex Cap
    const apexGeo = new THREE.ConeGeometry(0.8, 1.3, 32);
    apexGeo.scale(0.9, 1.0, 0.7);
    const apex = new THREE.Mesh(apexGeo, myoMat);
    apex.position.set(-0.1, -1.55, 0.05);
    apex.rotation.z = Math.PI - 0.1;
    heartRoot.add(apex);

    // Translucent Aorta Arch
    const aortaMat = new THREE.MeshPhysicalMaterial({
      color: 0xBE123C,
      roughness: 0.18,
      metalness: 0.1,
      transmission: 0.45,
      thickness: 1.2,
      clearcoat: 1.0,
      specularIntensity: 2.0,
    });

    const aortaCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-0.25, 0.5, 0),
      new THREE.Vector3(-0.3, 1.8, 0),
      new THREE.Vector3(1.1, 1.8, -0.2),
      new THREE.Vector3(1.0, 0.2, -0.5)
    );
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 40, 0.34, 20, false);
    const aorta = new THREE.Mesh(aortaGeo, aortaMat);
    heartRoot.add(aorta);

    // Branching Coronary Arteries (Glowing Cyan & Gold)
    const vesselMat = new THREE.MeshStandardMaterial({
      color: 0x22D3EE,
      emissive: 0x06B6D4,
      emissiveIntensity: 1.8,
      roughness: 0.3,
    });

    const ladCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.15, 0.6, 0.95),
      new THREE.Vector3(-0.1, 0.1, 1.05),
      new THREE.Vector3(0.05, -0.5, 0.95),
      new THREE.Vector3(-0.05, -1.1, 0.75),
      new THREE.Vector3(-0.1, -1.45, 0.45),
    ]);
    const ladGeo = new THREE.TubeGeometry(ladCurve, 32, 0.065, 12, false);
    const ladMesh = new THREE.Mesh(ladGeo, vesselMat);
    heartRoot.add(ladMesh);

    // Subtle Micro Floating Bioparticles
    const particleCount = 45;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 8;
      pPos[i + 1] = (Math.random() - 0.5) * 8;
      pPos[i + 2] = (Math.random() - 0.5) * 5;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xF43F5E,
      size: 0.08,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Animation Loop (72 BPM rhythm)
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Continuous Slow Orbit
      heartRoot.rotation.y = Math.sin(time * 0.4) * 0.35 + 0.2;
      heartRoot.rotation.x = Math.cos(time * 0.3) * 0.1;

      // 72 BPM Ventricular Cardiac Systole & Diastole (period: ~0.833s)
      const pulseCycle = (time % 0.833) / 0.833;
      let scale = 1.0;
      if (pulseCycle < 0.18) {
        scale = 1.0 + Math.sin((pulseCycle / 0.18) * Math.PI) * 0.085;
      } else if (pulseCycle > 0.22 && pulseCycle < 0.38) {
        scale = 1.0 + Math.sin(((pulseCycle - 0.22) / 0.16) * Math.PI) * 0.045;
      }
      heartRoot.scale.set(scale, scale, scale);

      // Slow drift for bioparticles
      particles.rotation.y = time * 0.05;

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
