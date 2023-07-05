export const postReducer = (state,action) => {
    switch(action.type){
        case"IS_POST_LOADING":
        return {...state, postLoading : action.payload};
        case"GET_ALL_POSTS":
        return {...state, posts : action.payload};
        case"GET_SINGLE_POST":
        return {...state, post : action.payload};
        case"CREATE_NEW_POST":
        return {...state, posts : action.payload};
        case"LIKE_POST":
        return {...state, posts : action.payload};
        case"DISLIKE_POST":
        return {...state, posts : action.payload};
        case"EDIT_POST":
        return {...state, posts : action.payload};
        case"DELETE_POST":
        return {...state, posts : action.payload};
        case"ADD_COMMENT":
        return {...state, posts : action.payload};
        case"EDIT_COMMENT":
        return {...state, posts : action.payload};
        case"DELETE_COMMENT":
        return {...state, posts : action.payload};
        case"SORT_POSTS_BY":
        return {...state, sortType : action.payload};
        default:
            return state;
    }
}