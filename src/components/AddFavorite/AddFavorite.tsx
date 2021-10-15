import React from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToFavorite, removeFromFavorite } from "../../redux/ducks/flowers";
import { RootState } from "../../redux/store";
import { ProductCardProps } from "../ProductCard/ProductCard";
import "./AddFavorite.css";

const AddFavorite: React.FC<ProductCardProps> = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLogged = useSelector((state: RootState) => state.userReducer.isLogged);

    const handleFavorite = (): void => {
        if (isLogged) {
            if (props.isFavorite) dispatch(removeFromFavorite(props.id));
            else {
                const { isFavorite, children, ...toAdd } = props;
                dispatch(addToFavorite(toAdd));
            }
        } else history.push("/login");
    };

    return (
        <>
            <FaHeart
                className={`add-favorite-btn ${props.isFavorite ? "active-favorite" : ""}`}
                onClick={handleFavorite}
            />
        </>
    );
};

export default AddFavorite;
