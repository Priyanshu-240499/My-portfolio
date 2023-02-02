import React from 'react'
import {motion} from 'framer-motion'
import "./navigatebtn.css";
import {useNavigate} from "react-router-dom"
function NavigateBtn({pathto,pathname,animDuration}) {
  const navigate=useNavigate();
  return (
    <motion.button onClick={()=>navigate
    (`${pathto}`)} className="navigate-btn"
        initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:animDuration ,duration:0.7}}
  whileHover={{
    scale: 1.2,
    transition: { duration: 0.3 },
  }}
  whileTap={{ scale: 0.7 }}
>{pathname}</motion.button>
  )
}

export default NavigateBtn
