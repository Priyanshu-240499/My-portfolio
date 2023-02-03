import React from 'react'
import "./Resume.css"
import { AiOutlineDownload } from 'react-icons/ai';
import {useNavigate} from "react-router-dom";
function Resume() {
  const navigate=useNavigate()
  return (
    <div className='Resume'>
      <div className='Resume-sub'>
      <a className='download-btn' href='Priyanshu-Resume.pdf' download="Priyanshu-Resume.pdf"><AiOutlineDownload/></a>
      <br/>
      <button className='download-btn' onClick={()=>navigate("/nav")} style={{border:"none"}}>Navbar</button>
      </div>
    </div>
  )
}

export default Resume
