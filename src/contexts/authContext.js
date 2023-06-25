import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const initialUserDetails = {
        firstName:"",
        lastName:"",
        email:"",
        username:"",
        password:"",
    }
    
    const [ loginInput, setLoginInput] = useState({username:"aryashah", password:"aryashah123"})
    
    const [signupInput, setSignupInput] = useState(initialUserDetails)

    const authInitial = {
        authLoading:false,
        isLoggedIn: false,
        user:{},
        token:"",
        error:""
    }

    function authReducer(){

    }



    const [authState, authAction] = useReducer(authReducer, authInitial)

    const navigate = useNavigate();
    const location = useLocation();

    const loginHandler = async (loginInput) => {
        try{
            const res = await axios({
                method:"POST",
                data:loginInput,
                url:"api/auth/login"
            })
            console.log(res);
          
        } catch(e){
            console.error(e)
        }
    }




    
    
    return(
        <AuthContext.Provider value={{loginHandler}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)