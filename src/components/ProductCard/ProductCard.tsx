import React, { useEffect } from "react";
import { FaCrown, FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "../../redux/ducks/cart";
import { RootState } from "../../redux/store";
import "./ProductCard.css";

export interface ProductCardProps {
    product: {
        id: string;
        title: string;
        price: number;
        image: string;
        bestSelling: boolean;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cartReducer.cartItems);

    const isInCart = (): boolean => {
        const cartItem = cartItems.find((el) => el.id === product.id);
        if (cartItem !== undefined) return true;
        return false;
    };

    const handleAddingToCart = (product: ProductCardProps["product"]): void => {
        if (isInCart()) return;
        dispatch(addToCart(product));
    };

    const showFlowerDetailsPage = (): void => {
        history.push(`/store/${product.id}`);
    };

    useEffect(() => {
        isInCart();
    }, []);

    return (
        <div className='product-card'>
            <div onClick={showFlowerDetailsPage} className='product-card-img'>
                <img src={product.image} alt='flower' />
                {product.bestSelling && (
                    <span>
                        <FaCrown />
                        best selling
                    </span>
                )}
            </div>
            <div className='product-card-content split-between'>
                <div className='product-card-infos'>
                    <p>{product.title}</p>
                    <p>{product.price} DA</p>
                </div>
                <div
                    onClick={() => handleAddingToCart(product)}
                    className='product-card-add split-center'>
                    {isInCart() ? <FaCheck size={14} /> : "+"}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
