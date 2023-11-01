import { useContext } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginPage from "../pages/LoginPage";



const RequireAuth = () => {
    const {auth} = useContext(AuthContext)
    //const navigate = useNavigate();

    console.log(auth)

    return auth ? <Outlet/> : <LoginPage/>
/*
    return (

        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );

*/
    }
export default RequireAuth;