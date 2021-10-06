import { Dispatch } from "redux";
import { getProductDetails, getProducts } from "../../firebase/db";
import type { ProductCardProps } from "../../components/ProductCard/ProductCard";
import { RootState } from "../store";

type flowers = ProductCardProps["product"][];
type flower = ProductCardProps["product"];

// actions types

const SET_FLOWERS: string = "SET_FLOWERS";
const SET_BEST_SELLING_FLOWERS: string = "SET_BEST_SELLING_FLOWERS";
const SET_SELECTED_FLOWER: string = "SET_SELECTED_FLOWER";
const SET_SEARCH: string = "SET_SEARCH";
const FILTER_BEST_SELLINGS: string = "FILTER_BEST_SELLINGS";
const FILTER_PRICE: string = "FILTER_PRICE";
const RESET_FILTER: string = "RESET_FILTER";

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

const FilterBestSellings = () => ({
    type: FILTER_BEST_SELLINGS,
});

export const FilterPrice = (min: number, max: number) => ({
    type: FILTER_PRICE,
    payload: { min, max },
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

export const applyBestSellingsFilter =
    (value: boolean) => (dispatch: Dispatch, getState: () => RootState) => {
        if (value) {
            dispatch(FilterBestSellings());
        } else {
            const { flowers } = getState().flowersReducer;
            dispatch(setFlowers(flowers));
        }
    };

export const resetFilters = () => (dispatch: Dispatch, getState: () => RootState) => {
    const { flowers } = getState().flowersReducer;
    dispatch(setFlowers(flowers));
};

//types
interface Price {
    min: number;
    max: number;
}

interface ActionType {
    type: string;
    payload?: flowers | flower | Price | string | null;
}

interface FlowersState {
    flowers: flowers;
    filteredFlowers: flowers;
    bestSelling: flowers;
    selectedFlower: flower | null;
    search: string;
}

// reducer

const initialState: FlowersState = {
    flowers: [],
    filteredFlowers: [],
    bestSelling: [],
    selectedFlower: null,
    search: "",
};

const flowersReducer = (state = initialState, { type, payload }: ActionType): FlowersState => {
    switch (type) {
        case SET_FLOWERS:
            return { ...state, flowers: payload as flowers, filteredFlowers: payload as flowers };
        case SET_BEST_SELLING_FLOWERS:
            return { ...state, bestSelling: payload as flowers };
        case SET_SELECTED_FLOWER:
            return { ...state, selectedFlower: payload as flower };
        case SET_SEARCH:
            return { ...state, search: payload as string };
        case FILTER_BEST_SELLINGS:
            return {
                ...state,
                filteredFlowers: state.filteredFlowers.filter((el) => el.bestSelling === true),
            };
        case FILTER_PRICE: {
            const { min, max } = payload as Price;
            return {
                ...state,
                filteredFlowers: state.flowers.filter((el) => el.price >= min && el.price <= max),
            };
        }

        default:
            return state;
    }
};

export default flowersReducer;
