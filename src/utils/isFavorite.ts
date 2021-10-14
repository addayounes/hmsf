import ProductCard from "../types/flower";

const isFovorite = (itemID: string, favorites: ProductCard[]) => {
    const favItem = favorites.find((el) => el.id === itemID);
    if (favItem !== undefined) return true;
    return false;
};

export default isFovorite;
