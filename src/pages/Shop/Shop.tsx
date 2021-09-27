import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";
import Sort from "../../components/Sort/Sort";
import { addFlowers } from "../../firebase/db";
import { getFlowers } from "../../redux/ducks/flowers";
import "./Shop.css";

const Shop: React.FC = () => {
    const dispatch = useDispatch();
    const flowers = useSelector((state: RootStateOrAny) => state.flowersReducer.flowers);
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
                    <div>{flowers && flowers.length} Result</div>
                    <Sort />
                </div>
            </div>
            <div className='store-items' id='container'>
                {flowers &&
                    flowers.map((flower: any, idx: number) => {
                        return <ProductCard key={idx} product={flower} />;
                    })}
            </div>
        </section>
    );
};

export default Shop;