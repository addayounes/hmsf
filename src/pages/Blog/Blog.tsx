import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Articles from "../../components/Articles/Articles";
import BlogHero from "../../components/BlogHero/BlogHero";
import { getBlogs } from "../../redux/ducks/blogs";
import { RootState } from "../../redux/store";

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
    const dispatch = useDispatch();
    const mainBlog = useSelector((state: RootState) => state.blogsReducer.mainBlog);
    const trendingBlogs = useSelector((state: RootState) => state.blogsReducer.trendingBlogs);
    const blogs = useSelector((state: RootState) => state.blogsReducer.blogs);

    useEffect(() => {
        dispatch(getBlogs());
    }, []);
    return (
        <section>
            <div className='blog' id='container'>
                <BlogHero {...mainBlog} />
                <Articles title='trending' data={trendingBlogs} />
                <Articles title='all articles' data={blogs} />
            </div>
        </section>
    );
};

export default Blog;
