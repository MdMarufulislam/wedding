import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Component/Error/Error";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import PrivateRoute from "../privateRout/PrivateRoute";
import Venues from "../Pages/Venues/Venues";
import Vendors from "../Pages/Vendors/Vendors";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>fetch("/services.json")
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><Services ></Services></PrivateRoute>,
                loader: () =>fetch("/services.json")
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/venues',
                element: <PrivateRoute><Venues></Venues></PrivateRoute>
            },
            {
                path: '/vendors',
                element: <PrivateRoute> <Vendors></Vendors></PrivateRoute>
            },
        ]
    },
]);


export default router;