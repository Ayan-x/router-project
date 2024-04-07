import React from 'react'
import signupImg from "../assets/signup.png"
import { Template } from '../components/Template'

export const Signup = (props) => {
    let setLoggedIn = props.setLoggedIn;
  return (
    <Template
    title="Join the millions learning to code with StudyNotion for free"
    desc1="Build skills for today,tommorow, and beyond."
    desc2="Educating to future-proof your career."
    image={signupImg}
    formType="signup"
    setLoggedIn={setLoggedIn}

    />
  )
}
