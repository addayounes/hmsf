import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getFlowers } from "../../redux/ducks/flowers";
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import "./BestSelling.css";

const BestSelling: React.FC = () => {
    const dispatch = useDispatch();
    const flowers = useSelector((state: RootStateOrAny) => state.flowersReducer.flowers);
    useEffect(() => {
        dispatch(getFlowers());
    }, []);
    return (
        <section>
            <div className='best-selling' id='container'>
                <div className='best-selling-header split-between'>
                    <h1>our best selling</h1>
                    <Button label='see more' variant='secondary' />
                </div>

                <div className='best-selling-products '>
                    {flowers &&
                        flowers.map((flower: any, idx: number) => {
                            return <ProductCard key={idx} product={flower} />;
                        })}
                </div>
            </div>
        </section>
    );
};

export default BestSelling;
