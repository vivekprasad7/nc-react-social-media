import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {

    const [displayProps, setDisplayProps] = useState(false);

    
    const navigate = useNavigate();
    const location = useLocation();

    const localStorageData = JSON.parse(localStorage.getItem("data"))
    console.log("localStorage Data", localStorageData);

    const authInitialState = {
        user:{},
        token: localStorageData?.token || "",
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

    const signupHandler = async (signupInput) =>{
        try{
            const {data, status} = await axios({
                method:'POST',
                data: signupInput,
                url:"/api/auth/signup"
            })
            if(status === 201){
                authDispatch({type:"SET_USER", payload: data?.createdUser});
                authDispatch({type:"SET_TOKEN", payload: data?.encodedToken});
                navigate(location?.state?.from?.pathname || "/")
                localStorage.setItem(
                    "data",
                    JSON.stringify({user:data?.createdUser, token: data?.encodedToken})
                );
                toast.success(`Hi, ${data?.createdUser.firstName}!`, {
                    icon: "👋",
                  });
            }


        } catch(e){
            console.error(e);
            toast.error(e.response.data.errors[0]);
        }
    }

    useEffect(()=>{
        if(localStorageData){
            authDispatch({type:"SET_USER", payload: localStorageData?.user});
            authDispatch({type:"SET_TOKEN", payload:localStorageData?.encodedToken});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const logoutHandler = () =>{
    authDispatch({ type: "SET_USER", payload: {} });
    authDispatch({ type: "SET_TOKEN", payload: "" });
    localStorage.removeItem("data");
    toast.success("Logged Out!");
    }


    
    
    return(
        <AuthContext.Provider value={{
            loginHandler, 
            signupHandler, 
            logoutHandler, 
            authState,
            authDispatch, 
            displayProps, 
            setDisplayProps}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)