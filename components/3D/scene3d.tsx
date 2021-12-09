import { Canvas } from '@react-three/fiber';
import { Stars, softShadows } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';


softShadows();

export default function Scene3D() {

  const animateEnterance = useSpring({
    from: { scale: [0,0,0], opacity: 0 },
    to: { scale: [1,1,1], opacity: 1 },
    delay: 300,
    config: {
      mass : 5,
      friction: 40,
      tension : 20
    }
  });

  return (
    <Canvas
      style={{
        height: '100%',
        width: '100%',
        position: 'fixed',
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

      <animated.group {...animateEnterance}>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        
      </animated.group>
    </Canvas>
  );
}