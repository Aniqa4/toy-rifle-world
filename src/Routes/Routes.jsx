import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import AllToys from "../Components/AllToys";
import MyToys from "../Components/MyToys";
import AddAToy from "../Components/AddAToy";
import Blogs from "../Components/Blogs";
import Layout from "../Layout/Layout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ToyDetails from "../Components/ToyDetails";
import Navigator from "../Components/Navigator/Navigator";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/alltoys",
                element: <AllToys></AllToys>
            },
            {
                path: "/mytoys",
                element: <MyToys></MyToys>
            },
            {
                path: "/addatoy",
                element: <AddAToy></AddAToy>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/Register",
                element: <Register></Register>
            },
            {
                path:'/toy/:id',
                element:<Navigator><ToyDetails></ToyDetails></Navigator>
            }
        ]
    },
]);

export default router;