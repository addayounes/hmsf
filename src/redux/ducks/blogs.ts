import { Dispatch } from "redux";
import { fetchBlogs } from "../../firebase/db";
import BlogCard from "../../types/blog";

const SET_BLOGS = "SET_BLOGS";
const SET_MAIN_BLOG = "SET_MAIN_BLOG";
const SET_TRENDING_BLOGS = "SET_TRENDING_BLOGS";

// actions type

type BlogActions =
    | { type: "SET_BLOGS"; payload: BlogCard[] }
    | { type: "SET_MAIN_BLOG"; payload: BlogCard }
    | { type: "SET_TRENDING_BLOGS"; payload: BlogCard[] };

// syc actions

const setBlogs = (blogs: BlogCard[]): BlogActions => ({
    type: SET_BLOGS,
    payload: blogs,
});

const setMainBlog = (blog: BlogCard): BlogActions => ({
    type: SET_MAIN_BLOG,
    payload: blog,
});

const setTrendingBlogs = (blog: BlogCard[]): BlogActions => ({
    type: SET_TRENDING_BLOGS,
    payload: blog,
});

// async actions

export const getBlogs = () => async (dispatch: Dispatch) => {
    const blogsRes = (await fetchBlogs()) as BlogCard[];
    const trendingBlogs = blogsRes.slice(0, 3);

    dispatch(setBlogs(blogsRes));
    dispatch(setMainBlog(blogsRes[0]));
    dispatch(setTrendingBlogs(trendingBlogs));
};

interface BlogsState {
    blogs: BlogCard[];
    mainBlog: BlogCard;
    trendingBlogs: BlogCard[];
}
const initialState: BlogsState = {
    blogs: [],
    mainBlog: <BlogCard>{},
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
