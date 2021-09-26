import React from "react";

interface CategoryProps {
    category: {
        title: string;
        image: string;
    };
}

const Category: React.FC<CategoryProps> = ({ category }) => {
    return (
        <div className='category'>
            <div className='category-img'>
                <img src={category.image} alt='flowers' />
            </div>
            <div className='category-title'>{category.title}</div>
        </div>
    );
};

export default Category;
