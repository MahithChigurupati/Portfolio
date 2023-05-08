import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Avatar = () => {
  const avatarRef = useRef();
  const { scene } = useGLTF("./avatar.gltf");
  return (
    <group ref={avatarRef}>
      <primitive object={scene} scale={3.5} position={[0, -3.5, -3]} rotation-y={Math.PI / 2.5} />
    </group>
  );
};

const AvatarCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  if (isMobile) {
    return null;
  }
  
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 44,
        near: 0.1,
        far: 200,
        position: [6, 3, 0],
      }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight color="#ffffff" position={[10, 10, 5]} intensity={0.6} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 2.3}
          minDistance={10}
          maxDistance={30}
        />
        <group>
          <Avatar />
        </group>

        <Preload all />
      </Suspense>
    </Canvas>
  );
};


export default AvatarCanvas;
