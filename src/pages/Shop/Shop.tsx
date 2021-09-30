import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFlowers } from "../../firebase/db";
import { getFlowers } from "../../redux/ducks/flowers";
import { RootState } from "../../redux/store";
import Filter from "../../components/Filter/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";
import Sort from "../../components/Sort/Sort";
import "./Shop.css";

const Shop: React.FC = () => {
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const flowers = useSelector((state: RootState) => state.flowersReducer.flowers);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFlowers());

        // addFlowers({
        //     title: "marmalade skies bouquet",
        //     price: 2500,
        //     bestSelling: false,
        //     image: "https://i.ibb.co/R4ntkdm/cat2.jpg",
        // });
    }, []);
    return (
        <section className='shop'>
            <h1>our store</h1>
            <div className='shop-header'>
                <div id='container' className='split-between'>
                    <Filter />
                    <div>{flowers?.length} Result</div>
                    <Sort forceUpdate={forceUpdate} />
                </div>
            </div>
            <div className='store-items' id='container'>
                {flowers?.map((flower, idx: number) => {
                    return <ProductCard key={idx} product={flower} />;
                })}
            </div>
        </section>
    );
};

export default Shop;
