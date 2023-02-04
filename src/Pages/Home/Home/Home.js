import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Courses from '../Courses/Courses';
import CoursesHome from '../Courses/CoursesHome';
import HomeBanner from '../HomeBanner/HomeBanner';
import OurTeam from '../OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            {/* <h3>Home</h3> */}
            <HomeBanner/>
            <CoursesHome/>
            <Courses/>
            {/* <Footer/> */}
            <OurTeam/>
        </div>
    );
};

export default Home;