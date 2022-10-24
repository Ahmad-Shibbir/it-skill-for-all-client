import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CoursesContainer from "../../Pages/CoursesContainer/CoursesContainer";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";

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

        ]
    }
])