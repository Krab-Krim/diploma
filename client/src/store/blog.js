import {createSlice} from "@reduxjs/toolkit";
import blogService from "../services/blog.service";

const blogsSlice = createSlice({
    name: "blogs",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        blogsReceived: (state, action) => {
            state.entities = action.payload;
        },
        blogsRequestFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const {reducer: blogReducer, actions} = blogsSlice;
const {blogsReceived, blogsRequestFailed} =
    actions;

export const loadBlogsList = () => async (dispatch) => {
    try {
        const {content} = await blogService.fetchAll();
        dispatch(blogsReceived(content));
    } catch (error) {
        dispatch(blogsRequestFailed(error.message));
    }
};

export const getBlogs = () => (state) => state.blogs.entities;
export const getBlogsById = (blogsId) => (state) => {
    if (state.blogs.entities) {
        return state.blogs.entities.find((p) => p._id === blogsId);
    }
};

export default blogReducer;
