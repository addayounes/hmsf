import { Dispatch } from "redux";
import { getProducts } from "../../firebase/db";
import type { ProductCardProps } from "../../components/ProductCard/ProductCard";

type flowers = ProductCardProps["product"][];

// actions types

const SET_FLOWERS: string = "SET_FLOWERS";
const SET_BEST_SELLING_FLOWERS: string = "SET_BEST_SELLING_FLOWERS";

// sync actions

const setFlowers = (flowers: flowers) => ({
    type: SET_FLOWERS,
    payload: flowers,
});

const setBestSellingFlowers = (flowers: flowers) => ({
    type: SET_BEST_SELLING_FLOWERS,
    payload: flowers,
});

// thunk async actions

export const getFlowers = () => async (dispatch: Dispatch) => {
    const flowers = (await getProducts()) as flowers;
    dispatch(setFlowers(flowers));
};

export const getBestSellingFlowers = () => async (dispatch: Dispatch) => {
    const flowers = (await getProducts()) as flowers;
    dispatch(setBestSellingFlowers(flowers.slice(0, 3)));
};

interface ActionType {
    type: string;
    payload: flowers;
}

interface FlowersState {
    flowers: flowers;
    bestSelling: flowers;
}

const initialState: FlowersState = {
    flowers: [],
    bestSelling: [],
};

const flowersReducer = (state = initialState, { type, payload }: ActionType) => {
    switch (type) {
        case SET_FLOWERS:
            return { ...state, flowers: payload };
        case SET_BEST_SELLING_FLOWERS:
            return { ...state, bestSelling: payload };

        default:
            return state;
    }
};

export default flowersReducer;
