import React from 'react';
import { Link } from 'react-router-dom';
import './Cta.css'

const CTA = () => {
    return (
        <div>
            <section class="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
                <div
                    class="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                    <div class="lg:w-1/2">
                        <div class="h-64 bg-cover lg:h-full imageStyle"></div>
                    </div>

                    <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                            Build Your New <span class="text-blue-500">Idea</span>
                        </h2>

                        <p class="mt-4 text-gray-500 dark:text-gray-300">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam
                            mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
                        </p>

                        <div class="inline-flex w-full mt-6 sm:w-auto">
                            <Link to='/allcourses' class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Start Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CTA;