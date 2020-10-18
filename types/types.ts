import { ReactElement } from "react";

export interface LayoutProps {
    header: string;
    children: ReactElement;
}

export interface PostObject {
    title: string;
    body: string;
    id?: number;
    postId?: number;
}

export interface Posts {
    posts: Array<PostObject> | null;
}

export interface Post {
    post: PostObject | null;
}

export interface PostReducer {
    posts: Array<PostObject> | null;
    post: PostObject | null;
}

export interface MainStore {
    data: PostReducer;
}

export interface PostActionsTypes {
    [action: string]: string;
}

export interface PostReducerActionArgument extends PostReducer {
    type: string;
}

export interface ActionCreatorType {
    type: string;
}

export interface ActionCreatorGetPosts extends ActionCreatorType {
    posts: Array<PostObject>;
}

export interface ActionCreatorGetPostInit extends ActionCreatorType {
    id: string;
}

export interface ActionCreatorGetPost extends ActionCreatorType {
    post: PostObject;
}

export interface ActionCreatorAddPostInit extends ActionCreatorType {
    title: string;
    body: string;
    callback: (id: string | number) => void;
}
