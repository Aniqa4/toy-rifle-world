import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import AllToys from "../Components/AllToys";
import MyToys from "../Components/MyToys";
import AddAToy from "../Components/AddAToy";
import Blogs from "../Components/Blogs";
import Layout from "../Layout/Layout";
import Login from "../Components/Login";

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