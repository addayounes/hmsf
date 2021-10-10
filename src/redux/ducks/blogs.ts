import { Dispatch } from "redux";
import { fetchBlogs } from "../../firebase/db";
import { BlogCardProps } from "../../components/BlogCard/BlogCard";

const SET_BLOGS = "SET_BLOGS";
const SET_MAIN_BLOG = "SET_MAIN_BLOG";
const SET_TRENDING_BLOGS = "SET_TRENDING_BLOGS";

// actions type

type BlogActions =
    | { type: "SET_BLOGS"; payload: BlogCardProps[] }
    | { type: "SET_MAIN_BLOG"; payload: BlogCardProps }
    | { type: "SET_TRENDING_BLOGS"; payload: BlogCardProps[] };

// syc actions

const setBlogs = (blogs: BlogCardProps[]): BlogActions => ({
    type: SET_BLOGS,
    payload: blogs,
});

const setMainBlog = (blog: BlogCardProps): BlogActions => ({
    type: SET_MAIN_BLOG,
    payload: blog,
});

const setTrendingBlogs = (blog: BlogCardProps[]): BlogActions => ({
    type: SET_TRENDING_BLOGS,
    payload: blog,
});

// async actions

export const getBlogs = () => async (dispatch: Dispatch) => {
    const blogsRes = (await fetchBlogs()) as BlogCardProps[];
    const trendingBlogs = blogsRes.slice(0, 3);

    dispatch(setBlogs(blogsRes));
    dispatch(setMainBlog(blogsRes[0]));
    dispatch(setTrendingBlogs(trendingBlogs));
};

interface BlogsState {
    blogs: BlogCardProps[];
    mainBlog: BlogCardProps;
    trendingBlogs: BlogCardProps[];
}
const initialState: BlogsState = {
    blogs: [],
    mainBlog: <BlogCardProps>{},
    trendingBlogs: [],
};

const blogsReducer = (state = initialState, action: BlogActions): BlogsState => {
    switch (action.type) {
        case SET_BLOGS:
            return { ...state, blogs: action.payload };
        case SET_MAIN_BLOG:
            return { ...state, mainBlog: action.payload };
        case SET_TRENDING_BLOGS:
            return { ...state, trendingBlogs: action.payload };
        default:
            return state;
    }
};

export default blogsReducer;
