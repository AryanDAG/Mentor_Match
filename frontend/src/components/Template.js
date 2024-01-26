import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'   
import {FcGoogle} from "react-icons/fc"

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

   //  console.log("ye raha mera form type");
   //  console.log(formtype)
  return (
    <div className='flex justify-between w-11/12  max-w-[1100px] mx-auto gap-x-12  gap-y-0  overflow-y-hidden'>

       <div className='w-11/12 max-w-[450px]'>
         <h1
         className='text-[#0C799B] font-bold text-[2.5rem] leading-[3rem]'
         >
         {title}</h1>
         <p className='text-[1.125rem] font-bold leading[1.625rem] mt-2'>
            <span className='text-black'>{desc1}</span>
            <br/>
            <span className='text-black'>{desc2}</span>
         </p>

         {formtype === "signup" ?
         (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
         (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
         }

         <div className='flex w-full items-center gap-x-2'>
            <div className='w-full h-[1px] bg-black'></div>
            <p className='text-black font-medium leading[1.375rem]'>
                OR
            </p>
            <div className='w-full h-[1px] bg-black'></div>
         </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-black
         border border-black px-[12px] py-[8px] gap-x-2 mt-4'>
        <FcGoogle/> 
            <p>Sign up with Google</p>
        </button>


       </div>

       <div className='relative w-11/12 max-w-[450px]'>
        {/* <img src={frameImage} */}
        {/* alt="pattern"
        loading="lazy" */}
      {/* /> */}
       

        <img src={image}
        alt="Students"
        loading="lazy" 
         className='absolute  right-4 object-cover '
        />
       </div>

    </div>
  )
}

export default Template