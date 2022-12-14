import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetails from "../../Pages/CoursesContainer/CourseDetails/CourseDetails";
import CoursesContainer from "../../Pages/CoursesContainer/CoursesContainer";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../../Pages/Login/PrivateRoute/PrivateRoute";
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
            loader:({params}) => fetch(`https://it-skills-for-all-server.vercel.app/course-details/${params.id}`)

           },
           {
            path:'/checkout/:id',
            element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader:({params}) => fetch(`https://it-skills-for-all-server.vercel.app/checkout/${params.id}`)

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
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>

       }
])