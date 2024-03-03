import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import React from "react";

const DesktopCustomShader = shaderMaterial(
  { uTime: 0 },
  `
    uniform float uTime;
  
    varying vec2 vUv;

    void main() {
      vUv = uv;

      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      modelPosition.y += sin(modelPosition.x * 5.0 + uTime * 3.0) * 0.1;
      modelPosition.x += cos(modelPosition.y * 6.0 + uTime * 2.0) * 0.1;

      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;

      gl_Position = projectedPosition;
    }
  `,
  `
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv.yx;

      gl_FragColor = vec4(1.0, uv, 1.0);
    }
  `
);

extend({ DesktopCustomShader });

const LowPowerShader = ({ meshRef }) => {
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <desktopCustomShader wireframe={true} />
    </mesh>
  );
};

export default LowPowerShader;
