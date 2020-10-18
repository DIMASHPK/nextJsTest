import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { PostObject } from "../types/types";

const config: AxiosRequestConfig = {
    baseURL: "https://simple-blog-api.crew.red/posts"
};

const instance: AxiosInstance = axios.create(config);

export const api = {
    // @typescript-eslint/no-explicit-any
    getPosts: (): Promise<PostObject[]> => {
        return instance.get("").then(res => res.data);
    },
    // @typescript-eslint/no-explicit-any
    getPost: (id: string): Promise<PostObject> => {
        return instance.get(id).then(res => res.data);
    },
    // @typescript-eslint/no-explicit-any
    addPost: ({ title, body }: PostObject): Promise<PostObject> => {
        return instance.post("", { title, body });
    }
};
