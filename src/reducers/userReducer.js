export const userReducer = (state, {type, payload}) => {
    switch(type){
        case"GET_ALL_USERS":
        return {...state, users : payload};
        case"UPDATE_USER_DATA":
        return state;
        case"GET_ALL_BOOKMARKS":
        return{...state, bookmarks : payload};
        case"ADD_BOOKMARK":
        return{...state, bookmarks: payload};
        case"REMOVE_BOOKMARK":
        return{...state, bookmarks:payload};
        case"SEARCH_BY_NAME":
        return{...state, searchInput: payload};
        default:
            return state;
    }
}