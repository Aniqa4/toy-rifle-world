import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";
import AllToys from "../Component/AllToys";
import MyToys from "../Component/MyToys";
import AddAToy from "../Component/AddAToy";
import Blogs from "../Component/Blogs";
import Layout from "../Layout/Layout";
import Login from "../Component/Login";

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
            }
        ]
    },
]);

export default router;