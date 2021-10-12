import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { removeFromCart } from "../../redux/ducks/cart";
import ProductCardType from "../../types/flower";
import Quantity from "../Quantity/Quantity";
import { useHistory } from "react-router";
import "./ProductItem.css";

const ProductItem: React.FC<ProductCardType> = (props) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleRemovingFromCart = (): void => {
        dispatch(removeFromCart(props.id));
    };

    const showFlowerDetailsPage = (): void => {
        history.push(`/store/${props.id}`);
    };

    return (
        <div className='product-item split-between'>
            <div onClick={showFlowerDetailsPage} className='item--primary-infos'>
                <div className='primary-infos-img'>
                    <img src={props.image} alt='flower' />
                </div>
                <p>{props.title}</p>
            </div>
            <Quantity Quantity={quantity} setQuantity={setQuantity} />
            <div className='procuts-item--right split-between'>
                <p>{props.price * quantity} DA</p>
                <AiOutlineClose onClick={handleRemovingFromCart} />
            </div>
        </div>
    );
};

export default ProductItem;
