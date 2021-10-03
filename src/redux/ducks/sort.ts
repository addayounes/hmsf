import { ProductCardProps } from "../../components/ProductCard/ProductCard";

type flowers = ProductCardProps["product"][];

interface SortState {
    flowers: flowers;
}

const SORT_BY_NAME: string = "SORT_BY_NAME";
const SORT_BY_PRICE_ASC: string = "SORT_BY_PRICE_ASC";
const SORT_BY_PRICE_DESC: string = "SORT_BY_PRICE_DESC";

export const sortByName = (flowers: flowers) => ({
    type: SORT_BY_NAME,
    payload: flowers,
});

export const sortByPriceAsc = (flowers: flowers) => ({
    type: SORT_BY_PRICE_ASC,
    payload: flowers,
});

export const sortByPriceDesc = (flowers: flowers) => ({
    type: SORT_BY_PRICE_DESC,
    payload: flowers,
});

const sortReducer = (
    state: SortState = { flowers: [] },
    action: { type: string; payload: flowers }
) => {
    switch (action.type) {
        case SORT_BY_NAME:
            return {
                flowers: action.payload.sort((a, b) => a.title.localeCompare(b.title)),
            };
        case SORT_BY_PRICE_ASC:
            return {
                flowers: action.payload.sort((a, b) => (a.price > b.price ? 1 : -1)),
            };
        case SORT_BY_PRICE_DESC:
            return {
                flowers: action.payload.sort((a, b) => (a.price < b.price ? 1 : -1)),
            };
        default:
            return state;
    }
};

export default sortReducer;
