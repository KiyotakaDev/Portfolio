import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { MathUtils } from "three";

const Experience = () => {
  const meshRef = useRef()

  useFrame(({ pointer, clock }, _) => {
    const { position, rotation } = meshRef.current

    position.x = MathUtils.lerp(position.x, pointer.x * 2, 0.05)
    position.y = MathUtils.lerp(position.y, pointer.y * 2, 0.05)
    rotation.x = MathUtils.lerp(rotation.x, pointer.y * 1.2, 0.05)
    rotation.y = MathUtils.lerp(rotation.y, -pointer.x * 1.2, 0.05)

  }, [])

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshBasicMaterial />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 5], fov: 50, near: 0.5, far: 6 }}
      style={{
        position: "relative",
        height: "100dvh",
        width: "100%",
        overflow: "hidden",
        display: "block",
        backgroundColor: "var(--dark-purple)",
        zIndex: 30,
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default Scene;
