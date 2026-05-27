"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const Model = () => {
  const { scene } = useGLTF("/woman_xvi.glb");
  return <primitive object={scene} scale={[5, 5, 5]} position={[0, -2.5, 0]} />;
};

const ThreeD = () => {
  return (
    <div className="h-[450px] w-full">
      <Canvas camera={{ position: [0, 7, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ThreeD;