import React from 'react'
import {motion} from 'framer-motion'
import "./navcard.css"
function Navcards({data:{src,title},index}) {
  return (
    <motion.div initial={{x:-50}} animate={{x:0}} transition={{duration:0.3*index}}  
     className={index%2===0?"card1":"card2"} >
  <motion.img initial={{opacity:0,x:-50,y:-50}} animate={{rotate:5,opacity:1,x:0,y:0}} transition={{delay:1,duration:0.3*index}}  src={src} className="nav-img-card" alt={title}/>
  <motion.div initial={{opacity:0,scale:0}} animate={{rotate:-5,opacity:1,scale:1}} transition={{delay:2,duration:0.35*index}} whileHover={{scale:0.7,transition: { duration: 0.01}}} whileTap={{ scale: 0.9,transition: { duration: 0.01} }} className="nav-card-title">
    <h4  className="card-title">{title}</h4>
  </motion.div>
</motion.div>
  )
}

export default Navcards
