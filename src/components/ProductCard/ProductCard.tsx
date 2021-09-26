import React from "react";
import { FaCrown } from "react-icons/fa";
import "./ProductCard.css";

interface ProductCardProps {
    product: {
        title: string;
        price: number;
        image: string;
        bestSelling: boolean;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className='product-card'>
            <div className='product-card-img'>
                <img src={product.image} alt='flower' />
                {product.bestSelling && (
                    <span>
                        <FaCrown />
                        best selling
                    </span>
                )}
            </div>
            <div className='product-card-content split-between'>
                <div className='product-card-infos'>
                    <p>{product.title}</p>
                    <p>{product.price} DA</p>
                </div>
                <div className='product-card-add'>+</div>
            </div>
        </div>
    );
};

export default ProductCard;
