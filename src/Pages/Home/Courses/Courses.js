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
        slidesToShow: 4,
        slidesToScroll: 4,
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
        <div>
            <Slider  {...settings}>
                {
                    [1, 2, 3, 4, 5, 6].map(i =>
                        <div className="card">
                            <div className="card-top">
                                <img
                                    src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                                    alt=''
                                />
                                <h1>Corpkit is a global management </h1>
                            </div>
                            <div className="card-bottom">
                                <h3>Corpkit is a global management </h3>
                                <span className="category">global management </span>
                            </div>
                        </div>
                    )
                }
            </Slider>
        </div>
    );
};

export default Courses;