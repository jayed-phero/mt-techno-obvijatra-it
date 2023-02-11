import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='py-2 bg-black hidden md:block'>
            <div className=' max-w-7xl flex items-center justify-between text-white font-semibold  mx-auto px-5 md:px-0 cursor-pointer'>
                <div className='flex items-center md:gap-11 lg:gap-20'>
                    <div className='flex items-center gap-5 text-lg'>
                        <a href='https://muhammadjayed.vercel.app/' target={'_blank'}><i class="fa-brands fa-facebook-f hover:text-blue-900 duration-300 transition ease-in"></i></a>
                        <i class="fa-brands fa-whatsapp hover:text-blue-900 duration-300 transition ease-in"></i>
                        <i class="fa-brands fa-youtube hover:text-blue-900 duration-300 transition ease-in"></i>
                        <i class="fa-solid fa-comments hover:text-blue-900 duration-300 transition ease-in"></i>
                    </div>
                    <h3><i class="fa-solid fa-envelope pr-2"></i> example@info.com</h3>
                </div>
                <h3><i class="fa-solid fa-phone pr-2"></i> +8801001122333</h3>
            </div>
        </div>
    );
};

export default Header;