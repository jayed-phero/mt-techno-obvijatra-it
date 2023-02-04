import React from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} mb-32`}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "gray", padding: "21px", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} mb-32`}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "gray", padding: "21px", borderRadius: "50%", zIndex: "2" }}
            onClick={onClick}
        />
    );
}

const Courses = () => {



    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 3,
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
                                    <h3 className='text-lg font-semibold '>Course Fee : $5000</h3>
                                    <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Slider>
        </div>
    );
};

export default Courses;