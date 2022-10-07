import {createAction, createSlice} from "@reduxjs/toolkit";
import popularityService from "../services/popularity.service";

const popularitySlice = createSlice({
    name: "popularity",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        popularityReceived: (state, action) => {
            state.entities = action.payload;
        },
        popularityRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        popularityRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            );
        },
        popularityRequestFiled: (state, action) => {
            state.error = action.payload;
        },
        popularityCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        popularityUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u._id === action.payload._id)
                ] = action.payload;
        },
    }
});

const {reducer: popularityReducer, actions} = popularitySlice;
const {
    popularityReceived,
    popularityRequestFailed,
    popularityRemoved,
    popularityRequestFiled,
    popularityCreated,
    popularityUpdateSuccessed
} =
    actions;

const removePopularityRequested = createAction("popularity/removePopularityRequested");
const addPopularityRequested = createAction("popularity/addPopularityRequested");
const popularityUpdateRequested = createAction("popularity/popularityUpdateRequested");

export const loadPopularityList = () => async (dispatch) => {
    try {
        const {content} = await popularityService.fetchAll();
        dispatch(popularityReceived(content));
    } catch (error) {
        dispatch(popularityRequestFailed(error.message));
    }
};

export const removePopularity = (popularityId) => async (dispatch) => {
    dispatch(removePopularityRequested());
    try {
        const {content} = await popularityService.removePopular(popularityId);
        if (!content) {
            dispatch(popularityRemoved(popularityId));
        }
    } catch (error) {
        dispatch(popularityRequestFiled(error.message));
    }
};

export const createPopularity = (payload) => async (dispatch) => {
    dispatch(addPopularityRequested());
    try {
        const {content} = await popularityService.createPopularity(payload);
        dispatch(popularityCreated(content));
    } catch (error) {
        dispatch(popularityRequestFiled(error.message));
    }
};

export const updatePopularity = (payload) => async (dispatch) => {
    dispatch(popularityUpdateRequested());
    try {
        const {content} = await popularityService.updatePopularity(payload);
        dispatch(popularityUpdateSuccessed(content));
    } catch (error) {
        dispatch(popularityRequestFiled(error.message));
    }
};

export const getPopularity = () => (state) => state.popularity.entities;
export const getPopularityById = (catalogId) => (state) => {
    if (state.popularity.entities) {
        return state.popularity.entities.find((p) => p._id === catalogId);
    }
};

export default popularityReducer;
