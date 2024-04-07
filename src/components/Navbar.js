import React from 'react'
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export const Navbar = (props) => {
    let loggedIn = props.loggedIn;
    let setLoggedIn = props.setLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 
     max-w-[1160pc] py-4 mx-auto'>
        <Link to="/">
            <img src={logo} alt='' width={160} height={32} loading="lazy"/>
        </Link>
        <nav>
            <ul className='flex gap-3 text-richblack-100 '>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
        {/* {Login - Signup - logOut - Dashboard} */}

        <div className='flex items-center gap-x-4'>
            
            { !loggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100
                    py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !loggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-800 text-richblack-100
                    py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { loggedIn &&
                <Link to="/"  onClick={()=>{
                    setLoggedIn(false);
                    toast.success("Logged Out");
                }}> 
                    <button className='bg-richblack-800 text-richblack-100
                    py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { loggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-richblack-100
                    py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Dash Board
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}
 