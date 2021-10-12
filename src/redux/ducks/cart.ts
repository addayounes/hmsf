import ProductCardType from "../../types/flower";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// actions types

type CartActions =
    | { type: "ADD_TO_CART"; payload: ProductCardType }
    | { type: "REMOVE_FROM_CART"; payload: string };

// actions

export const addToCart = (item: ProductCardType): CartActions => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (id: string): CartActions => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

// reducer
interface CartState {
    cartItems: ProductCardType[];
}

const initialState: CartState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action: CartActions): CartState => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((el) => el.id !== action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
