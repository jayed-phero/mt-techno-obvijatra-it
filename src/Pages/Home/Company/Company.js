import React from 'react';
import './Company.css'

const Company = () => {
    return (
        <div>
            <section class="bg-gray-100 max-w-7xl mx-auto px-5 md:px-7 py-11 rounded-3xl dark:bg-gray-900 my-20">
                <div class="max-w-7xl py-10 mx-auto">
                    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our
                       Institution Area</h1>

                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 bgFirst">
                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Student Teaching Area</h2>
                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Learner</p>
                            </div>
                        </div>

                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 bgSecond" >
                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Freelancer Section</h2>
                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Freelancer</p>
                            </div>
                        </div>

                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 bgThird">
                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Office Entertainment Area</h2>
                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
                            </div>
                        </div>

                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 bgFour">
                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Student Learning Point</h2>
                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Learning Point</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Company;