import { Float, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { BackSide, TextureLoader } from "three";

const Ball = ({ icon, isLoading }) => {
  const planeRef = useRef();

  // Matcap
  const matcap = useLoader(TextureLoader, "./matcaps/blue-matcap.png");
  // icon
  const iconMap = useLoader(TextureLoader, icon);

  useFrame(({ camera }, _) => {
    planeRef.current.quaternion.copy(camera.quaternion);
  }, []);

  return (
    <Float>
      <group>
        <mesh>
          <sphereGeometry args={[3, 10, 10]} />
          <meshMatcapMaterial matcap={matcap} side={BackSide} flatShading />
        </mesh>
        <mesh ref={planeRef}>
          <planeGeometry args={[4, 4]} />
          {isLoading ? (
            <>isloading</>
          ) : (
            <meshBasicMaterial map={iconMap} transparent alphaTest={0.5} />
          )}
        </mesh>
      </group>
    </Float>
  );
};

const BallCanvas = ({ technology }) => {
  const { icon } = technology;

  const [loadedIcon, setLoadedIcon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const resolvedIcon = await icon();
        const iconUrl = await resolvedIcon.default;
        setLoadedIcon(iconUrl);
      } catch (error) {
        console.error("Loading icon error: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadIcon();
  }, [icon]);

  return (
    <Canvas>
      <OrbitControls enableZoom={false} enableDamping dampingFactor={0.25} />
      {isLoading ? null : <Ball icon={loadedIcon} isLoading={isLoading} />}
    </Canvas>
  );
};

export default BallCanvas;
