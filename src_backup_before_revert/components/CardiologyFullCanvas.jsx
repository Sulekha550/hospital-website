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

    // Warm Coral & Clinical Studio Lighting
    const amb = new THREE.AmbientLight(0xFFF1F2, 2.2);
    scene.add(amb);

    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 3.5);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    const coralRim = new THREE.DirectionalLight(0xF43F5E, 4.0);
    coralRim.position.set(-8, -2, -4);
    scene.add(coralRim);

    const cyanGlow = new THREE.PointLight(0x06B6D4, 3.5, 20);
    cyanGlow.position.set(3, -2, 4);
    scene.add(cyanGlow);

    const heartRoot = new THREE.Group();
    // Offset slightly right for visual balance with left-aligned editorial typography
    heartRoot.position.set(2.2, -0.2, 0);
    heartRoot.rotation.z = -0.12;
    scene.add(heartRoot);

    // Biological Myocardium
    const myoMat = new THREE.MeshPhysicalMaterial({
      color: 0x9F1239,
      emissive: 0x881337,
      emissiveIntensity: 0.45,
      roughness: 0.22,
      metalness: 0.12,
      transmission: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      specularIntensity: 2.8,
      specularColor: 0xFDE047,
    });

    // Left & Right Ventricles
    const leftVentGeo = new THREE.SphereGeometry(1.6, 36, 36);
    leftVentGeo.scale(0.85, 1.45, 0.95);
    const leftVent = new THREE.Mesh(leftVentGeo, myoMat);
    leftVent.position.set(-0.45, -0.4, 0);
    leftVent.rotation.z = 0.22;
    heartRoot.add(leftVent);

    const rightVentGeo = new THREE.SphereGeometry(1.4, 36, 36);
    rightVentGeo.scale(0.8, 1.3, 0.9);
    const rightVent = new THREE.Mesh(rightVentGeo, myoMat);
    rightVent.position.set(0.55, -0.45, 0.2);
    rightVent.rotation.z = -0.18;
    heartRoot.add(rightVent);

    // Aortic Arch
    const aortaMat = new THREE.MeshPhysicalMaterial({
      color: 0xBE123C,
      transmission: 0.45,
      thickness: 1.2,
      clearcoat: 1.0,
      roughness: 0.15,
    });
    const aortaCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-0.35, 0.7, 0),
      new THREE.Vector3(-0.4, 2.3, 0),
      new THREE.Vector3(1.4, 2.3, -0.3),
      new THREE.Vector3(1.3, 0.3, -0.6)
    );
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 40, 0.42, 20, false);
    const aorta = new THREE.Mesh(aortaGeo, aortaMat);
    heartRoot.add(aorta);

    // Glowing Coronary Arterial Conduits (LAD & RCA)
    const vesselMat = new THREE.MeshStandardMaterial({
      color: 0x22D3EE,
      emissive: 0x06B6D4,
      emissiveIntensity: 2.5,
    });

    const ladCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.2, 0.8, 1.2),
      new THREE.Vector3(-0.15, 0.2, 1.35),
      new THREE.Vector3(0.08, -0.6, 1.2),
      new THREE.Vector3(-0.06, -1.3, 0.95),
      new THREE.Vector3(-0.12, -1.8, 0.55),
    ]);
    const ladGeo = new THREE.TubeGeometry(ladCurve, 36, 0.08, 12, false);
    const ladMesh = new THREE.Mesh(ladGeo, vesselMat);
    heartRoot.add(ladMesh);

    // 100 Floating Bioparticles drifting through space
    const pCount = 100;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 18;
      pPos[i + 1] = (Math.random() - 0.5) * 12;
      pPos[i + 2] = (Math.random() - 0.5) * 8;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xF43F5E,
      size: 0.12,
      transparent: true,
      opacity: 0.7,
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
