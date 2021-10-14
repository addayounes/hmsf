import { Dispatch } from "redux";
import { LogIn } from "../../firebase/auth";
import { User } from "@firebase/auth";

const SET_USER = "SET_USER";
const REMOVE_USER = "REMOVE_USER";

// action types

type UserActions = { type: "SET_USER"; payload: User } | { type: "REMOVE_USER" };

// sync actions

export const setUser = (user: User): UserActions => ({
    type: SET_USER,
    payload: user,
});

export const removeUser = (): UserActions => ({
    type: REMOVE_USER,
});

// async actions

export const LoginUser = () => async (dispatch: Dispatch) => {
    try {
        const res = await LogIn();
        res && dispatch(setUser(res.user));
        window.location.reload();
    } catch (e) {
        console.log(e);
    }
};

interface UserState {
    user: User | null;
    isLogged: boolean;
}

const initialState: UserState = {
    user: null,
    isLogged: false,
};

const userReducer = (state = initialState, action: UserActions) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload, isLogged: true };
        case REMOVE_USER:
            return { ...state, user: null, isLogged: false };
        default:
            return state;
    }
};
export default userReducer;
