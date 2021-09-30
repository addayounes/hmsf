import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBestSellingFlowers } from "../../redux/ducks/flowers";
import { RootState } from "../../redux/store";
import Button from "../Button/Button";
import ProductCard, { ProductCardProps } from "../ProductCard/ProductCard";
import "./BestSelling.css";

type flowers = ProductCardProps["product"][];

const BestSelling: React.FC = () => {
    const dispatch = useDispatch();
    const flowers: flowers = useSelector((state: RootState) => state.flowersReducer.bestSelling);

    const renderBestSellingFlowers = (): JSX.Element[] => {
        return flowers?.map((flower, idx: number) => {
            return <ProductCard key={idx} product={flower} />;
        });
    };

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

                <div className='best-selling-products '>{renderBestSellingFlowers()}</div>
            </div>
        </section>
    );
};

export default BestSelling;
