import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getBestSellingFlowers } from "../../redux/ducks/flowers";
import { RootState } from "../../redux/store";
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import "./BestSelling.css";

const BestSelling: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const flowers = useSelector((state: RootState) => state.flowersReducer.bestSelling);

    const renderBestSellingFlowers = (): JSX.Element[] => {
        return flowers?.map((flower, idx: number) => {
            return <ProductCard key={idx} {...flower} />;
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
                    <Button
                        onClick={() => history.push("/store")}
                        label='see more'
                        variant='secondary'
                    />
                </div>

                <div className='best-selling-products '>{renderBestSellingFlowers()}</div>
            </div>
        </section>
    );
};

export default BestSelling;
