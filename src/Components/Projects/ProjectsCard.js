import React from 'react'
import "./ProjectsCard.css"
import {motion} from "framer-motion";
function ProjectsCard({data:{title,href,technology,description,bgcolor},index}) {
  return (
    <motion.a initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{delay:index*0.2,duration:1}} className='ProjectCard' style={{background:bgcolor}} href={href} target="_blank" rel="noreferrer">
      <h5 className='Project-title' >
        {title}
      </h5>
      <p className='Project-technology'><strong>Technology: </strong>{technology}</p>
      <p className='Project-Desrciption'><strong>Description: </strong>{description}</p>
      {index===0?<p style={{fontSize:"70%"}}>[NOTE Email: priyanshoochoudhary@gmail.com Passwrod: 123456789]</p>:""}
    </motion.a>
  )
}

export default ProjectsCard
