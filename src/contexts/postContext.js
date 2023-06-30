import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const PostContext = createContext();

export const PostContextProvider = ({children}) => {

    const [ postState, dispatch] = useReducer(postReducer, postInitialState)



    return(
        <PostContext.Provider value={{}}>{children}</PostContext.Provider>
    )
}

export const usePostContext = () => useContext(PostContext);