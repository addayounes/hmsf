import React from "react";
import categories from "../../utils/categories";
import Category from "./Category";
import "./Categories.css";

const Categories: React.FC = () => {
    return (
        <section className='categories-section'>
            <h1>our categories</h1>
            <div className='categories' id='container'>
                {categories.map((category) => (
                    <Category category={category} />
                ))}
            </div>
        </section>
    );
};

export default Categories;
