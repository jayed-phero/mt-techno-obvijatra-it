import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Home/Contact/Contact";
import AllCourses from "../Pages/Home/Courses/AllCourses";
import CourseDetails from "../Pages/Home/Courses/CourseDetails";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'contact',
                element: <Contact/> 
            },
            {
                path: '/allcourses',
                element: <AllCourses/>
            },
            {
                path: '/coursedetails/:id',
                element: <CourseDetails/>
            },
            {
                path: 'aboutus',
                element: <AboutUs/>
            }
        ]
    }
])

export default router ;