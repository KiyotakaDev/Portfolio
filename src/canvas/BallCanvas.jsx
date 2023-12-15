import { Float, OrbitControls, Preload } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { BackSide, TextureLoader } from "three";
import { styles } from "../utils";
import CanvasLoader from "./CanvasLoader";

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

const BallCanvas = ({ technology }) => {
  const { icon, name } = technology;

  const [resolvedIcon, setResolvedIcon] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const iconModule = await icon();
        const iconUrl = iconModule.default;
        setResolvedIcon(iconUrl);
      } catch (error) {
        console.error("Icon load error: ", error);
      }
    };

    loadIcon();
  }, []);

  return (
    <>
      <Canvas>
        <Suspense fallback={<CanvasLoader fontSize={20} />}>
          <OrbitControls
            enableZoom={false}
            enableDamping
            dampingFactor={0.25}
          />
          <Ball icon={resolvedIcon} />
        </Suspense>
        <Preload all />
      </Canvas>
      <p
        className={`${styles.portfolioSmallerText} text-white text-center`}
        children={name}
      />
    </>
  );
};

export default BallCanvas;
