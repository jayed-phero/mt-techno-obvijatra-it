import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    const [menuOpen, setMenuOpen] = useState(false)
    const [nav, setNav] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        function activateNav() {
            let scrollPosition = window.pageYOffset
            if (scrollPosition > 200) {
                setNav(true)
            }
            else if (scrollPosition < 10) {
                setNav(false)
            }
        }
        window.addEventListener("scroll", activateNav)
    }, [])

    return (
        <div className={`transition ${nav && 'fixed top-0 w-full ease-in duration-500 bg-white z-50'}`}>

            <div className={`shadow-lg z-50 px-6 py-3  w-full print:hidden ${nav? ' ' : 'md:py-'}`}>
                <nav class=" max-w-7xl mx-auto lg:flex lg:justify-between lg:items-center">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="flex items-center gap-1.5 ">
                                <img className='h-12 w-12 rounded-full logo' src={logo}/>
                                <div className='text'>
                                    <h3 className='uppercase text-green-800'>Ovijatra</h3>
                                    <p className='uppercase text-gray-800'>IT Institute</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Mobile menu button --> */}
                        <div class="flex lg:hidden">
                            <button onClick={() => setOpen(!isOpen)} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                {
                                    isOpen ?
                                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        :
                                        <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                        </svg>
                                }
                            </button>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" -- > */}
                    <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white uppercase  md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>
                        <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 font-semibold">
                            <Link to='/' class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" >Home</Link>
                            <Link class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" to='/aboutus'>About Us</Link>
                            <Link class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" to='/successstudent'>Success Hitory</Link>
                            <Link to='/contact' class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500">Contact</Link>
                            <a class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Carrer</a>
                        </div>

                        <Link to='/allcourses' class="block h-10 px-5 py-2 mt-4 text-sm text-center outline-none border-none capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto background-radial-gradient text-white font-semibold " >
                            Our Courses
                        </Link>
                    </div>
                </nav >

            </div >
        </div>
    );
};

export default Navbar;