import { Canvas } from '@react-three/fiber';
import { softShadows, useGLTF, OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';

softShadows();

const ThreeDNode = () =>{
  const gltf = useGLTF('/3D/SpaceShuttle/scene.gltf');
  return (
    <>
      <OrbitControls />
      <primitive object={gltf.scene} />
    </>
  );
};

export default function Shuttle() {

  return (
    <Canvas
      style={{
        height: '50%',
        width: '100%',
        position: 'relative',
        top: 0,
        left: 0
      }}
    >
      <directionalLight
        position={[0, 10, 0]}
        intensity={0.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-30}
        shadow-camera-right={20}
        shadow-camera-top={30}
        shadow-camera-bottom={-10}
      />
      <ambientLight intensity={0.3} />
      <pointLight intensity={0.3} position={[-10, 0, -20]} />
      <Suspense fallback={null}>
        <ThreeDNode />
      </Suspense>
    </Canvas>
  );
}