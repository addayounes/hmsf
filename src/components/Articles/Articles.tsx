import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import BlogCardType from "../../types/blog";
import "./Articles.css";

interface ArticlesProps {
    title?: string;
    data: BlogCardType[];
}

const Articles: React.FC<ArticlesProps> = ({ title, data }) => {
    const renderArticles = (): JSX.Element[] => {
        return data.map((article, idx) => {
            return <BlogCard key={idx} {...article} />;
        });
    };
    return (
        <section className='articles'>
            <h1>{title && title}</h1>
            <div className='articles-data'>{renderArticles()}</div>
        </section>
    );
};

export default Articles;
