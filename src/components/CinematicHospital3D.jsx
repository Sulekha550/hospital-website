import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * CinematicHospital3D - Living 3D Medical World
 * Palette: Royal Violet, Electric Aqua, Coral Rose & Pearl Lavender
 */
export default function CinematicHospital3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // --- 1. SCENE, CAMERA, RENDERER ---
    const scene = new THREE.Scene();
    // Atmospheric mist: Soft pearl lavender
    scene.fog = new THREE.FogExp2(0xFAF7FD, 0.032);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 80);
    camera.position.set(0, 1.8, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // --- 2. LIGHTING RIG (Royal Violet, Electric Aqua & Coral Rose) ---
    const ambientLight = new THREE.AmbientLight(0xF5F3FF, 1.8);
    scene.add(ambientLight);

    // Warm Champagne Sunlight from glass atrium
    const sunLight = new THREE.DirectionalLight(0xFFFBEB, 2.7);
    sunLight.position.set(8, 12, 6);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.bias = -0.001;
    scene.add(sunLight);

    // Electric Aqua Clinical Rim Light
    const aquaRimLight = new THREE.DirectionalLight(0x06B6D4, 2.5);
    aquaRimLight.position.set(-8, 5, -2);
    scene.add(aquaRimLight);

    // Royal Violet Atmospheric Fill
    const violetFill = new THREE.PointLight(0x7C3AED, 2.0, 25);
    violetFill.position.set(2, 6, -6);
    scene.add(violetFill);

    // Vibrant Coral-Rose Heart Pulse Point Light
    const heartPulseLight = new THREE.PointLight(0xF43F5E, 2.2, 14);
    heartPulseLight.position.set(0.6, 1.8, 1.2);
    scene.add(heartPulseLight);

    // --- 3. ARCHITECTURAL HOSPITAL ENVIRONMENT ---
    const envGroup = new THREE.Group();
    scene.add(envGroup);

    // Polished Reflective Floor with Lavender Sheen
    const floorGeo = new THREE.PlaneGeometry(60, 60);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xFDFBF7,
      roughness: 0.16,
      metalness: 0.14,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.2;
    floor.receiveShadow = true;
    envGroup.add(floor);

    // Floor Guide Lines (Electric Aqua & Royal Violet)
    const pathMat = new THREE.MeshBasicMaterial({ color: 0x06B6D4, transparent: true, opacity: 0.45 });
    const pathLine = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 40), pathMat);
    pathLine.rotation.x = -Math.PI / 2;
    pathLine.position.set(0.5, -1.19, 0);
    envGroup.add(pathLine);

    const pathLine2 = new THREE.Mesh(new THREE.PlaneGeometry(0.04, 40), new THREE.MeshBasicMaterial({ color: 0x7C3AED, transparent: true, opacity: 0.35 }));
    pathLine2.rotation.x = -Math.PI / 2;
    pathLine2.position.set(0.65, -1.19, 0);
    envGroup.add(pathLine2);

    // Floor-to-Ceiling Glass Atrium Window Framing (Lavender Crystal)
    const windowMat = new THREE.MeshPhysicalMaterial({
      color: 0xEDE9FE,
      transmission: 0.86,
      roughness: 0.05,
      metalness: 0.12,
      transparent: true,
      opacity: 0.65,
    });
    const frameMat = new THREE.MeshStandardMaterial({ color: 0xDDD6FE, roughness: 0.25 });

    for (let i = 0; i < 4; i++) {
      const glass = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 9), windowMat);
      glass.position.set(8.5, 3.2, -8 + i * 4.5);
      glass.rotation.y = -Math.PI / 2;
      envGroup.add(glass);

      const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.35, 10, 0.45), frameMat);
      pillar.position.set(8.5, 3.2, -10 + i * 4.5);
      envGroup.add(pillar);
    }

    // Back Corridor Wall & Receding Perspective
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xF5F3FF, roughness: 0.4 });
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(45, 12, 0.4), wallMat);
    backWall.position.set(0, 4.5, -14);
    backWall.receiveShadow = true;
    envGroup.add(backWall);

    // Illuminated Ceiling Panels (Clean daylight)
    const lightPanelMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    for (let i = 0; i < 5; i++) {
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 3), lightPanelMat);
      panel.rotation.x = Math.PI / 2;
      panel.position.set(-2 + i * 2, 7.8, -4 - i * 2);
      envGroup.add(panel);
    }

    // --- 4. MAIN DOCTOR CHARACTER (DR. PRAKASH CHAND SHAHI) ---
    const doctorGroup = new THREE.Group();
    doctorGroup.position.set(-1.4, -1.2, 1.2);
    scene.add(doctorGroup);

    // Doctor Materials (Royal Violet & Aqua accents)
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xF8D7BE, roughness: 0.55, metalness: 0.05 });
    const coatMat = new THREE.MeshStandardMaterial({ color: 0xFCFDFF, roughness: 0.32, metalness: 0.05 });
    const pantMat = new THREE.MeshStandardMaterial({ color: 0x1E1135, roughness: 0.6 }); // Obsidian Violet
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x0F091E, roughness: 0.2, metalness: 0.4 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x1E1135, roughness: 0.7 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0x7C3AED, roughness: 0.35 }); // Royal Violet Shirt
    const tieMat = new THREE.MeshStandardMaterial({ color: 0xF43F5E, roughness: 0.3 }); // Coral Rose Silk Tie
    const stethMat = new THREE.MeshStandardMaterial({ color: 0x06B6D4, roughness: 0.2, metalness: 0.8 }); // Electric Aqua Stethoscope

    // Legs & Shoes
    const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 1.45, 16), pantMat);
    leftLeg.position.set(-0.2, 0.72, 0);
    doctorGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 1.45, 16), pantMat);
    rightLeg.position.set(0.2, 0.72, 0);
    doctorGroup.add(rightLeg);

    const leftShoe = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.36), shoeMat);
    leftShoe.position.set(-0.2, 0.06, 0.06);
    doctorGroup.add(leftShoe);

    const rightShoe = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.36), shoeMat);
    rightShoe.position.set(0.2, 0.06, 0.06);
    doctorGroup.add(rightShoe);

    // Torso (Lab Coat & Shirt)
    const torsoGroup = new THREE.Group();
    torsoGroup.position.set(0, 1.45, 0);
    doctorGroup.add(torsoGroup);

    const coatBodyGeo = new THREE.CylinderGeometry(0.34, 0.42, 1.35, 20);
    coatBodyGeo.scale(1, 1, 0.75);
    const coatBody = new THREE.Mesh(coatBodyGeo, coatMat);
    coatBody.position.set(0, 0.65, 0);
    coatBody.castShadow = true;
    torsoGroup.add(coatBody);

    // Inner Shirt & Tie
    const shirt = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.4), shirtMat);
    shirt.position.set(0, 1.1, 0.28);
    torsoGroup.add(shirt);

    const tie = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.35), tieMat);
    tie.position.set(0, 1.05, 0.29);
    torsoGroup.add(tie);

    // Stethoscope loop around neck (Electric Aqua)
    const stethCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.16, 1.25, 0.05),
      new THREE.Vector3(-0.14, 0.9, 0.32),
      new THREE.Vector3(0, 0.75, 0.34),
      new THREE.Vector3(0.14, 0.9, 0.32),
      new THREE.Vector3(0.16, 1.25, 0.05),
    ]);
    const stethMesh = new THREE.Mesh(new THREE.TubeGeometry(stethCurve, 20, 0.018, 8, false), stethMat);
    torsoGroup.add(stethMesh);

    const stethDisc = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.015, 16), stethMat);
    stethDisc.rotation.x = Math.PI / 2;
    stethDisc.position.set(0, 0.75, 0.35);
    torsoGroup.add(stethDisc);

    // Articulated Head & Neck
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.45, 0);
    torsoGroup.add(headGroup);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.11, 0.18, 16), skinMat);
    neck.position.set(0, -0.04, 0);
    headGroup.add(neck);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 24, 24), skinMat);
    head.scale.set(0.9, 1.15, 1.0);
    head.position.set(0, 0.16, 0);
    headGroup.add(head);

    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.25, 20, 20), hairMat);
    hair.scale.set(0.92, 1.05, 0.95);
    hair.position.set(0, 0.23, -0.02);
    headGroup.add(hair);

    // Eyeglasses (Electric Aqua)
    const glassesMat = new THREE.MeshStandardMaterial({ color: 0x06B6D4, metalness: 0.9, roughness: 0.1 });
    const leftLens = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.008, 8, 20), glassesMat);
    leftLens.position.set(-0.08, 0.16, 0.23);
    headGroup.add(leftLens);

    const rightLens = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.008, 8, 20), glassesMat);
    rightLens.position.set(0.08, 0.16, 0.23);
    headGroup.add(rightLens);

    const bridge = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.06), glassesMat);
    bridge.rotation.z = Math.PI / 2;
    bridge.position.set(0, 0.16, 0.23);
    headGroup.add(bridge);

    // Arms
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.4, 1.25, 0);
    torsoGroup.add(leftArmGroup);

    const leftUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.65, 16), coatMat);
    leftUpperArm.position.set(0, -0.3, 0);
    leftArmGroup.add(leftUpperArm);

    const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), skinMat);
    leftHand.position.set(0, -0.66, 0);
    leftArmGroup.add(leftHand);

    // Right Arm (Gesturing to Heart)
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.4, 1.25, 0);
    torsoGroup.add(rightArmGroup);

    const rightUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.6, 16), coatMat);
    rightUpperArm.position.set(0.12, -0.22, 0.18);
    rightUpperArm.rotation.x = -Math.PI / 4.2;
    rightUpperArm.rotation.z = -Math.PI / 8;
    rightArmGroup.add(rightUpperArm);

    const rightForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.55, 16), coatMat);
    rightForearm.position.set(0.24, -0.42, 0.45);
    rightForearm.rotation.x = -Math.PI / 2.6;
    rightForearm.rotation.y = 0.2;
    rightArmGroup.add(rightForearm);

    const rightHand = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 12), skinMat);
    rightHand.position.set(0.3, -0.55, 0.72);
    rightArmGroup.add(rightHand);

    doctorGroup.rotation.y = 0.35;

    // --- 5. WALKING BACKGROUND MEDICAL STAFF ---
    const staffGroup = new THREE.Group();
    scene.add(staffGroup);

    function createWalkingStaff(colorHex, startX, startZ, speed, direction = 1) {
      const g = new THREE.Group();
      g.position.set(startX, -1.2, startZ);

      const sMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.5 });
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 1.1, 16), sMat);
      body.position.y = 1.35;
      g.add(body);

      const h = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), skinMat);
      h.position.y = 2.05;
      g.add(h);

      const legMat = new THREE.MeshStandardMaterial({ color: 0x1E1135 });
      const lLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.9, 12), legMat);
      lLeg.position.set(-0.12, 0.55, 0);
      g.add(lLeg);

      const rLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.9, 12), legMat);
      rLeg.position.set(0.12, 0.55, 0);
      g.add(rLeg);

      g.rotation.y = direction > 0 ? Math.PI / 2 : -Math.PI / 2;

      return { group: g, lLeg, rLeg, speed, direction, startX, startZ };
    }

    const walker1 = createWalkingStaff(0x7C3AED, -12, -7.5, 0.022, 1); // Nurse in Royal Violet
    const walker2 = createWalkingStaff(0x06B6D4, 14, -10.5, 0.018, -1); // Doctor in Electric Aqua
    staffGroup.add(walker1.group);
    staffGroup.add(walker2.group);

    // --- 6. HOLOGRAPHIC FLOATING BEATING HEART (CORAL ROSE & AQUA) ---
    const hologramGroup = new THREE.Group();
    hologramGroup.position.set(0.9, 0.7, 1.4);
    scene.add(hologramGroup);

    // Translucent Coral-Rose Myocardium
    const holoMyoMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFE4E6,
      emissive: 0xF43F5E,
      emissiveIntensity: 0.5,
      roughness: 0.15,
      transmission: 0.75,
      ior: 1.45,
      thickness: 1.0,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.92,
    });

    const holoHeartGeo = new THREE.SphereGeometry(0.68, 32, 32);
    holoHeartGeo.scale(0.85, 1.25, 0.8);
    const holoHeart = new THREE.Mesh(holoHeartGeo, holoMyoMat);
    hologramGroup.add(holoHeart);

    // Aortic Arch (Lavender Sheen)
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.3, 0),
      new THREE.Vector3(0.08, 0.8, 0.05),
      new THREE.Vector3(-0.25, 0.95, -0.1),
      new THREE.Vector3(-0.45, 0.65, -0.2),
    ]);
    const holoAorta = new THREE.Mesh(
      new THREE.TubeGeometry(aortaCurve, 20, 0.16, 12, false),
      new THREE.MeshPhysicalMaterial({ color: 0xEDE9FE, emissive: 0x7C3AED, emissiveIntensity: 0.2, transmission: 0.7 })
    );
    hologramGroup.add(holoAorta);

    // Glowing Electric Aqua Coronary Arteries (LAD & RCA)
    const coronaryGlowMat = new THREE.MeshBasicMaterial({ color: 0x06B6D4 });
    const ladCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.02, 0.4, 0.52),
      new THREE.Vector3(-0.05, 0.0, 0.58),
      new THREE.Vector3(0.08, -0.45, 0.42),
      new THREE.Vector3(0.12, -0.75, 0.2),
    ]);
    const ladVessel = new THREE.Mesh(new THREE.TubeGeometry(ladCurve, 24, 0.035, 8, false), coronaryGlowMat);
    hologramGroup.add(ladVessel);

    // Holographic Scanning Rings (Royal Violet & Aqua)
    const scanRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.2, 0.015, 8, 48),
      new THREE.MeshBasicMaterial({ color: 0x7C3AED, transparent: true, opacity: 0.5, wireframe: true })
    );
    scanRing1.rotation.x = Math.PI / 2.5;
    hologramGroup.add(scanRing1);

    const scanRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.5, 0.012, 8, 60),
      new THREE.MeshBasicMaterial({ color: 0x06B6D4, transparent: true, opacity: 0.45, wireframe: true })
    );
    scanRing2.rotation.x = -Math.PI / 3;
    scanRing2.rotation.y = 0.4;
    hologramGroup.add(scanRing2);

    // Floating Data Particle Cloud (Aqua & Coral)
    const partCount = 70;
    const partGeo = new THREE.BufferGeometry();
    const partPos = new Float32Array(partCount * 3);
    for (let i = 0; i < partCount * 3; i += 3) {
      partPos[i] = (Math.random() - 0.5) * 4;
      partPos[i + 1] = (Math.random() - 0.5) * 3;
      partPos[i + 2] = (Math.random() - 0.5) * 3;
    }
    partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0x22D3EE,
      size: 0.045,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const dataCloud = new THREE.Points(partGeo, partMat);
    hologramGroup.add(dataCloud);

    // --- 7. MOUSE & SCROLL STATE ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollProgress = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- 8. ANIMATION LOOP ---
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Doctor Kinematics
      const breath = Math.sin(time * 2.2) * 0.018;
      torsoGroup.position.y = 1.45 + breath;
      torsoGroup.scale.set(1 + breath * 0.6, 1 + breath, 1 + breath * 0.6);

      headGroup.rotation.y = mouseX * 0.35 + 0.15;
      headGroup.rotation.x = -mouseY * 0.2;

      rightArmGroup.rotation.z = Math.sin(time * 1.8) * 0.04;
      rightArmGroup.rotation.x = Math.cos(time * 1.5) * 0.03;
      leftArmGroup.rotation.x = Math.sin(time * 2.2) * 0.02;

      // Walking Staff
      [walker1, walker2].forEach((w) => {
        w.group.position.x += w.speed * w.direction;
        const stride = Math.sin(time * 6 * (w.speed / 0.02));
        w.lLeg.rotation.x = stride * 0.55;
        w.rLeg.rotation.x = -stride * 0.55;
        w.group.position.y = -1.2 + Math.abs(Math.sin(time * 12)) * 0.025;

        if (w.direction > 0 && w.group.position.x > 18) {
          w.group.position.x = -18;
        } else if (w.direction < 0 && w.group.position.x < -18) {
          w.group.position.x = 18;
        }
      });

      // Beating Heart (72 BPM)
      const bpmCycle = (time % 0.833) / 0.833;
      let heartScale = 1.0;
      let glowAmp = 0.5;

      if (bpmCycle < 0.15) {
        heartScale = 1.0 + Math.sin(bpmCycle * Math.PI / 0.15) * 0.04;
      } else if (bpmCycle >= 0.15 && bpmCycle < 0.42) {
        const sys = (bpmCycle - 0.15) / 0.27;
        heartScale = 1.0 - Math.sin(sys * Math.PI) * 0.08;
        glowAmp = 0.5 + Math.sin(sys * Math.PI) * 1.8;
      } else {
        heartScale = 1.0 + Math.sin((bpmCycle - 0.42) * Math.PI / 0.58) * 0.02;
      }

      holoHeart.scale.set(0.85 * heartScale, 1.25 * (2 - heartScale), 0.8 * heartScale);
      holoMyoMat.emissiveIntensity = glowAmp;
      heartPulseLight.intensity = 1.4 * glowAmp;

      scanRing1.rotation.z += 0.008;
      scanRing2.rotation.z -= 0.006;
      dataCloud.rotation.y = time * 0.05;
      hologramGroup.rotation.y = time * 0.15;

      // Camera Glide
      let targetCamX = 0;
      let targetCamY = 1.6;
      let targetCamZ = 6.8;
      let targetLookY = 1.2;

      if (scrollProgress < 0.18) {
        targetCamX = mouseX * 0.4;
        targetCamY = 1.6 + mouseY * 0.2;
        targetCamZ = 6.8;
        targetLookY = 1.2;
      } else if (scrollProgress >= 0.18 && scrollProgress < 0.38) {
        targetCamX = -1.2 + mouseX * 0.3;
        targetCamY = 1.7 + mouseY * 0.2;
        targetCamZ = 4.6;
        targetLookY = 1.5;
      } else if (scrollProgress >= 0.38 && scrollProgress < 0.58) {
        targetCamX = 0.9 + mouseX * 0.4;
        targetCamY = 0.9 + mouseY * 0.3;
        targetCamZ = 3.8;
        targetLookY = 0.7;
      } else if (scrollProgress >= 0.58 && scrollProgress < 0.78) {
        targetCamX = 0.2 + mouseX * 0.3;
        targetCamY = 2.0 + mouseY * 0.2;
        targetCamZ = 5.2;
        targetLookY = 0.8;
      } else {
        targetCamX = 0.0 + mouseX * 0.5;
        targetCamY = 1.5 + mouseY * 0.3;
        targetCamZ = 6.2;
        targetLookY = 1.1;
      }

      camera.position.x += (targetCamX - camera.position.x) * 0.045;
      camera.position.y += (targetCamY - camera.position.y) * 0.045;
      camera.position.z += (targetCamZ - camera.position.z) * 0.045;
      camera.lookAt(targetCamX * 0.3, targetLookY, 0);

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
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
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
