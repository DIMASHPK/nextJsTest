import React, { useState } from "react";
import classes from "../styles/newPost.module.css";
import { useDispatch } from "react-redux";
import { initAddPost } from "../redux/actionCreaters/postaActionCreaters";
import { useRouter } from "next/dist/client/router";

export const NewItemForm = (): JSX.Element => {
    const [newPost, setNewPost] = useState({ title: "", body: "" });
    const dispatch = useDispatch();
    const { push } = useRouter();

    const handleChange = ({
        target: { value, name }
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setNewPost(state => ({ ...state, [name]: value }));

    const disabledButton = (): boolean => Object.values(newPost).some(item => !item.length);

    const callback = (id: string | number): void => {
        push("/posts/" + id);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(initAddPost(newPost, callback));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.titleInputWrapper}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={newPost.title}
                    onChange={handleChange}
                />
            </div>
            <div className={classes.BodyInputWrapper}>
                <label htmlFor="body">Body</label>
                <textarea
                    name="body"
                    id="body"
                    value={newPost.body}
                    onChange={handleChange}
                    rows={5}
                />
            </div>
            <div className={classes.buttonWrapper}>
                <button type="submit" disabled={disabledButton()}>
                    Add post
                </button>
            </div>
        </form>
    );
};
