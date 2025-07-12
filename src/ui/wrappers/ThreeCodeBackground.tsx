'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef, useMemo, useState, useEffect } from 'react';

const PARTICLE_COUNT = 50;
const FADE_DURATION = 3;

function FloatingParticles({ attractTo }: { attractTo: THREE.Vector2 | null }) {
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

      // Обновление позиции
      if (attractTo) {
        const dir = new THREE.Vector2(
          attractTo.x - particle.position.x,
          attractTo.y - particle.position.y
        );
        const distance = dir.length();
        dir.normalize();

        const strength = THREE.MathUtils.clamp(0.01 / distance, 0, 0.02);
        particle.position.x += dir.x * strength;
        particle.position.y += dir.y * strength;
      } else {
        particle.position.x += particle.velocity.x;
        particle.position.y += particle.velocity.y;
      }

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
  const targetZ = useRef(5); // Начальная Z-позиция

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;

      // Ограничение: только в пределах первого экрана (0–1 экран)
      const clampedScroll = Math.min(scrollY, screenHeight);
      const progress = clampedScroll / screenHeight; // 0 → 1

      // Изменение z-позиции от 5 до 7 (можно подстроить)
      targetZ.current = 5 + progress * 2;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    // Плавное приближение
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ.current, 0.1);
  });

  return null;
}


export default function BackgroundCanvas() {
  const [cursor, setCursor] = useState<THREE.Vector2 | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const hoveredLink = (e.target as HTMLElement).closest('a');
      if (!hoveredLink || !containerRef.current) {
        setCursor(null);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 8 - 4;
      const y = -((e.clientY - rect.top) / rect.height) * 6 + 3;
      setCursor(new THREE.Vector2(x, y));
    }

    function handleMouseLeave() {
      setCursor(null);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ScrollCamera />

        <FloatingParticles attractTo={cursor} />
      </Canvas>
    </div>
  );
}







