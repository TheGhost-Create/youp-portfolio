import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Fallback3D from './Fallback3D';

/**
 * Scène 3D Hero en Three.js — Dark Futuristic × Creative Editorial
 * Sculpture métallique abstraite cinétique réactive au curseur
 */
export default function HeroScene() {
  const containerRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Vérification de la compatibilité WebGL
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Détection prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Initialisation Scène, Caméra et Rendu
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.warn("Échec d'initialisation WebGL, activation du fallback:", err);
      setHasWebGL(false);
      return;
    }

    // 2. Éclairages
    const ambientLight = new THREE.AmbientLight(0x0f141d, 2.5);
    scene.add(ambientLight);

    // Lumière principale Dorée (#C5A16A)
    const goldLight = new THREE.PointLight(0xc5a16a, 3.5, 20);
    goldLight.position.set(4, 4, 4);
    scene.add(goldLight);

    // Lumière secondaire Orange Cyber (#FF7138)
    const orangeLight = new THREE.PointLight(0xff7138, 4.0, 20);
    orangeLight.position.set(-4, -3, 3);
    scene.add(orangeLight);

    // Lumière d'accentuation supérieure Blanc pur
    const topLight = new THREE.DirectionalLight(0xf2f1ed, 1.2);
    topLight.position.set(0, 6, 2);
    scene.add(topLight);

    // 3. Groupe Principal de la Sculpture
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // A. Noyau : TorusKnot métallique aux reflets sombres et or
    const coreGeometry = new THREE.TorusKnotGeometry(1.3, 0.38, 128, 32, 2, 3);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x141820,
      metalness: 0.92,
      roughness: 0.18,
      envMapIntensity: 1.5,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    sculptureGroup.add(coreMesh);

    // B. Halo Wireframe Or Géométrique externe
    const wireGeometry = new THREE.IcosahedronGeometry(2.35, 1);
    const wireMaterial = new THREE.MeshStandardMaterial({
      color: 0xc5a16a,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.4
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    sculptureGroup.add(wireMesh);

    // C. Anneau cinétique interne Orange (#FF7138)
    const ringGeometry = new THREE.TorusGeometry(1.95, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xff7138,
      transparent: true,
      opacity: 0.7
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    sculptureGroup.add(ringMesh);

    // D. Nuage de Particules Flottantes (Stardust doré)
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xc5a16a);
    const orangeColor = new THREE.Color(0xff7138);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const particleColor = Math.random() > 0.4 ? goldColor : orangeColor;
      colors[i * 3] = particleColor.r;
      colors[i * 3 + 1] = particleColor.g;
      colors[i * 3 + 2] = particleColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    sculptureGroup.add(particles);

    // 4. Suivi du Curseur et Easing
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      mouseX = (clientX / window.innerWidth - 0.5) * 1.5;
      mouseY = (clientY / window.innerHeight - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 5. Redimensionnement fluide
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 6. Gestionnaire de Visibilité (Pause si hors écran pour préserver les performances)
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    // 7. Boucle d'Animation à 60 FPS
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Rotation continue subtile
      const speed = prefersReducedMotion ? 0.05 : 0.4;
      coreMesh.rotation.x = elapsedTime * speed * 0.6;
      coreMesh.rotation.y = elapsedTime * speed * 0.8;

      wireMesh.rotation.x = -elapsedTime * speed * 0.3;
      wireMesh.rotation.y = -elapsedTime * speed * 0.4;

      ringMesh.rotation.z = elapsedTime * speed * 0.5;
      particles.rotation.y = elapsedTime * speed * 0.15;

      // Easing vers la position du curseur
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      sculptureGroup.rotation.y = targetX * 0.8;
      sculptureGroup.rotation.x = targetY * 0.6;

      // Déplacement léger des points lumineux
      goldLight.position.x = 4 + Math.sin(elapsedTime * 0.8) * 1.5;
      goldLight.position.y = 4 + Math.cos(elapsedTime * 0.8) * 1.5;

      orangeLight.position.x = -4 - Math.cos(elapsedTime * 0.7) * 1.2;
      orangeLight.position.y = -3 - Math.sin(elapsedTime * 0.7) * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Nettoyage mémoire rigoureux
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return <Fallback3D />;
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[620px] relative cursor-grab active:cursor-grabbing"
      aria-label="Sculpture 3D interactive Dark Futuristic"
    />
  );
}
