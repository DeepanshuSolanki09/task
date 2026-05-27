"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Loader } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF("/Untitled2.glb");
  return <primitive object={scene} scale={[5, 5, 5]} position={[0, -4, 0]} />;
};

const ThreeD = () => {
  return (
    <div className="h-[450px] w-full">
      <Canvas camera={{ position: [0, 7, 9], fov: 45 }}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
       <Loader /> 
    </div>
  );
};

export default ThreeD;
