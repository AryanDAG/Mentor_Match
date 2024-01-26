import React from 'react'
import signupImg from "../assets/MentorMatch__2_-removebg-preview.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Join the millions learning to code with MentorMatch for free."
    desc1="Build skills for today, tomorrow, beyond."
    desc2="Education to future-proof your career."
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
/>
  )
}

export default Signup