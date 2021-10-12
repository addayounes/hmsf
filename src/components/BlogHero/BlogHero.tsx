import React from "react";
import toValidDate from "../../utils/toValidDate";
import BlogCardType from "../../types/blog";
import "./BlogHero.css";

const BlogHero: React.FC<BlogCardType> = (props) => {
    const validBlogDate = toValidDate(props.date);
    return (
        <section className='split-center blog-hero'>
            <div className='blog-hero-img' style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className='blog-hero-content split-center'>
                <div className='blog-hero-content--wrapper'>
                    <p>
                        {validBlogDate} - {props.author}
                    </p>
                    <h1>{props.title}</h1>
                    <p>read article</p>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
