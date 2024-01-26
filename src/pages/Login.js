import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login__1_-removebg-preview.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, beyond."
        desc2="Education to future-proof your career."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login