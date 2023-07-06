import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    return(
        <UserContext.Provider>{children}</UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);