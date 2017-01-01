import {createStore} from "redux";
import {syncHistoryWithStore} from "react-router-redux";
import {browserHistory} from "react-router";
import rootReducer from "./reducers/index";
import comments from "./data/comments";
import posts from "./data/posts";

//create an object from default data

const defaultData = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultData);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;