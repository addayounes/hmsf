import React from "react";
import { FaCrown, FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "../../redux/ducks/cart";
import { RootState } from "../../redux/store";
import ProductCardType from "../../types/flower";
import isInCart from "../../utils/isInCart";
import AddFavorite from "../AddFavorite/AddFavorite";
import "./ProductCard.css";

export interface ProductCardProps extends ProductCardType {
    isFavorite: boolean;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cartReducer.cartItems);

    const handleAddingToCart = (product: ProductCardType): void => {
        if (isInCart(props.id, cartItems)) return;
        dispatch(addToCart(product));
    };

    const showFlowerDetailsPage = (): void => {
        history.push(`/store/${props.id}`);
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
            <AddFavorite {...props} />
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
