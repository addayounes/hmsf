import React from "react";
import Button from "../Button/Button";
import ez from "../../assets/categories/cat1.jpeg";
import ProductCard from "../ProductCard/ProductCard";
import "./BestSelling.css";

interface BestSellingProps {}

const product = {
    title: " hey there this is me maria what u up to",
    price: 500,
    image: ez,
    bestSelling: true,
};

const BestSelling: React.FC<BestSellingProps> = ({}) => {
    return (
        <section>
            <div className='best-selling' id='container'>
                <div className='best-selling-header split-between'>
                    <h1>our best selling</h1>
                    <Button label='see more' variant='secondary' />
                </div>

                <div className='best-selling-products '>
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                </div>
            </div>
        </section>
    );
};

export default BestSelling;
