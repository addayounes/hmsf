import React from "react";
import { FaCrown, FaCheck, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToFavorite, removeFromFavorite } from "../../redux/ducks/flowers";
import ProductCardType from "../../types/flower";
import isInCart from "../../utils/isInCart";
import { addToCart } from "../../redux/ducks/cart";
import { RootState } from "../../redux/store";
import "./ProductCard.css";

interface ProductCardProps extends ProductCardType {
    isFavorite: boolean;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cartReducer.cartItems);
    const isLogged = useSelector((state: RootState) => state.userReducer.isLogged);

    const handleAddingToCart = (product: ProductCardType): void => {
        if (isInCart(props.id, cartItems)) return;
        dispatch(addToCart(product));
    };

    const showFlowerDetailsPage = (): void => {
        history.push(`/store/${props.id}`);
    };

    const handleFavorite = (): void => {
        if (isLogged) {
            props.isFavorite
                ? dispatch(removeFromFavorite(props.id))
                : dispatch(addToFavorite(props));
        } else history.push("/login");
    };

    return (
        <div className='product-card'>
            <div onClick={showFlowerDetailsPage} className='product-card-img'>
                <img src={props.image} alt='flower' />
                {props.bestSelling && (
                    <span>
                        <FaCrown />
                        best selling
                    </span>
                )}
            </div>
            <FaHeart
                className={props.isFavorite ? "active-favorite" : ""}
                onClick={handleFavorite}
            />
            <div className='product-card-content split-between'>
                <div className='product-card-infos'>
                    <p>{props.title}</p>
                    <p>{props.price} DA</p>
                </div>
                <div
                    onClick={() => handleAddingToCart(props)}
                    className='product-card-add split-center'>
                    {isInCart(props.id, cartItems) ? <FaCheck size={14} /> : "+"}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
