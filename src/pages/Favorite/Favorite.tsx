import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import isFavorite from "../../utils/isFavorite";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Favorite.css";

const Favorite: React.FC = () => {
    const favorites = useSelector((state: RootState) => state.flowersReducer.favorites);

    const renderFavorites = (): JSX.Element[] => {
        return favorites.map((flower, idx) => {
            return (
                <ProductCard key={idx} isFavorite={isFavorite(flower.id, favorites)} {...flower} />
            );
        });
    };

    return (
        <section className='favorites'>
            <div id='container'>
                <h1>my favourites</h1>
                <div className='store-items'>{renderFavorites()}</div>
            </div>
        </section>
    );
};

export default Favorite;
