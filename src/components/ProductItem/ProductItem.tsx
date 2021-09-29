import React, { useState } from "react";
import { ProductCardProps } from "../ProductCard/ProductCard";
import { AiOutlineClose } from "react-icons/ai";
import "./ProductItem.css";
import { removeFromCart } from "../../redux/ducks/cart";
import { useDispatch } from "react-redux";

const ProductItem: React.FC<ProductCardProps> = ({ product }) => {
    const [Quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuantity(parseInt(e.target.value));
    };

    const handleRemovingFromCart = (): void => {
        dispatch(removeFromCart(product.id));
    };

    return (
        <div className='product-item split-between'>
            <img src={product.image} alt='flower' />
            <p>{product.title}</p>
            <div className='product-quantity split-between'>
                <div
                    onClick={() => setQuantity((v) => (v === 1 ? v : v - 1))}
                    className='split-center'>
                    -
                </div>
                <input type='text' value={Quantity} onChange={(e) => handleChange(e)} />
                <div onClick={() => setQuantity((v) => v + 1)} className='split-center'>
                    +
                </div>
            </div>
            <p>{product.price * Quantity} DA</p>
            <AiOutlineClose onClick={handleRemovingFromCart} />
        </div>
    );
};

export default ProductItem;
