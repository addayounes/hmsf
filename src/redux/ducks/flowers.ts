import { Dispatch } from "redux";
import { getProductDetails, getProducts } from "../../firebase/db";
import type { ProductCardProps } from "../../components/ProductCard/ProductCard";

type flowers = ProductCardProps["product"][];
type flower = ProductCardProps["product"];

// actions types

const SET_FLOWERS: string = "SET_FLOWERS";
const SET_BEST_SELLING_FLOWERS: string = "SET_BEST_SELLING_FLOWERS";
const SET_SELECTED_FLOWER: string = "SET_SELECTED_FLOWER";
const SET_SEARCH: string = "SET_SEARCH";

// sync actions

const setFlowers = (flowers: flowers) => ({
    type: SET_FLOWERS,
    payload: flowers,
});

const setBestSellingFlowers = (flowers: flowers) => ({
    type: SET_BEST_SELLING_FLOWERS,
    payload: flowers,
});

export const seSelectedFlower = (flower: flower | null) => ({
    type: SET_SELECTED_FLOWER,
    payload: flower,
});

export const setSearch = (search: string) => ({
    type: SET_SEARCH,
    payload: search,
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

export const getSelectedFlower = (id: string) => async (dispatch: Dispatch) => {
    const selectedFlower = (await getProductDetails(id)) as flower;
    dispatch(seSelectedFlower(selectedFlower));
};

interface ActionType {
    type: string;
    payload: flowers & flower & string & null;
}

interface FlowersState {
    flowers: flowers;
    bestSelling: flowers;
    selectedFlower: flower | null;
    search: string;
}

const initialState: FlowersState = {
    flowers: [],
    bestSelling: [],
    selectedFlower: null,
    search: "",
};

const flowersReducer = (state = initialState, { type, payload }: ActionType) => {
    switch (type) {
        case SET_FLOWERS:
            return { ...state, flowers: payload };
        case SET_BEST_SELLING_FLOWERS:
            return { ...state, bestSelling: payload };
        case SET_SELECTED_FLOWER:
            return { ...state, selectedFlower: payload };
        case SET_SEARCH:
            return { ...state, search: payload };

        default:
            return state;
    }
};

export default flowersReducer;
