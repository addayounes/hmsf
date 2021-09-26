import { Dispatch } from "react";
import { getProducts } from "../../firebase/db";
import type { ProductCardProps } from "../../components/ProductCard/ProductCard";
import { RootStateOrAny } from "react-redux";

// actions types

const SET_FLOWERS: string = "SET_FLOWERS";

// sync actions

const setFlowers = (flowers: ProductCardProps[]) => ({
    type: SET_FLOWERS,
    payload: flowers,
});

// thunk async actions

export const getFlowers = () => async (dispatch: Dispatch<{}>) => {
    const flowers = (await getProducts()) as ProductCardProps[];
    dispatch(setFlowers(flowers));
};

const initialState = {
    flowers: null,
};

const flowersReducer = (
    state: RootStateOrAny = initialState,
    { type, payload }: { type: string; payload: any }
) => {
    switch (type) {
        case SET_FLOWERS:
            return { ...state, flowers: payload };
        default:
            return state;
    }
};

export default flowersReducer;
