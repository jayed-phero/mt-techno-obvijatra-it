import React from 'react';
import Courses from '../Courses/Courses';
import CoursesHome from '../Courses/CoursesHome';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            {/* <h3>Home</h3> */}
            <HomeBanner/>
            <CoursesHome/>
            {/* <Courses/> */}
        </div>
    );
};

export default Home;