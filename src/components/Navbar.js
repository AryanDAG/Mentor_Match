// import React from 'react'
// import logo from "../assets/logo.png"
// import{Link} from "react-router-dom"
// import {toast} from "react-hot-toast"



// const Navbar = (props) => {
//     let isLoggedIn = props.isLoggedIn;
//     let setIsLoggedIn = props.setIsLoggedIn;

//   return (
//     <div className='flex justify-between items-center w-11/12 max-w-[1160px] mx-auto'>

//         <Link to="/">
//             <img src={logo} alt="Logo" width={120} height={32} loading="lazy"/>
//         </Link>

//         <nav>
//             <ul className='font-bold text-base  hover:bg-transparent active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  flex gap-x-12'>
//                 <li
//                  className='px-0 py-0 mx-5 my-1'>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li
//                 className='px-0 py-0 mx-5 my-1 '>
//                     <Link to="/">Career</Link>
//                 </li>
//                 <li
//                 className='px-0 py-0 mx-5 my-1 '>
//                     <Link to="/">About Us</Link>
//                 </li>
//                 <li
//                 className='px-1 py-0 mx-5 my-1 '>
//                     <Link to="/">Contact Us</Link>
//                 </li>
//             </ul>
//         </nav>

//         {/* Login - SignUp - LogOut - Dashboard */}

//         <div className='flex items-center gap-x-4'>
            // { !isLoggedIn &&
            //     <Link to="/login">
            //         <button className=" text-white font-bold py-[8px] px-[8px] rounded-[10px] transition ease-in-out delay-150 bg-[#0C799B] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  duration-300
            //          "
            //          >
            //             Log in
            //         </button>
            //     </Link>

            // }

            // { !isLoggedIn &&
            //     <Link to="/signup">
            //         <button className='text-white font-bold py-[8px] px-[8px] rounded-[10px] transition ease-in-out delay-150  bg-[#0C799B] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
            //             Sign up
            //         </button>
            //     </Link>
            // }
            // { isLoggedIn &&
            //     <Link to="/">
            //         <button onClick={() => {
            //             setIsLoggedIn(false);
            //             toast.success("Logged Out");
            //         }}
            //          className='bg-slate-600  text-white py-[8px] px-[12px] rounded-[8px] 
            //         border border-black' >
            //             Log Out
            //         </button>
            //     </Link>
            // }
            // { isLoggedIn &&
            //     <Link to="/dashboard">
            //         <button className='bg-richblack text-white py-[8px] px-[12px] rounded-[8px] 
            //         border border-black'>
            //             Dashboard
            //         </button>
            //     </Link>
            // }
//         </div>

//     </div>
//   )
// }

// export default Navbar



import React, { useState } from 'react'
import logo from "../assets/logo.png"
import{Link} from "react-router-dom"
import {toast} from "react-hot-toast"



const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 mt-[-30px]">
                <div>
                    <div className="flex items-center justify-between  md:py-5 md:block">
                        <Link to="/">
                                <img src={logo} alt="Logo" width={120} height={32} loading="lazy" className="text-2xl font-bold text-white"/>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div    className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-black">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-black">
                            <Link to="/">Mentorship</Link>                            </li>
                            <li className="text-black">
                            <Link to="/">Testimonial</Link>                            </li>
                            <li className="text-black">
                            <Link to="/">About Us</Link>                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 hidden max-md:inline " >
                        { !isLoggedIn &&
                <Link to="/login">
                    <button className= " my-2 font-bold py-[8px] px-[8px] transition ease-in-out delay-150 bg-[#0C799B] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  duration-300 inline-block w-full  text-center text-white rounded-md shadow "
                     >
                        Log in
                    </button>
                </Link>

            }

            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='my-2 font-bold py-[8px] px-[8px] transition ease-in-out delay-150  bg-[#0C799B] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-block w-full  text-center text-white rounded-md shadow'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                     className='bg-slate-600  text-white py-[8px] px-[12px] rounded-[8px] 
                    border border-black' >
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack text-white py-[8px] px-[12px] rounded-[8px] 
                    border border-black'>
                        Dashboard
                    </button>
                </Link>
            }


                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    { !isLoggedIn &&
                <Link to="/login">
                    <button className=" text-white font-bold py-[8px] px-[8px] rounded-[10px] transition ease-in-out delay-150 bg-[#0C799B] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  duration-300
                     "
                     >
                        Log in
                    </button>
                </Link>

            }

            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='text-white font-bold py-[8px] px-[8px] rounded-[10px] transition ease-in-out delay-150  bg-[#0C799B] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                     className='bg-slate-600  text-white py-[8px] px-[12px] rounded-[8px] 
                    border border-black' >
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack text-white py-[8px] px-[12px] rounded-[8px] 
                    border border-black'>
                        Dashboard
                    </button>
                </Link>
            }


                </div>
            </div>
        </nav>
    );
}


export default Navbar



