
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Defining intrinsic elements as constants to bypass JSX namespace errors in some environments
const Points = 'points' as any;
const BufferGeometry = 'bufferGeometry' as any;
const BufferAttribute = 'bufferAttribute' as any;
const PointsMaterial = 'pointsMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const SpotLight = 'spotLight' as any;

const AnimatedSphere = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.1 + (scrollY * 0.0005);
    meshRef.current.rotation.y = time * 0.15;
    // Dynamically adjust scale based on scroll
    const s = 2.4 + Math.sin(scrollY * 0.001) * 0.2;
    meshRef.current.scale.set(s, s, s);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#4338ca"
          attach="material"
          distort={0.4 + (Math.sin(scrollY * 0.002) * 0.1)}
          speed={3}
          roughness={0.3}
          metalness={0.7}
        />
      </Sphere>
    </Float>
  );
};

const Particles = ({ count = 5000, scrollY }: { count?: number; scrollY: number }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const pointsArray = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.position.y = -scrollY * 0.002;
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Points ref={pointsRef}>
      <BufferGeometry>
        <BufferAttribute
          attach="attributes-position"
          count={count}
          array={pointsArray}
          itemSize={3}
        />
      </BufferGeometry>
      <PointsMaterial size={0.012} color="#818cf8" transparent opacity={0.4} sizeAttenuation={true} />
    </Points>
  );
};

const ThreeCanvas: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <AmbientLight intensity={0.4} />
        <PointLight position={[10, 10, 10]} intensity={1.2} />
        <SpotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <AnimatedSphere scrollY={scrollY} />
        <Particles scrollY={scrollY} />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
