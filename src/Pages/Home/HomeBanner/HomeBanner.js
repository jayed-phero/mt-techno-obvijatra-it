import React from 'react';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div class="container">
            <section class="m text-gray-800 background-radial-gradient min-h-screen">
                <div class="px-6 max-w-6xl flex items-center justify-center md:px-12 text-center lg:text-left">
                    <div class="container mx-aut">
                        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                            <div class="mt-12 lg:mt-0">
                                <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-bg" >
                                    Are you ready <br /><span className='text-span'>for an adventure?</span>
                                </h1>
                                <p class="text-lg text-para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
                                    adipisci tenetur repudiandae rerum quos.
                                </p>
                            </div>
                            <div class="mb-12 lg:mb-0">
                                <div class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg video-iframe" >
                                    <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full" src="https://www.youtube.com/embed/KDcnF_93iUQ" allowfullscreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
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




