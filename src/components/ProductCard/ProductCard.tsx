import React, { useEffect } from "react";
import { FaCrown, FaCheck } from "react-icons/fa";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { addToCart, CartState } from "../../redux/ducks/cart";
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
    const dispatch = useDispatch();
    const cartItems: CartState["cartItems"] = useSelector(
        (state: RootStateOrAny) => state.cartReducer.cartItems
    );

    const isInCart = (): boolean => {
        if (cartItems.indexOf(product) > -1) return true;
        return false;
    };

    const handleAddingToCart = (product: ProductCardProps["product"]): void => {
        if (isInCart()) return;
        dispatch(addToCart(product));
    };

    useEffect(() => {
        isInCart();
    }, []);

    return (
        <div className='product-card'>
            <div className='product-card-img'>
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
