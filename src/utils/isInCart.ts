import ProductCard from "../types/flower";

const isInCart = (itemID: string | undefined, cart: ProductCard[]): boolean => {
    const cartItem = cart.find((el) => el.id === itemID);
    if (cartItem !== undefined) return true;
    return false;
};

export default isInCart;
