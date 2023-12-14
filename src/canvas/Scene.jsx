import { Canvas, useFrame } from "@react-three/fiber";
import React, { lazy, useRef } from "react";
import { MathUtils } from "three";

const HighPowerShader = lazy(() => import("./shaders/HighPowerShader"))
const LowPowerShader = lazy(() => import("./shaders/LowPowerShader"))
const MobileShader = lazy(() => import("./shaders/MobileShader"))

const Experience = () => {
  const meshRef = useRef()

  useFrame(({ pointer, clock }, _) => {
    const { position, rotation, material } = meshRef.current

    position.x = MathUtils.lerp(position.x, pointer.x * 2, 0.05)
    position.y = MathUtils.lerp(position.y, pointer.y * 2, 0.05)
    rotation.x = MathUtils.lerp(rotation.x, pointer.y * 1.2, 0.05)
    rotation.y = MathUtils.lerp(rotation.y, -pointer.x * 1.2, 0.05)

    material.uniforms.uTime.value = 0.4 * clock.getElapsedTime()
  }, [])

  return <MobileShader meshRef={meshRef} />
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
