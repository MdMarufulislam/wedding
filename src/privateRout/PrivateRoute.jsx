import { useContext } from "react";
import { contextApi } from "../context/Context";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(contextApi)
    const location=useLocation()
  
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return (
       <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;