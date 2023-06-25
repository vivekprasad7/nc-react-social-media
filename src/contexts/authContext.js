import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const locatStorageData = JSON.parse(localStorage.getItem("data"))

    const authInitialState = {
        user:{},
        token: locatStorageData?.token || "",
    }

    const [authState, authDispatch] = useReducer(authReducer, authInitialState)


    const loginHandler = async (loginInput) => {
        try{
            const {data, status} = await axios({
                method:"POST",
                data: loginInput,
                url:"/api/auth/login"
            })
            if(status ===200){
                authDispatch({type: "SET_USER", payload: data?.foundUser});
                authDispatch({type: "SET_TOKEN", payload: data?.encodedToken})

                navigate(location?.state?.from?.pathname || "/");
                localStorage.setItem(
                    "data",
                    JSON.stringify({user: data?.foundUser , token: data?.encodedToken})
                );
                toast.success(`Welcome back, ${data?.foundUser.firstName}!`, { icon: "👋" })
            }

        } catch(e){
            console.error(e)
            toast.error("User does not exist! Please enter correct details.");

        }
    }


    
    
    return(
        <AuthContext.Provider value={{loginHandler}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)