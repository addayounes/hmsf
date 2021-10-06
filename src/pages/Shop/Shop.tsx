import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFlowers } from "../../firebase/db";
import { getFlowers } from "../../redux/ducks/flowers";
import { RootState } from "../../redux/store";
import { CSSTransition } from "react-transition-group";
import Filter from "../../components/Filter/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";
import Sort from "../../components/Sort/Sort";
import FilterPanel from "../../components/Filter/FilterPanel";
import "./Shop.css";

const Shop: React.FC = () => {
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const [showFilterPanel, setShowFilterPanel] = useState(false);
    const flowers = useSelector((state: RootState) => state.flowersReducer.filteredFlowers);
    const search = useSelector((state: RootState) => state.flowersReducer.search);
    const dispatch = useDispatch();

    const renderProducts = (): JSX.Element[] => {
        return flowers
            ?.filter((el) => {
                if (search === "") return el;
                else if (el.title.toLowerCase().includes(search.toLowerCase())) return el;
            })
            .map((flower, idx: number) => {
                return <ProductCard key={idx} product={flower} />;
            });
    };

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
                    <Filter setShowFilterPanel={setShowFilterPanel} />
                    <div>{flowers?.length} Result</div>
                    <Sort forceUpdate={forceUpdate} />
                </div>
            </div>
            <div id='container'>
                <CSSTransition in={showFilterPanel} timeout={350} classNames='filter' unmountOnExit>
                    <FilterPanel />
                </CSSTransition>
            </div>
            <div className='store-items' id='container'>
                {renderProducts()}
            </div>
        </section>
    );
};

export default Shop;
