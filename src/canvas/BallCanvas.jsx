import { Float, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { BackSide, TextureLoader } from "three";

const Ball = ({ icon }) => {
  const planeRef = useRef();

  // Matcap
  const matcap = useLoader(TextureLoader, "./matcaps/blue-matcap.png");
  // icon
  const iconMap = useLoader(TextureLoader, icon);

  useFrame(({ camera }, _) => {
    planeRef.current.quaternion.copy(camera.quaternion);
  }, []);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <group>
        <mesh>
          <sphereGeometry args={[3, 10, 10]} />
          <meshMatcapMaterial matcap={matcap} side={BackSide} flatShading />
        </mesh>
        <mesh ref={planeRef}>
          <planeGeometry args={[4, 4]} />
          <meshBasicMaterial map={iconMap} transparent alphaTest={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

const BallCanvas = ({ techIcon }) => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} enableDamping dampingFactor={0.25} />
      <Ball icon={techIcon.default} />
    </Canvas>
  );
};

export default BallCanvas;
