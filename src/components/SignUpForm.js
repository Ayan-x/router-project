import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


export const SignUpForm = ({setLoggedIn}) => {
    const[formData,setFormData] = useState({
        firstName:"", lastName:"", email:"", password:"", confirmPassword:""
    })
    const navigate = useNavigate();
    const[showPassword,setShowPassword] = useState(false);
    const[showConfirmPassword,setshowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("sttudent");

    console.log(showConfirmPassword);
    function changeHandler(event){
        setFormData((prevData)=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value

            }
        })
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password Don't match");
        }else{
            setLoggedIn(true);
            toast.success("Account Created");
            const accountData = {
                ...formData
            }
            console.log("printing account data ");
            console.log(accountData);
            navigate("/dashboard");
        }
        

        
    }
  return (
    <div>
        {/* Student-Instructor tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6  
        rounded-full  max-w-max '>
            <button onClick={()=> setAccountType("student")}
            className={`${accountType=== "student" ?
             "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"}
              py-2 px-5 rounded-full transition-all duration-200`}>
                Student
            </button>
            <button onClick={()=> setAccountType("instructor")}
            className={`${accountType=== "instructor" ?
            "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"}
             py-2 px-5 rounded-full transition-all duration-200`}>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            <div className='flex flex-row gap-x-4 mt-[20px]'>
            <label>
                <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'
            >*</sup></p>
                <input
                required
                type='text'
                name='firstName'
                onChange={changeHandler}
                placeholder='Enter First Name'
                value={formData.firstName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px] border-b-4 border-richblack-700'/>
            </label>
            <label>
                <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>Last Name<sup
            className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='lastName'
                onChange={changeHandler}
                placeholder='Enter Last Name'
                value={formData.lastName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px] border-b-4 border-richblack-700'/>
            </label>
            </div>
           <div className=' mt-[20px]'>
           <label >
                <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>Email<sup
            className='text-pink-200'>*</sup></p>
                <input
                required
                type='email'
                name='email'
                onChange={changeHandler}
                placeholder='Enter Email Address'
                value={formData.email}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px] border-b-4 border-richblack-700'/>

            </label>
           </div>
            
            <div className=' relative  flex gap-3 mt-[20px]'>
            <label className='relative' >
                <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>Create Password<sup
            className='text-pink-200'>*</sup></p>
                <input
                required
                type={showPassword ? ("text"):("password")}
                name='password'
                onChange={changeHandler}
                placeholder='Enter Password'
                value={formData.password}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px] border-b-4 border-richblack-700' />
            
            <span className='absolute right-3 top-[40px] cursor-pointer ' 
            onClick={()=>setShowPassword((prev)=>!prev)}>
            {showPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):
            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
        </span>
        </label>
       
            <label className='relative'>
                <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>Confirm Password<sup
            className='text-pink-200'>*</sup></p>
                <input
                required
                type={showConfirmPassword ? ("text"):("confirmPassword")}
                name='confirmPassword'
                onChange={changeHandler}
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px] border-b-4 border-richblack-700'/>
        <span className='absolute right-3 top-[40px] cursor-pointer ' 
            onClick={()=>setshowConfirmPassword((prev)=>!prev)}>
            {showConfirmPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
            :(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
        </span>
            </label>
            
        </div>
         
            <button className='w-full bg-yellow-50 rounded-[8px] font-medium
        text-richblack-900 px-[12px] py-[8px] mt-6'>
                Create Account
            </button>
            
        </form>
    </div>
  )
}
