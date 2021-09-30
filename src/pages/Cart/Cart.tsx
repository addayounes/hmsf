import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { ProductCardProps } from "../../components/ProductCard/ProductCard";
import ProductItem from "../../components/ProductItem/ProductItem";
import { RootState } from "../../redux/store";
import "./Cart.css";

type flowers = ProductCardProps["product"][];

const Cart: React.FC = () => {
    const shippingFee = 600;
    const cartItems: flowers = useSelector((state: RootState) => state.cartReducer.cartItems);

    const renderCartItems = (): JSX.Element[] => {
        return cartItems?.map((item, idx) => <ProductItem key={idx} product={item} />);
    };
    const calcSubTotal = useCallback((): number => {
        let subtotal: number = 0;
        cartItems.forEach((el) => (subtotal += el.price));
        return subtotal;
    }, [cartItems]);

    const calcTotal = useCallback((): number => {
        return calcSubTotal() + shippingFee;
    }, [cartItems]);

    return (
        <section>
            <div id='container' className='cart'>
                <h1>My Cart</h1>
                <div className='split-between'>
                    <div className='cart-items'>{renderCartItems()}</div>
                    <div className='cart-payment--infos'>
                        <div className='subtotal split-between'>
                            <p>Subtotal</p>
                            <p>{calcSubTotal()} DA</p>
                        </div>
                        <div className='shipping split-between'>
                            <p>Shipping</p>
                            <p>{shippingFee} DA</p>
                        </div>
                        <div className='total split-between'>
                            <p>Total</p>
                            <p>{calcTotal()} DA</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
