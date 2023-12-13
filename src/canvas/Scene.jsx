import { Canvas } from "@react-three/fiber";
import React from "react";

const Experience = () => {
  return (
    <mesh>
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
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default Scene;
