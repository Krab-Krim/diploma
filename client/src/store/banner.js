import {createSlice} from "@reduxjs/toolkit";
import bannerService from "../services/banner.service";

const bannerSlice = createSlice({
    name: "banners",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        bannersReceived: (state, action) => {
            state.entities = action.payload;
        },
        bannersRequestFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const {reducer: bannerReducer, actions} = bannerSlice;
const {bannersReceived, bannersRequestFailed} =
    actions;

export const loadBannersList = () => async (dispatch) => {
    try {
        const {content} = await bannerService.fetchAll();
        dispatch(bannersReceived(content));
    } catch (error) {
        dispatch(bannersRequestFailed(error.message));
    }
};

export const getBanners = () => (state) => state.banners.entities;

export default bannerReducer;
