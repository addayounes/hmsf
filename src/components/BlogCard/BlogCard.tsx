import React from "react";
import toValidDate from "../../utils/toValidDate";
import BlogCardProps from "../../types/blog";
import "./BlogCard.css";

const BlogCard: React.FC<BlogCardProps> = (props) => {
    const validBlogDate = toValidDate(props.date);
    return (
        <div className='blog-card'>
            <div className='card-img' style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className='card-infos'>
                <div className='split-between'>
                    <p>{validBlogDate}</p>
                    <p>{props.author}</p>
                </div>
                <div className='card-title'>{props.title}</div>
                <div className='card-cta'>
                    <p>read article</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
