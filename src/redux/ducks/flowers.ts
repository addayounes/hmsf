import { Dispatch } from "redux";
import { getProductDetails, getProducts } from "../../firebase/db";
import ProductCardType from "../../types/flower";
import { RootState } from "../store";

type flower = ProductCardType;

// actions types

const SET_FLOWERS = "SET_FLOWERS";
const SET_BEST_SELLING_FLOWERS = "SET_BEST_SELLING_FLOWERS";
const SET_SELECTED_FLOWER = "SET_SELECTED_FLOWER";
const SET_SEARCH = "SET_SEARCH";
const FILTER_BEST_SELLINGS = "FILTER_BEST_SELLINGS";
const FILTER_PRICE = "FILTER_PRICE";

// actions types

type FlowersActions =
    | { type: "SET_FLOWERS"; payload: flower[] }
    | { type: "SET_BEST_SELLING_FLOWERS"; payload: flower[] }
    | { type: "SET_SELECTED_FLOWER"; payload: flower | null }
    | { type: "SET_SEARCH"; payload: string }
    | { type: "FILTER_BEST_SELLINGS" }
    | { type: "FILTER_PRICE"; payload: { min: number; max: number } };

// sync actions

const setFlowers = (flowers: flower[]): FlowersActions => ({
    type: SET_FLOWERS,
    payload: flowers,
});

const setBestSellingFlowers = (flowers: flower[]): FlowersActions => ({
    type: SET_BEST_SELLING_FLOWERS,
    payload: flowers,
});

export const seSelectedFlower = (flower: flower | null): FlowersActions => ({
    type: SET_SELECTED_FLOWER,
    payload: flower,
});

export const setSearch = (search: string): FlowersActions => ({
    type: SET_SEARCH,
    payload: search,
});

const FilterBestSellings = (): FlowersActions => ({
    type: FILTER_BEST_SELLINGS,
});

export const FilterPrice = (min: number, max: number): FlowersActions => ({
    type: FILTER_PRICE,
    payload: { min, max },
});

// thunk async actions

export const getFlowers = () => async (dispatch: Dispatch) => {
    const flowers = (await getProducts()) as flower[];
    dispatch(setFlowers(flowers));
};

export const getBestSellingFlowers = () => async (dispatch: Dispatch) => {
    const flowers = (await getProducts()) as flower[];
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

interface FlowersState {
    flowers: flower[];
    filteredFlowers: flower[];
    bestSelling: flower[];
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

const flowersReducer = (state = initialState, action: FlowersActions): FlowersState => {
    switch (action.type) {
        case SET_FLOWERS:
            return { ...state, flowers: action.payload, filteredFlowers: action.payload };
        case SET_BEST_SELLING_FLOWERS:
            return { ...state, bestSelling: action.payload };
        case SET_SELECTED_FLOWER:
            return { ...state, selectedFlower: action.payload };
        case SET_SEARCH:
            return { ...state, search: action.payload };
        case FILTER_BEST_SELLINGS:
            return {
                ...state,
                filteredFlowers: state.filteredFlowers.filter((el) => el.bestSelling === true),
            };
        case FILTER_PRICE: {
            const { min, max } = action.payload;
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
