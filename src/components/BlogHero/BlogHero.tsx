import React from "react";
import { BlogCardProps } from "../BlogCard/BlogCard";
import toValidDate from "../../utils/toValidDate";
import "./BlogHero.css";

interface BlogHeroProps {
    blog: BlogCardProps;
}

const BlogHero: React.FC<BlogHeroProps> = ({ blog }) => {
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
