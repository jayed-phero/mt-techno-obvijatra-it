import React from 'react';
import Slider from 'react-slick';

const Courses = () => {

    const courses = [
        {
            icon: <i class="fa-light fa-computer"></i>,
            bgColor: ''
        },
        {
            icon: <i class="fa-solid fa-database"></i>,
            bgColor: ''
        },
        {
            icon: <i class="fa-regular fa-window"></i>,
            bgColor: ''
        },
        {
            icon: <i class="fa-regular fa-network-wired"></i>,
            bgColor: ''
        },
        {
            icon: <i class="fa-regular fa-server"></i>,
            bgColor: ''
        },
        {
            icon: <i class="fa-solid fa-album"></i>,
            bgColor: ''
        },
        {
            icon: <i class="fa-sharp fa-solid fa-window-restore"></i>,
            bgColor: ''
        },
        {
            icon: <i class="fa-solid fa-house-laptop"></i>,
            bgColor: ''
        },
        {
            icon: <i class="fa-regular fa-laptop-code"></i>,
            bgColor: ''
        }
    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='max-w-6xl mx-auto my-20'>
            <div className='pb-7'>
                <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                    Our Authentic <span class="text-blue-500 ">Courses</span>
                </h1>

                <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
                    alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
            </div>
            <Slider  {...settings}>
                {
                    [1, 2, 3, 4, 5, 6].map(i =>
                        <div className="w-full p-3 rounded-3xl border shadow">
                            <img src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt=''
                                className='h-56 w-full rounded-3xl'
                            />
                            <div>

                            </div>
                        </div>
                    )
                }
            </Slider>
        </div>
    );
};

export default Courses;