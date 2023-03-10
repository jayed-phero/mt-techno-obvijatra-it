import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBanner.css';

const HomeBanner = () => {
    // max-w-6xl flex items-center justify-center
    return (
        <div class="">
            <section class="text-gray-800 background-radial-gradient w-full ">
                <div class="px-6 md:px-12 text-center lg:text-left">
                    <div class="max-w-7xl h-full mx-auto py-10 md:py-20">
                        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                            <div class="mt-12 lg:mt-0">
                                <h1 class="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12 text-bg" >
                                    Are you ready <br /><span className='text-span text-5xl md:text-6xl xl:text-7xl'>for an adventure?</span>
                                </h1>
                                <p class="text-lg text-para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
                                    adipisci tenetur repudiandae rerum quos.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
                                    adipisci tenetur repudiandae rerum quos.
                                </p>
                                <div className='flex items-center gap-7 flex-col md:flex-row'>
                                    <Link to='/contact' class="block h-10 md:h-12 flex items-center justify-center px-5 py-2 mt-4 text-lg text-center capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-7 hover:bg-gray-100 lg:w-44 background-radial-gradient text-white font-semibold outline-none border-none" >
                                        <i class="fa-solid fa-book-open-reader pr-3"></i>  Contact Us
                                    </Link>
                                    <Link to='/' class="block h-10 md:h-12 flex items-center justify-center px-5 py-2 mt-4 text-lg text-center capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-7 hover:bg-transparent lg:w-auto background-radial-gradient text-white font-semibold outline-none border-none" >
                                        <i class="fa-solid fa-book-open-reader pr-3"></i>  Join Free Class
                                    </Link>
                                    
                                </div>
                            </div>
                            <div class="mb-12 lg:mb-0">
                                <div class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg video-iframe border-sec xl:h-[400px]" >
                                    <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full" src="https://www.youtube.com/embed/hs1HoLs4SD0" allowfullscreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
                                    {/* <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full" src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com" allowfullscreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeBanner;




