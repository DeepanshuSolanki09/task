"use client";
import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Revealskew = ({word,colour}) => {

    useGSAP(() => {
        gsap.from(`.${word}`,{
            y:200,
            skewY:45,
            delay:0.5,
            duration:1.5,
            stagger:{
                amount:1
            },
            scrollTrigger:{
                trigger: `.text${word}`,
                start: "top 80%",
                toggleActions: "play none play reverse",
            }
        })
    });

  return (
    <h2 className={`text-6xl text-pink-600 font-extrabold leading-[1.3] text${word} z-1 relative ml-2`}>
        <div className='overflow-hidden'>
            <span className={`${word} inline-block`}>{word}</span>
        </div>
    </h2>
  )
}

export default Revealskew;
