'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

const PARTICLE_COUNT = 50;
const FADE_DURATION = 3;

function FloatingParticles() {
  const groupRef = useRef<THREE.Group>(null);
  const startTimeRef = useRef<number>(0);

  const particles = useMemo(() => {
    return new Array(PARTICLE_COUNT).fill(0).map(() => ({
      position: new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(6),
        THREE.MathUtils.randFloatSpread(4),
        0
      ),
      velocity: new THREE.Vector2(
        THREE.MathUtils.randFloat(-0.005, 0.005),
        THREE.MathUtils.randFloat(-0.005, 0.005)
      ),
      scale: THREE.MathUtils.randFloat(0.1, 0.4),
      material: new THREE.MeshBasicMaterial({
        color: 'rgb(0, 17, 53)',
        transparent: true,
        opacity: 0,
      }),
    }));
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (startTimeRef.current === 0) startTimeRef.current = elapsed;
    const timeSinceStart = elapsed - startTimeRef.current;

    if (!groupRef.current) return;

    groupRef.current.children.forEach((child, i) => {
      const particle = particles[i];
      const mesh = child as THREE.Mesh;

        particle.position.x += particle.velocity.x;
        particle.position.y += particle.velocity.y;

      // Зацикливание
      if (particle.position.x > 4) particle.position.x = -4;
      if (particle.position.x < -4) particle.position.x = 4;
      if (particle.position.y > 3) particle.position.y = -3;
      if (particle.position.y < -3) particle.position.y = 3;

      // Fade-in логика
      const targetOpacity = Math.min(0.4, timeSinceStart / FADE_DURATION * 0.4);
      particle.material.opacity = targetOpacity;

      // Применение
      mesh.position.copy(particle.position);
      mesh.material = particle.material;
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <planeGeometry args={[particle.scale, particle.scale]} />
          <primitive object={particle.material} attach="material" />
        </mesh>
      ))}
    </group>
  );
}

function ScrollCamera() {
  const { camera } = useThree();
  const targetZ = useRef(5); // стартуем дальше, чем дефолтный [0,0,5]

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;

      // Берём только 0–1 экран
      const clampedScroll = Math.min(scrollY, screenHeight);
      const progress = clampedScroll / screenHeight; // 0 → 1

      // Теперь приближение: от 7 → 3
      targetZ.current = 5 - progress * 4;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ.current, 0.1);
  });

  return null;
}

export default function BackgroundCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ScrollCamera />

        <FloatingParticles />
      </Canvas>
    </div>
  );
}







