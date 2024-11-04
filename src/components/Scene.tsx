import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Mesh, MathUtils } from 'three';
import { Man } from '../assets/Man';
import useScrollPosition from '../hooks/useScrollPosition';

export function Scene() {
  const cubeRef = useRef<Mesh>(null);
  const RotatingCubeRef = useRef<Mesh>(null);
  const scrollCubeRef = useRef<Mesh>(null);
  const scrollProgress = useScrollPosition();
  let ScrollValue = 0;

  useFrame((state, delta) => {
    const targetY = -scrollProgress * 20;
    

    if (scrollCubeRef.current) {      
      ScrollValue = MathUtils.lerp(
        scrollCubeRef.current.position.y,
        targetY,
        0.1
      );
      scrollCubeRef.current.position.y = ScrollValue;
    }

    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta * 0.2;
      cubeRef.current.rotation.y += delta * 0.3;
      
      cubeRef.current.position.y = ScrollValue
    }

    if (RotatingCubeRef.current) {
      RotatingCubeRef.current.rotation.y = scrollProgress * Math.PI * 4;
      
      RotatingCubeRef.current.position.x = 3;
      RotatingCubeRef.current.position.y = ScrollValue
    }

    state.camera.position.x = 0
    state.camera.position.y = ScrollValue
    state.camera.position.z = 10

    // state.camera.lookAt(0, targetY, 0);

  });

  return (
    <>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
      <Environment preset="sunset" background blur={0.6} />
      
      <ambientLight intensity={0.1} />
      <directionalLight
        castShadow
        position={[5, 5, 5]}
        intensity={2}
        shadow-mapSize={3000}
        >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -40]}/>
      </directionalLight>

      <mesh 
        rotation-x={0}
        position-y={-2}
        position-z={-2}
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="#ffffff"
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      <mesh ref={scrollCubeRef} castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[0, 0, 0]} />
        <meshStandardMaterial
          color="white"
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
      
      <mesh ref={cubeRef} castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#8844ee"
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      <mesh ref={RotatingCubeRef} castShadow receiveShadow position={[3, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#44eeaa"
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      <mesh 
        rotation-x={-Math.PI * 0.5}
        position-y={-2}
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="LightGreen"
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>
      
      <Man/>
    </>
  );
}

export default Scene;