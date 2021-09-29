import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import { CartState } from "../../redux/ducks/cart";
import "./Cart.css";

const Cart: React.FC = () => {
    const cartItems: CartState["cartItems"] = useSelector(
        (state: RootStateOrAny) => state.cartReducer.cartItems
    );

    const renderCartItems = (): JSX.Element[] => {
        return cartItems?.map((item) => <ProductItem product={item} />);
    };

    return (
        <section>
            <div id='container' className='cart'>
                <h1>My Cart</h1>
                <div className='split-between'>
                    <div className='cart-items'>{renderCartItems()}</div>
                    <div className='cart-payment--infos'></div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
