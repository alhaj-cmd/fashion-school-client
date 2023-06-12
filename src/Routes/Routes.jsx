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
import PrivetRoute from "./PrivetRoute";
import ClassesItem from "../components/Instractors/ClassesItem";
import ManageClass from "../components/Pages/AdminDb/ManageClass";
import AddAclass from "../components/Pages/InstractorDb/AddAclass";
import MyClass from "../components/Pages/InstractorDb/MyClass";
import EnrolClass from "../components/Pages/StudentDb/EnrolClass";
import PaymentClass from "../components/Pages/StudentDb/PaymentClass";
import SelectedClass from "../components/Pages/StudentDb/SelectedClass";
import ManageUsers from "../components/Pages/AdminDb/ManageUsers";



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
          path:'manageclass',
          element:<ManageClass></ManageClass>
        },
        {
          path:'manageuser',
          element:<ManageUsers></ManageUsers>
        },
        {
          path:'addAclass',
          element:<AddAclass></AddAclass>
        },
        {
          path:'myclass',
          element:<MyClass></MyClass>
        },
        {
          path:'enrollclass',
          element:<EnrolClass></EnrolClass>
        },
        {
          path:'selectedclass',
          element:<SelectedClass></SelectedClass>
        },
        {
          path:'payment',
          element:<PaymentClass></PaymentClass>
        }
      ]
    }
  ]);

