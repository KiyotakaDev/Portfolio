import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, lazy, useRef } from "react";
import { MathUtils } from "three";
import CanvasLoader from "./CanvasLoader";
import { Preload } from "@react-three/drei";

const DesktopShader = lazy(() => import("./shaders/DesktopShader"));
const MobileShader = lazy(() => import("./shaders/MobileShader"));

const determinateShaderToRender = () => {
  // Thresholds based on performance
  // const highPowerThreshold = 12; // CPU cores based
  // const lowPowerThreshold = 8; // RAM amount based

  // const cpuCores = navigator.hardwareConcurrency || 4; // User CPU cores assume 4 cores
  // const aviableMemory = navigator.deviceMemory || 8; // User RAM assume 8GB

  // Checking if it's mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return MobileShader; // Mobile shader
  } else if (!isMobile) {
    return DesktopShader; // Low power shader
  } else {
    return MobileShader; // Fallback
  }
};

const Experience = () => {
  const meshRef = useRef();

  useFrame(({ pointer, clock }, _) => {
    const { position, rotation, material } = meshRef.current;

    position.x = MathUtils.lerp(position.x, pointer.x * 2, 0.05);
    position.y = MathUtils.lerp(position.y, pointer.y * 2, 0.05);
    rotation.x = MathUtils.lerp(rotation.x, pointer.y * 1.2, 0.05);
    rotation.y = MathUtils.lerp(rotation.y, -pointer.x * 1.2, 0.05);

    material.uniforms.uTime.value = 0.4 * clock.getElapsedTime();
  }, []);

  const ShaderToRender = determinateShaderToRender();

  return <ShaderToRender meshRef={meshRef} />;
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
        zIndex: 20,
      }}
    >
      <Suspense fallback={<CanvasLoader fontSize={30} />}>
        <Experience />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Scene;
