import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { ProductCardProps } from "../ProductCard/ProductCard";
import { removeFromCart } from "../../redux/ducks/cart";
import "./ProductItem.css";

const ProductItem: React.FC<ProductCardProps> = ({ product }) => {
    const [Quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuantity(parseInt(e.target.value));
    };

    const handleRemovingFromCart = (): void => {
        dispatch(removeFromCart(product.id));
    };

    const incrementQuantity = (): void => {
        setQuantity((v) => v + 1);
    };

    const decrementQuantity = (): void => {
        setQuantity((v) => (v === 1 ? v : v - 1));
    };

    return (
        <div className='product-item split-between'>
            <div className='item--primary-infos'>
                <img src={product.image} alt='flower' />
                <p>{product.title}</p>
            </div>
            <div className='product-quantity split-between'>
                <div onClick={decrementQuantity} className='split-center'>
                    -
                </div>
                <input type='text' value={Quantity} onChange={(e) => handleChange(e)} />
                <div onClick={incrementQuantity} className='split-center'>
                    +
                </div>
            </div>
            <p>{product.price * Quantity} DA</p>
            <AiOutlineClose onClick={handleRemovingFromCart} />
        </div>
    );
};

export default ProductItem;
