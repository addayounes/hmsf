import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { removeFromCart } from "../../redux/ducks/cart";
import { ProductCardProps } from "../ProductCard/ProductCard";
import Quantity from "../Quantity/Quantity";
import "./ProductItem.css";

const ProductItem: React.FC<ProductCardProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleRemovingFromCart = (): void => {
        dispatch(removeFromCart(product.id));
    };

    return (
        <div className='product-item split-between'>
            <div className='item--primary-infos'>
                <img src={product.image} alt='flower' />
                <p>{product.title}</p>
            </div>
            <Quantity Quantity={quantity} setQuantity={setQuantity} />
            <p>{product.price * quantity} DA</p>
            <AiOutlineClose onClick={handleRemovingFromCart} />
        </div>
    );
};

export default ProductItem;
