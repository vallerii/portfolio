'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef, useMemo } from 'react';

const PARTICLE_COUNT = 50;
const FADE_DURATION = 3; // секунды

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

      // Обновление позиции
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

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <FloatingParticles />
      </Canvas>
    </div>
  );
}





