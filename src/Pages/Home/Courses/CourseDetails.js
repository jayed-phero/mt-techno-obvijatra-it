import React from 'react';
import ScrollToTop from '../../../Shared/Scrool-to-top';
import EnrollCourseForm from './EnrollCourseForm';

const CourseDetails = () => {
    return (
        <div>
            <div class="max-w-7xl flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <ScrollToTop />
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                            Easiest way to create your website
                        </h1>

                        <div class="mt-8 space-y-5">
                            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span class="mx-2">Clean and Simple Layout</span>
                            </p>

                            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span class="mx-2">Just Copy Learning</span>
                            </p>

                            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span class="mx-2">Easy to Use</span>
                            </p>
                        </div>
                    </div>

                    <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                        <form class="flex flex-col lg:flex-row">
                            <input type="email" placeholder="Enter your email address" class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                            <button type="button" class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                Enroll Now
                            </button>
                        </form>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="glasses photo" />
                </div>
            </div>
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br/> awesome <span class="text-blue-500">Courses</span></h1>

            <div className='md:px-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mx-auto max-w-7xl my-10 md:my-20 px-6'>
                {
                    [1, 2, 3].map(i =>
                        <div className="w-full p-3 rounded-3xl border shadow bg-white">
                            <img src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt=''
                                className='h-56 w-full rounded-3xl'
                            />
                            <div className='p-5'>
                                <h3 className='text-lg font-semibold'>Microsofty Office</h3>
                                <div className='flex items-center gap-2 py-3'>
                                    <div className='flex items-center gap-1 text-yellow-500'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <p className='text-gray-500 text-sm'>5001 reviews</p>
                                </div>
                                <div className='flex items-center pt-5 justify-between'>
                                    <h3 className='text-sm sm:text-lg font-semibold  '>Course Fee : <span className='block'>$5000</span></h3>
                                    <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <EnrollCourseForm />
        </div>
    );
};

export default CourseDetails;