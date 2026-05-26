"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

const ThreeD = () => {
  const model = useGLTF("/Untitled2.glb");
  return (
    <div className="h-[450px] w-full">
      <Canvas camera={{ position: [0, 7, 9], fov: 45 }}>
        {/* <ambientLight />
        <pointLight />
        <directionalLight /> */}
        <primitive
          object={model.scene}
          scale={[5, 5, 5]}
          position={[0, -4.5, 0]}
        />
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
