'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const codeLines = [
  'const [state, setState] = useState(null);',
  '<motion.div animate={{ y: 0 }} />',
  'display: flex;',
  '[].map((item) => <Card {...item} />)',
  'useEffect(() => {}, [])',
  'const fetchData = async () => {}',
  'transition: all 0.3s ease-in-out;',
  'color: var(--primary);',
  'export default function Component() {}',
  'background: linear-gradient(...)',
  'if (isMobile) setMenuOpen(true);',
  '<NextImage src="/img.png" />',
  'onClick={() => handleClick()}',
  '.container { max-width: 1200px; }',
  'transform: scale(1.05);',
  'hover:underline;',
  '<HeroSection title="Welcome" />',
  'map((item) => <Card {...item} />)',
  'const router = useRouter();',
  'justify-content: space-between;',
  'text-shadow: 0 0 10px #f5b100;',
  '<FramerMotion key={index} />',
];


function FlyingCode({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useFrame(() => {
    const zPos = scrollProgress * 100; // Контролируем Z-ось камерой
    camera.position.z = zPos;

    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * 2; // Можешь убрать если не нужно
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 50 }).map((_, i) => {
        const line = codeLines[i % codeLines.length];
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = -i * 4;

        return (
          <Text
            key={i}
            position={[x, y, z]}
            fontSize={0.6}
            color="lime"
            font="/fonts/RobotoMono-Regular.ttf"
          >
            {line}
          </Text>
        );
      })}
    </group>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ThreeCodeScroll({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
      <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
        <fog attach="fog" args={['#000000', 10, 130]} />
        <ambientLight intensity={0.5} />
        <FlyingCode scrollProgress={scrollYProgress.get()} />
      </Canvas>
    </div>
  );
}

