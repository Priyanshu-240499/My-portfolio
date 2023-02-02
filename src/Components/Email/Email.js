import React from 'react'
import "./Email.css";
import { useForm, ValidationError } from '@formspree/react';
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom"
function Email() {
  const [state, handleSubmit] = useForm("mgebodbo");
  const navigate=useNavigate();
  if (state.succeeded) {
      navigate("/")
  }
  return (
    <div className='Email'>
      <form className='Contact-Form' onSubmit={handleSubmit}>
        <motion.input initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1}} type="email" name="email" className='email' placeholder='Email' autoComplete='off' required/>
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <motion.textarea initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{delay:0.2,duration:1}} type="text" name="message" className="email-message" minLength="10" placeholder='Message' autoComplete='off' required/>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        <motion.input initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{delay:0.4,duration:1}} type="submit" name="submit" className='submit-to-contact' disabled={state.submitting} value="Send Email"/>
      </form>
    </div>
  )
}

export default Email
