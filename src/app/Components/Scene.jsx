"use client";
import React from 'react'

import dynamic from "next/dynamic";


const ThreeD = dynamic(() => import("./ThreeD"), {
  ssr: false, 
});

const Scene = () => {
  return (
    <ThreeD />
  )
}

export default Scene
