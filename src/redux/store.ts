import { combineReducers, createStore, applyMiddleware } from "redux";
import flowersReducer from "./ducks/flowers";
import cartReducer from "./ducks/cart";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ flowersReducer, cartReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
