import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogHero from "../../components/BlogHero/BlogHero";
import { getBlogs } from "../../redux/ducks/blogs";
import { RootState } from "../../redux/store";

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
    const dispatch = useDispatch();
    const mainBlog = useSelector((state: RootState) => state.blogsReducer.mainBlog);

    useEffect(() => {
        dispatch(getBlogs());
    }, []);
    return (
        <section>
            <div className='blog' id='container'>
                <BlogHero blog={mainBlog} />
            </div>
        </section>
    );
};

export default Blog;
