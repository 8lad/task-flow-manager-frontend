'use client';

import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import { Billboard, Text, TrackballControls } from '@react-three/drei';
import { useTheme } from 'next-themes';
import { taskWords } from './helpers';

interface WordProps {
  children: React.ReactNode;
  position: string;
}

const Word: React.FC<WordProps> = ({ position, children, ...props }) => {
  // TODO: Fix the hover state for the words
  // const color = new THREE.Color();
  const { theme } = useTheme();
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
    color: theme === 'dark' ? '#ffffff' : '#000000',
  };
  const ref = useRef<THREE.Mesh>();
  const [hovered, setHovered] = useState(false);
  const over = (e: ThreeEvent<PointerEvent>) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = 'pointer';
    }
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);
  // TODO: Fix the hover state for the words
  // useFrame(() => {
  //   if (ref.current) {
  //     ref?.current?.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1);
  //     // ref?.current?.material.color.lerp(color.set(hovered ? 'black' : 'white'), 0.1);
  //   }
  // });

  return (
    <Billboard position={position} {...props}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.info('clicked')}
        {...fontProps}
      >
        {children}
      </Text>
    </Billboard>
  );
};

const Cloud = ({ count = 4, radius = 20 }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
      groupRef.current.rotation.x += 0.0005;
    }
  });
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
          taskWords[Math.floor(Math.random() * 64)],
        ]);
    return temp;
  }, [count, radius]);
  return (
    <group ref={groupRef} rotation={[10, 10.5, 10]}>
      {words.map(([pos, word], index) => (
        <Word position={pos as string} key={index}>
          {word}
        </Word>
      ))}
    </group>
  );
};

export const MainAnimation = () => {
  return (
    <div className="h-[53vh] w-full">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={['#202025', 0, 80]} />
        <Suspense fallback={null}>
          <Cloud count={8} radius={24} />
        </Suspense>
        <TrackballControls />
      </Canvas>
    </div>
  );
};
