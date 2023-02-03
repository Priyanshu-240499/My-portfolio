import React from 'react'
import "./Resume.css"
import { AiOutlineDownload } from 'react-icons/ai';
function Resume() {
  return (
    <div className='Resume'>
      <div>
      <a className='download-btn' href='./PRIYANSHU_RESUME.pdf' target="_blank" rel="noreferrer" download><AiOutlineDownload/></a>
      </div>
      
    </div>
  )
}

export default Resume
