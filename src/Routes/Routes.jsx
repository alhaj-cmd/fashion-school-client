import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import ErrorPages from "../components/Shared/Footer/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPages></ErrorPages>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        }
    ]
    },
  ]);

