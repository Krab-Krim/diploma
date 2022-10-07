import {createSlice} from "@reduxjs/toolkit";
import cardsService from "../services/cards.service";

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        cardsReceived: (state, action) => {
            state.entities = action.payload;
        },
        cardsRequestFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const {reducer: cardsReducer, actions} = cardsSlice;
const {cardsReceived, cardsRequestFailed} =
    actions;

export const loadCardsList = () => async (dispatch) => {
    try {
        const {content} = await cardsService.fetchAll();
        dispatch(cardsReceived(content));
    } catch (error) {
        dispatch(cardsRequestFailed(error.message));
    }
};

export const getCards = () => (state) => state.cards.entities;

export default cardsReducer;
