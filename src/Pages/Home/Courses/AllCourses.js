import React from 'react';

const AllCourses = () => {
    return (
        <div className='max-w-7xl mx-auto my-20 px-7 md:px-0 bg-gray-100 rounded-3xl py-9'>
            <div className='pb-7'>
                <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                    Our Authentic <span class="text-blue-500 ">Courses</span>
                </h1>

                <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
                    alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
            </div>
            <div className='md:px-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i =>
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
        </div>
    );
};

export default AllCourses;