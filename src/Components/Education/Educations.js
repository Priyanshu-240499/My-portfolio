import React from 'react'
import "./Educations.css"
import EducationDetailsCard from './EducationDetailsCard'
import {motion} from "framer-motion";
function Educations() {

    const EduDetails=[
        {Year:"Year",Institution:"Institution",Qualification:"Qualification",Marks:"Marks"},
        {Year:"2021",Institution:"Galgotia's University(NCR)",Qualification:"B.tech(Mechanical)",Marks:"80%"},
        {Year:"2017",Institution:"MMPS(UDAIPUR)",Qualification:"Higher-Secondary",Marks:"76%"},
        {Year:"2015",Institution:"MMPS(UDAIPUR)",Qualification:"Secondary",Marks:"76.4%"},
    ]
      
  return (
    <div className='Education'>
      <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1}} className='Splash-Education'></motion.div>
      <div className='Education-details'>
        <motion.table initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{delay:1,duration:1}} className='Education-details-table'>
            <tbody>{EduDetails.map(item=><EducationDetailsCard data={item} />)} </tbody>
        </motion.table>
      
      </div>
    </div>
  )
}

export default Educations
