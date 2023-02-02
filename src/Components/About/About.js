import React from "react";
import "./About.css";
import MyIntroList from "../Home/MyIntroList";
import NavigateBtn from "../NavigateButton/NavigateBtn";
import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

function About() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });
  const homeIntroData = [
    "~Computer Language: HTML, CSS, JavaScript, React, Java, DSA, SQL",
    "~Tools & Technologies: GIT/ Github, VS-code, Eclipse, Codesandbox",
    "~Solved 200+ DSA/ Coding questions on geekster platform",
    "~Worked on various projects (Visit Projects)",
  ];
  return (
    <div className="About">
      <motion.div
        initial={{ opacity: 0,  x: -50 }}
        animate={{ opacity: 1,  x: 0 }}
        transition={{delay:0.2, duration: 0.6 }}
        className="cube-animation"
      >
        <div className="cube" ref={ref}>
          <div className="side front" />
          <div className="side left" />
          <div className="side right" />
          <div className="side top" />
          <div className="side bottom" />
          <div className="side back" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0,  x: -50 }}
        animate={{ opacity: 1,  x: 0 }}
        transition={{delay:0.8, duration: 0.6 }}
        className="About-list"
      >
        <h1 className="About-title">About</h1>
        {homeIntroData.map((item, index) => (
          <MyIntroList key={item} data={item} index={index} rotate={0}/>
        ))}
        <div style={{display:"flex",justifyContent:"space-evenly",width:"60%"}}>
          <NavigateBtn pathto="/Education" pathname="Education" animDuration="1.8"/>
          <NavigateBtn pathto="/Projects" pathname="Projects" animDuration="2.5"/>
        </div>
        
      </motion.div>
    </div>
  );
}

export default About;
