import { PostReducer, PostReducerActionArgument } from "../../types/types";
import { PostActions } from "../actions/postActions";

const initialState: PostReducer = {
    posts: null,
    post: null
};

const { GET_POSTS, GET_POST, ADD_POST } = PostActions;

export const postReducer = (
    state: PostReducer = initialState,
    { type, posts, post }: PostReducerActionArgument
): PostReducer => {
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts
            };
        case GET_POST:
            return {
                ...state,
                post
            };
        case ADD_POST:
            return {
                ...state,
                post
            };
        default:
            return { ...state };
    }
};
