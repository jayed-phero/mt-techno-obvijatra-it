import React from 'react';
import Company from '../Company/Company';
import Courses from '../Courses/Courses';
import CoursesHome from '../Courses/CoursesHome';
import HomeBanner from '../HomeBanner/HomeBanner';
import LearningSystem from '../LearningSystem/LearningSystem';
import OurTeam from '../OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <CoursesHome/>
            <Courses/>
            <OurTeam/>
            <Company/>
            <LearningSystem/>
        </div>
    );
};

export default Home;