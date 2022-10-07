import {createSlice} from "@reduxjs/toolkit";
import cardsBannerService from "../services/cardsBanner.service";

const cardsBannerSlice = createSlice({
    name: "cardsBanner",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        cardsBannerReceived: (state, action) => {
            state.entities = action.payload;
        },
        cardsBannerRequestFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const {reducer: cardsBannerReducer, actions} = cardsBannerSlice;
const {cardsBannerReceived, cardsBannerRequestFailed} =
    actions;

export const loadCardsBannerList = () => async (dispatch) => {
    try {
        const {content} = await cardsBannerService.fetchAll();
        dispatch(cardsBannerReceived(content));
    } catch (error) {
        dispatch(cardsBannerRequestFailed(error.message));
    }
};

export const getCardsBanner = () => (state) => state.cardsBanner.entities;

export default cardsBannerReducer;
