import React from "react";

export interface BlogCardProps {
    title: string;
    content: string;
    image: string;
    date: string;
    author: string;
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
    return <div>{}</div>;
};

export default BlogCard;
