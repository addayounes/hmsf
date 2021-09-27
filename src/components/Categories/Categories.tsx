import React from "react";
import categories from "../../utils/categories"; // not importing
import Category from "./Category";
import "./Categories.css";

const Categories: React.FC = () => {
    return (
        <section className='categories-section'>
            <h1>our categories</h1>
            <div className='categories' id='container'>
                {categories.map((category, idx) => (
                    <Category key={idx} category={category} />
                ))}
            </div>
        </section>
    );
};

export default Categories;
