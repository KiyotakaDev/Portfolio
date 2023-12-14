import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import React from 'react'

const MobileCustomShader = shaderMaterial(
  { uTime: 0 },
  `
    uniform float uTime;

    varying vec2 vUv;

    void main() {
      vUv = uv;

      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      modelPosition.y += sin(modelPosition.x * 3.0 + uTime * 8.0) / 3.0;

      vec4 modelView = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * modelView;
      gl_Position = projectedPosition;
    }
  `,
  `
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv.yx;

      gl_FragColor = vec4(uv, 1.0, 1.0);
    }
  `
)

extend({ MobileCustomShader })

const MobileShader = ({ meshRef }) => {
  return (
    <mesh ref={meshRef}>
      <circleGeometry args={[1, 64]} />
      <mobileCustomShader />
    </mesh>
  )
}

export default MobileShader