import React, { useState } from 'react';
import './Courses.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} mb-32`}
            style={{ display: "flex", alignItems: "center", justifyContent:"center", background: "gray", padding: "21px", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={`${className} mb-32`}
        style={{ display: "flex", alignItems: "center", justifyContent:"center", background: "gray", padding: "21px", borderRadius: "50%" , zIndex: "2" }}
        onClick={onClick}
        />
    );
}

const CoursesHome = () => {
    const [defaultImage, setDefaultImage] = useState({});

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // api objective data 

    const courses = [
        {
            icon: <i class="fa-solid fa-network-wired"></i>,
            bgColor: '',
            title: "Computer Basic"
        },
        {
            icon: <i class="fa-solid fa-laptop"></i>,
            bgColor: '',
            title: "Microsoft Office"
        },
        {
            icon: <i class="fa-solid fa-database"></i>,
            bgColor: '',
            title: "Excel Crush"
        },
        {
            icon: <i class="fa-solid fa-train"></i>,
            bgColor: '',
            title: "Microsoft Office"
        },
        {
            icon: <i class="fa-solid fa-floppy-disk"></i>,
            bgColor: '',
            title: "Excel Crush"
        },
        {
            icon: <i class="fa-solid fa-tv"></i>,
            bgColor: '',
            title: "Data Entry"
        },
        {
            icon: <i class="fa-solid fa-keyboard"></i>,
            bgColor: '',
            title: "Web Development"
        },
        {
            icon: <i class="fa-solid fa-window-restore"></i>,
            bgColor: '',
            title: "Fignma Basic"
        },
        {
            icon: <i class="fa-solid fa-house-laptop"></i>,
            bgColor: '',
            title: "Basic Engeniaring"
        }
    ]


    return (
        <div className='max-w-6xl mx-auto px-7 md:px-0'>
            <Slider {...settings}>
                {
                    courses.map(course =>
                        <div className='border-2 rounded-2xl w-full shadow-xl h-44 flex flex-col items-center justify-center'>
                            <div className='flex flex-col items-center justify-center h-full w-full'>
                                <h3 className='text-5xl'>{course.icon}</h3>
                                <h1 className='text-xl font-semibold pt-3'>{course.title}</h1>
                            </div>
                        </div>
                    )
                }
            </Slider>
        </div>
    );
};

export default CoursesHome;