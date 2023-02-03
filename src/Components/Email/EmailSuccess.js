import React from 'react'
import "./EmailSuccess.css" 
import NavigateBtn from '../NavigateButton/NavigateBtn'
function EmailSuccess() {
  return (
    <div className='EmailSuccess'>
      <div>
        <h1 style={{color:"white"}}>Email Received for further contact (8448677742)</h1>
      </div>
      <div style={{display:"flex",justifyContent:"space-evenly",width:"60%"}}>
          <NavigateBtn pathto="/nav" pathname="Navbar" animDuration="0.7"/>
          <NavigateBtn pathto="/Resume" pathname="Resume" animDuration="0.9"/>
        </div>
    </div>
  )
}

export default EmailSuccess
