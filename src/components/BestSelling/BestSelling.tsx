import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getBestSellingFlowers } from "../../redux/ducks/flowers";
import Button from "../Button/Button";
import ProductCard, { ProductCardProps } from "../ProductCard/ProductCard";
import "./BestSelling.css";

const BestSelling: React.FC = () => {
    const dispatch = useDispatch();
    const flowers: ProductCardProps["product"][] = useSelector(
        (state: RootStateOrAny) => state.flowersReducer.bestSelling
    );
    useEffect(() => {
        dispatch(getBestSellingFlowers());
    }, []);
    return (
        <section>
            <div className='best-selling' id='container'>
                <div className='best-selling-header split-between'>
                    <h1>our best selling</h1>
                    <Button label='see more' variant='secondary' />
                </div>

                <div className='best-selling-products '>
                    {flowers?.map((flower, idx: number) => {
                        return <ProductCard key={idx} product={flower} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default BestSelling;
