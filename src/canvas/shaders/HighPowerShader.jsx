import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import React from 'react'

const HighPowerCustomShader = shaderMaterial(
  { uTime: 0 }, 
  `
    uniform float uTime;

    varying vec2 vUv;

    void main() {
      vUv = uv;

      float period = 3.0;
      float amplitude = 3.0;

      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      // modelPosition.xy += sin(modelPosition.zx * period + (uTime * 4.0)) / amplitude;


      vec4 modelView = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * modelView;

      gl_Position = projectedPosition;
    }`,
  `
    uniform float uTime;

    varying vec2 vUv;

    vec3 palette ( float t ) {
      vec3 a = vec3(0.5, 0.5, 0.5);
      vec3 b = vec3(0.5, 0.5, 0.5);
      vec3 c = vec3(1.0, 1.0, 1.0);
      vec3 d = vec3(0.263, 0.416, 0.557);

      return a + b * cos( 6.28318 * ( c * t + d ) );
    }

    void main() {
      vec2 uv = (vUv * 2.0) - 0.5;
      vec2 uvColor = uv;
      vec3 finalColor = vec3(0.0);

      for (float i = 0.0; i < 1.5; i++) {
        uv = fract(uv * 2.0) - 0.5;

        float distance = length(uv);

        vec3 color = palette(length(uvColor) + i * 0.4 + uTime);

        distance = sin(distance * 12.0 + (uTime * 8.0)) / 4.0;
        distance = abs(distance);
        distance = 0.02 / distance;

        finalColor += color * distance;
      }

      gl_FragColor = vec4(finalColor, 1.0);
    }`
  // Double side render
  // (self) => {
  //   self.side = 2
  // }
)

extend({ HighPowerCustomShader })

const HighPowerShader = ({ meshRef }) => {
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 200]} />
      <highPowerCustomShader />
    </mesh>
  )
}

export default HighPowerShader