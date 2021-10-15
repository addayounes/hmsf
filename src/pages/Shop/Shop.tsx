import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { addFlowers } from "../../firebase/db";
import { getFlowers } from "../../redux/ducks/flowers";
import { RootState } from "../../redux/store";
import isFovorite from "../../utils/isFavorite";
import Filter from "../../components/Filter/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";
import Sort from "../../components/Sort/Sort";
import FilterPanel from "../../components/Filter/FilterPanel";
import "./Shop.css";

const Shop: React.FC = () => {
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const [showFilterPanel, setShowFilterPanel] = useState(false);
    const flowers = useSelector((state: RootState) => state.flowersReducer.filteredFlowers);
    const favorites = useSelector((state: RootState) => state.flowersReducer.favorites);
    const search = useSelector((state: RootState) => state.flowersReducer.search);
    const dispatch = useDispatch();

    const renderProducts = (): JSX.Element[] => {
        return flowers
            ?.filter((el) => {
                if (search === "") return el;
                else if (el.title.toLowerCase().includes(search.toLowerCase())) return el;
            })
            .map((flower, idx: number) => {
                return (
                    <ProductCard
                        key={idx}
                        isFavorite={isFovorite(flower.id, favorites)}
                        {...flower}
                    />
                );
            });
    };

    useEffect(() => {
        dispatch(getFlowers());
        [1, 2, 1, 1, 1, 1].forEach((el) => {
            // addFlowers({
            //     title: "The Big Bloom—How Flowering Plants Changed the World",
            //     content: "content",
            //     image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg",
            //     date: "2021-10-10T18:25:33.144Z",
            //     author: "maria safia ferdous",
            // });
        });
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
