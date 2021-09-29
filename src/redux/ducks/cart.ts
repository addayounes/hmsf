import { ProductCardProps } from "../../components/ProductCard/ProductCard";

const ADD_TO_CART: string = "ADD_TO_CART";
const REMOVE_FROM_CART: string = "REMOVE_FROM_CART";

export const addToCart = (item: ProductCardProps["product"]) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (id: string) => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

// reducer

export interface CartState {
    cartItems: ProductCardProps["product"][];
}

const initialState = {
    cartItems: [],
};

const cartReducer = (
    state: CartState = initialState,
    { type, payload }: { type: string; payload: any }
) => {
    switch (type) {
        case ADD_TO_CART:
            return { ...state, cartItems: [...state.cartItems, payload] };
        case REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter((el) => el.id !== payload) };
        default:
            return state;
    }
};

export default cartReducer;
