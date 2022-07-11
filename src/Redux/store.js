import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
const middlewares = [thunk];
export default createStore(reducer, applyMiddleware(...middlewares))