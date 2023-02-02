import React from 'react'
import "./Greet.css"
import Typewrite from "typewriter-effect";
import {motion} from 'framer-motion'
import { AiOutlineDoubleRight } from 'react-icons/ai';
function Greeting() {
  return (
    <motion.div initial={{opacity:0,scale:0.1}} animate={{opacity:1,scale:1}} transition={{duration:1}} className='Greet'>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1,duration:1.5}} className='greet-intro'>
        <motion.p  className='greet-type'>
        <Typewrite
                    onInit={(text) => {
                      text
                      .pauseFor(2500)
                        .typeString("Hi there,")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("My name is Priyanshu Choudhary")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I am a Frontend Developer")
                        .start();
                    }}
                  />
        </motion.p>
        <motion.button className="greet-visit"
        initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:19,duration:1}}
  whileHover={{
    scale: 1.2,
    transition: { duration: 0.3 },
  }}
  whileTap={{ scale: 0.7 }}
>Visit <AiOutlineDoubleRight/></motion.button>
      </motion.div>
    </motion.div>
  )
}

export default Greeting
