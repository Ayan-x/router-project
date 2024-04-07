import React from 'react'
import { Template } from '../components/Template'
import loginImg from "../assets/login.png"

export const Login = (props) => {
    let setLoggedIn= props.setLoggedIn;
  return (
    <div>
        <Template
        title="Welcome Back"
        desc1="Build Skills for today,tommorow, and beyond"
        desc2="Education to future-proof you career."
        image={loginImg}
        formType = "login"
        setLoggedIn = {setLoggedIn}
        />

    </div>
  )
}
