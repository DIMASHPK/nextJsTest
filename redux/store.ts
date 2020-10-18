import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";
import { postReducer } from "./reducers/postReducers";
import { watchAddPost, watchGetPost, watchGetPosts } from "./sagas/postsSagas";

const sagaMiddleWare = createSagaMiddleware();

const reducers = combineReducers({
    data: postReducer
});

export const Store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(watchGetPosts);
sagaMiddleWare.run(watchGetPost);
sagaMiddleWare.run(watchAddPost);
