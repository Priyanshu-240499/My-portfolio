import React from 'react'
import "./About.css";
import MyIntroList from '../Home/MyIntroList';
import NavigateBtn from '../NavigateButton/NavigateBtn';
import { useRef } from "react";
import {motion, useAnimationFrame } from "framer-motion";

function About() {
    const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });
    const homeIntroData=["Name:Priyanshu Choudhary","Fathers name:Priyanshu Choudhary","Mothers name:Priyanshu Choudhary","Hobbies:Priyanshu Choudhary"]
  return (
    <div className='About'>
      <motion.div initial={{opacity:0,scale:0,x:-50}} animate={{opacity:1,scale:1,x:0}} transition={{duration:1}} className='cube-animation'>
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:0,x:-50}} animate={{opacity:1,scale:1,x:0}} transition={{duration:1}} className="About-list">
        {homeIntroData.map((item,index)=><MyIntroList key={item} data={item} index={index}/>)}
        <NavigateBtn/>
      </motion.div>
    </div>
  )
}

export default About
