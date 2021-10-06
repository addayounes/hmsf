import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { removeFromCart } from "../../redux/ducks/cart";
import { ProductCardProps } from "../ProductCard/ProductCard";
import Quantity from "../Quantity/Quantity";
import "./ProductItem.css";
import { useHistory } from "react-router";

const ProductItem: React.FC<ProductCardProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleRemovingFromCart = (): void => {
        dispatch(removeFromCart(product.id));
    };

    const showFlowerDetailsPage = (): void => {
        history.push(`/store/${product.id}`);
    };

    return (
        <div className='product-item split-between'>
            <div onClick={showFlowerDetailsPage} className='item--primary-infos'>
                <div className='primary-infos-img'>
                    <img src={product.image} alt='flower' />
                </div>
                <p>{product.title}</p>
            </div>
            <Quantity Quantity={quantity} setQuantity={setQuantity} />
            <div className='procuts-item--right split-between'>
                <p>{product.price * quantity} DA</p>
                <AiOutlineClose onClick={handleRemovingFromCart} />
            </div>
        </div>
    );
};

export default ProductItem;
