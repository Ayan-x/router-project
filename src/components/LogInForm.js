import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
// import { shouldProcessLinkClick } from 'react-router-dom/dist/dom';
export const LogInForm = (props) => {
    let setLoggedIn = props.setLoggedIn;
    const [formData,setFormData] = useState({
        email:"",password:""
    })
    const navigate = useNavigate();
    const[showPassword,setShowPassword] = useState(false);
    function changeHandler(event){
        setFormData((prevData) => {
            return{
            ...prevData,
            [event.target.name]:event.target.value 
            }
        } )
    }
    function submitHandler(event){
        event.preventDefault();
        setLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }
  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>Email Address<sup 
            className='text-pink-200'>*</sup></p>
            <input type='email' required value={formData.email}
        onChange={changeHandler}
        placeholder='Enter Email Address'
        name='email'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px] border-b-4 border-richblack-700'/>
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>
            <input type={showPassword ? ("text"): ("password")}
         required value={formData.password}
        onChange={changeHandler}
        placeholder='Enter Password'
        name='password'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px] border-b-4 border-richblack-700'/>
        
        
        <span className='absolute right-3 top-[40px] cursor-pointer ' 
        onClick={()=>setShowPassword((prev)=>!prev)}>
            {showPassword?
            (<AiOutlineEye fontSize={24} fill='#AFB2BF'
            />):(<AiOutlineEyeInvisible
                fontSize={24} fill='#AFB2BF'/>)}
        </span>

        <Link 
        to="#">
            <p className='text-xs font-bold mt-1 text-blue-100 max-w-max ml-auto ' >Forgot Password</p> 
        </Link>
        </label>
        <button className='bg-yellow-50 rounded-[8px] font-medium
        text-richblack-800 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>
    </form>
  )
}
  