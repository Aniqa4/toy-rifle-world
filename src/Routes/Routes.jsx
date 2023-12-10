import { createBrowserRouter } from "react-router-dom";
import AllToys from "../Components/AllToys";
import MyToys from "../Components/MyToys";
import AddAToy from "../Components/AddAToy";
import Blogs from "../Components/Blogs";
import Layout from "../Layout/Layout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ToyDetails from "../Components/ToyDetails";
import Navigator from "../Navigator/Navigator";
import UpdateMyToys from "../Components/UpdateMyToys";
import ErrorPage from "../Components/errorPage";
import Home from "../Home/Home";


const router = createBrowserRouter([
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    },
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
            },
            {
                path:'/myToys/:id',
                element:<UpdateMyToys></UpdateMyToys>,
                loader:({params})=>fetch(`https://toy-marketplace-server-aniqa4.vercel.app/myToys/${params.id}`)
            }
        ]
    },
]);

export default router;