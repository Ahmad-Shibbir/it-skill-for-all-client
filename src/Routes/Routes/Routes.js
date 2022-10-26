import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CoursesContainer/CourseDetails/CourseDetails";
import CoursesContainer from "../../Pages/CoursesContainer/CoursesContainer";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
            path:'/home',
            element:<Home></Home>
           },
           {
            path:'/courses-container',
            element:<CoursesContainer></CoursesContainer>
           },
           {
            path:'/blog',
            element:<Blog></Blog>
           },
           {
            path:'/faq',
            element:<FAQ></FAQ>
           },
           {
            path:'/course-details/:id',
            element:<CourseDetails></CourseDetails>,
            loader:({params}) => fetch(`http://localhost:5000/course-details/${params.id}`)

           },
           {
            path:'/login',
            element:<Login></Login>

           },
           {
            path:'/register',
            element:<Register></Register>

           }

        ]
    }
])