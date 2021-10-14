import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import flowersReducer from "./ducks/flowers";
import cartReducer from "./ducks/cart";
import sortReducer from "./ducks/sort";
import blogsReducer from "./ducks/blogs";
import userReducer from "./ducks/user";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    userReducer,
    flowersReducer,
    cartReducer,
    sortReducer,
    blogsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
