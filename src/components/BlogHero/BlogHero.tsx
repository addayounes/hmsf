import React from "react";
import { BlogCardProps } from "../BlogCard/BlogCard";
import "./BlogHero.css";

interface BlogHeroProps {
    blog: BlogCardProps;
}

const BlogHero: React.FC<BlogHeroProps> = ({ blog }) => {
    /**
     *
     * @param date should be a date ISO string
     * @returns date without the day (ex: Sun Oct 10 2021 => Oct 10 2021)
     */
    const toValidDate = (date: string): string => {
        return new Date(date).toDateString().split(" ").splice(1, 3).join(" ");
    };

    const validBlogDate = toValidDate(blog.date);

    return (
        <section className='split-center blog-hero'>
            <div className='blog-hero-img' style={{ backgroundImage: `url(${blog.image})` }}></div>
            <div className='blog-hero-content split-center'>
                <div className='blog-hero-content--wrapper'>
                    <p>
                        {validBlogDate} - {blog.author}
                    </p>
                    <h1>{blog.title}</h1>
                    <p>read article</p>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
