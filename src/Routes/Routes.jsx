import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import ErrorPages from "../components/Shared/Footer/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Instractors from "../components/Instractors/Instractors";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../components/Pages/AdminDb/Mycart";
import PrivetRoute from "./PrivetRoute";
import AllUsers from "../Layout/AllUsers/AllUsers";
import ClassesItem from "../components/Instractors/ClassesItem";



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
          path:'instrators',
          element:<Instractors></Instractors>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'classitem',
          element:<ClassesItem></ClassesItem>
        }
    ]
    },
    {
      path:'/dashboard',
      element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children:[
        {
          path:'mycart',
          element:<Mycart></Mycart>
        },
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);

