import React from 'react'
import "./Resume.css"
import { AiOutlineDownload } from 'react-icons/ai';
function Resume() {
  return (
    <div className='Resume'>
      <div>
      <a className='download-btn' href='https://drive.google.com/file/d/1f5OtzMDk6atI0QHL9GMBwLM1iRCxgZS-/view?usp=share_link' target="_blank" rel="noreferrer" download><AiOutlineDownload/></a>
      </div>
      
    </div>
  )
}

export default Resume
