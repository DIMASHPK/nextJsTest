import {
    ActionCreatorGetPost,
    ActionCreatorType,
    PostObject,
    ActionCreatorGetPostInit,
    ActionCreatorAddPostInit,
    ActionCreatorGetPosts
} from "../../types/types";
import { PostActions } from "../actions/postActions";

const { GET_POSTS_INIT, GET_POSTS, GET_POST_INIT, GET_POST, ADD_POST_INIT, ADD_POST } = PostActions;

export const initGetPostsAC = (): ActionCreatorType => ({ type: GET_POSTS_INIT });
export const getPostsAC = (posts: Array<PostObject>): ActionCreatorGetPosts => ({
    type: GET_POSTS,
    posts
});

export const initGetPostAC = (id: string): ActionCreatorGetPostInit => ({
    type: GET_POST_INIT,
    id
});
export const getPostAC = (post: PostObject): ActionCreatorGetPost => ({ type: GET_POST, post });

export const initAddPost = (
    { title, body }: PostObject,
    callback: (id: string | number) => void
): ActionCreatorAddPostInit => ({
    type: ADD_POST_INIT,
    title,
    body,
    callback
});
export const addPostAC = (post: PostObject): ActionCreatorGetPost => ({ type: ADD_POST, post });
