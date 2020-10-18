import { takeEvery, put, call } from "redux-saga/effects";
import { api } from "../../api/apiConfig";
import { ActionCreatorAddPostInit, ActionCreatorGetPostInit } from "../../types/types";
import { catchError } from "../../utils/notifications";
import { getPostAC, getPostsAC } from "../actionCreaters/postaActionCreaters";
import { PostActions } from "../actions/postActions";

const { GET_POSTS_INIT, GET_POST_INIT, ADD_POST_INIT } = PostActions;
const { getPosts, getPost, addPost } = api;

function* workerGetPosts() {
    try {
        const posts = yield call(getPosts);

        yield put(getPostsAC(posts));
    } catch (error) {
        catchError(error);
    }
}

export function* watchGetPosts(): Generator {
    yield takeEvery(GET_POSTS_INIT, workerGetPosts);
}

function* workerGetPost({ id }: ActionCreatorGetPostInit) {
    try {
        const post = yield call(getPost, id);

        yield put(getPostAC(post));
    } catch (error) {
        catchError(error);
    }
}

export function* watchGetPost(): Generator {
    yield takeEvery(GET_POST_INIT, workerGetPost);
}

function* workerAddPost({ title, body, callback }: ActionCreatorAddPostInit) {
    try {
        const { data: post } = yield call(addPost, { title, body });

        yield put(getPostAC(post));
        yield call(callback, post.id);
    } catch (error) {
        catchError(error);
    }
}

export function* watchAddPost(): Generator {
    yield takeEvery(ADD_POST_INIT, workerAddPost);
}
