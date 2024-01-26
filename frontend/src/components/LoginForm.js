import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const [showPassword, setShowPassword] = useState(false);



    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the formData");
        console.log(formData)
        navigate("/dashboard");

    } 

  return (
    <form onSubmit={submitHandler}
       className='flex flex-col w-full gap-y-4 my-2'>

        <label className='w-full' >
            <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Email Address"
                name="email"
                className='rounded-[0.5rem] text-black w-full p-[12px] border-[#0C799B] border-2'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder="Password"
                name="password"
                className='rounded-[0.5rem] text-black w-full p-[12px] border-[#0C799B] border-2 '
            />

            <span
            className='absolute right-3 top-[38px] cursor-pointer'
             onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ?

                 (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :

                  (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
               <p className='text-xs mt-1 text-black font-bold max-w-max ml-auto'>
                Forgot Password                                                                                 
               </p>
            </Link>
        </label>

        <button className='bg-[#0C799B] rounded-[8px] font-medium text-richblack-900 px-[16px] py-[8px] '>
           Sign In
        </button>

    </form>
  )
}

export default LoginForm