import { combineReducers, createStore, applyMiddleware } from "redux";
import flowersReducer from "./ducks/flowers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ flowersReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
