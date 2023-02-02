import React from 'react'
import {motion} from 'framer-motion'
import "./navigatebtn.css";
function NavigateBtn() {
  return (
    <motion.button className="navigate-btn"
        initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}}
  whileHover={{
    scale: 1.2,
    transition: { duration: 0.3 },
  }}
  whileTap={{ scale: 0.7 }}
>Navigate</motion.button>
  )
}

export default NavigateBtn
