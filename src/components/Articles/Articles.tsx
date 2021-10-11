import React from "react";
import BlogCard, { BlogCardProps } from "../BlogCard/BlogCard";
import "./Articles.css";

interface ArticlesProps {
    title?: string;
    data: BlogCardProps[];
}

const Articles: React.FC<ArticlesProps> = ({ title, data }) => {
    const renderArticles = (): JSX.Element[] => {
        return data.map((article) => {
            return <BlogCard {...article} />;
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
