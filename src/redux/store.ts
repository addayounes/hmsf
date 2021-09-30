import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import flowersReducer from "./ducks/flowers";
import cartReducer from "./ducks/cart";
import sortReducer from "./ducks/sort";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ flowersReducer, cartReducer, sortReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
