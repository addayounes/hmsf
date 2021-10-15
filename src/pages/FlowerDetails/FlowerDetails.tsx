import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Button from "../../components/Button/Button";
import Quantity from "../../components/Quantity/Quantity";
import ProductCardType from "../../types/flower";
import isInCart from "../../utils/isInCart";
import isFovorite from "../../utils/isFavorite";
import { addToCart } from "../../redux/ducks/cart";
import { getSelectedFlower, seSelectedFlower } from "../../redux/ducks/flowers";
import { RootState } from "../../redux/store";
import "./FlowerDetails.css";
import AddFavorite from "../../components/AddFavorite/AddFavorite";

const FlowerDetails: React.FC = () => {
    const dispatch = useDispatch();
    const params = useParams<{ flowerID: string }>();
    const [detailsQuantity, setDetailsQuantity] = useState(1);
    const selectedFlower = useSelector((state: RootState) => state.flowersReducer.selectedFlower);
    const cartItems = useSelector((state: RootState) => state.cartReducer.cartItems);
    const favorites = useSelector((state: RootState) => state.flowersReducer.favorites);
    const AddFavoriteProps = {
        ...(selectedFlower as ProductCardType),
        isFavorite: isFovorite(selectedFlower?.id as string, favorites),
    };

    const handleAddingToCart = (): void => {
        if (isInCart(selectedFlower?.id, cartItems)) return;
        dispatch(addToCart(selectedFlower as ProductCardType));
    };

    const setFlowerDetails = () => {
        dispatch(getSelectedFlower(params.flowerID));
    };

    const cleanSelectedFlower = (): void => {
        dispatch(seSelectedFlower(null));
    };

    useEffect(() => {
        setFlowerDetails();
        return () => cleanSelectedFlower();
    }, []);

    return (
        <section>
            <div id='container'>
                <div className='product-detials split-between'>
                    <div className='product-details__img'>
                        <img src={selectedFlower?.image} alt='flower' />
                        <AddFavorite {...AddFavoriteProps} />
                    </div>
                    <div className='product-details__infos'>
                        <div>
                            <h1>{selectedFlower?.title}</h1>
                        </div>
                        <div>
                            <p>{selectedFlower?.price} DA</p>
                        </div>
                        <div className='flower-details__quantity-wrapper'>
                            <Quantity Quantity={detailsQuantity} setQuantity={setDetailsQuantity} />
                        </div>
                        <div>
                            <Button
                                onClick={handleAddingToCart}
                                label={
                                    isInCart(selectedFlower?.id, cartItems)
                                        ? "in cart"
                                        : "Add to cart"
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlowerDetails;
