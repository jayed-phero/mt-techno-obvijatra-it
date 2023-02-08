import React from 'react';
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div>
            <footer class="bg-sky-100 dark:bg-gray-900">
                <div class="max-w-7xl p-6 mx-auto">
                    <div class="lg:flex">
                        <div class="w-full -mx-6 lg:w-2/5">
                            <div class="px-6">
                                <div class="flex items-center gap-1.5 ">
                                    <img className='h-12 w-12 rounded-full logo' src={logo} />
                                    <div className='text'>
                                        <h3 className='uppercase text-green-800'>Ovijatra</h3>
                                        <p className='uppercase text-gray-800'>IT Institute</p>
                                    </div>
                                </div>

                                <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                                <div class="flex mt-6 -mx-2">
                                    <a href="#"
                                        class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 border p-2 border-gray-500 rounded-full"
                                        aria-label="Reddit">
                                        <i class="fa-brands fa-whatsapp hover:text-blue-900 duration-300 transition ease-in"></i>

                                    </a>

                                    <a href="#"
                                        class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 border p-2 border-gray-500 rounded-ful"
                                        aria-label="Facebook">
                                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                            </path>
                                        </svg>
                                    </a>

                                    <a href="#"
                                        class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 border p-2 border-gray-500 rounded-ful"
                                        aria-label="Github">
                                        <i class="fa-solid fa-comments hover:text-blue-900 duration-300 transition ease-in"></i>

                                    </a>
                                    <a href="#"
                                        class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 border p-2 border-gray-500 rounded-ful"
                                        aria-label="Github">
                                        <i class="fa-brands fa-youtube hover:text-blue-900 duration-300 transition ease-in"></i>

                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 lg:mt-0 lg:flex-1">
                            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 class="text-gray-700 uppercase dark:text-white">About</h3>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</a>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                                </div>

                                <div>
                                    <h3 class="text-gray-700 uppercase dark:text-white">Blog</h3>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</a>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                                </div>

                                <div>
                                    <h3 class="text-gray-700 uppercase dark:text-white">Courses</h3>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">All Courses</a>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Development</a>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Graphic Design</a>
                                </div>

                                <div>
                                    <h3 class="text-gray-700 uppercase dark:text-white">Contact</h3>
                                    <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                                    <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                    <div>
                        <p class="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;