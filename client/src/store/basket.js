import {createAction, createSlice} from "@reduxjs/toolkit";
import basketService from "../services/basket.service";
import history from "../utils/history";

const basketsSlice = createSlice({
    name: "baskets",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        basketsReceived: (state, action) => {
            state.entities = action.payload;
        },
        basketsRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        basketsRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            );
        },
        basketsRequestFiled: (state, action) => {
            state.error = action.payload;
        },
        productCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        productUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u._id === action.payload._id)
                ] = action.payload;
        },
    }
});

const {reducer: basketsReducer, actions} = basketsSlice;
const {
    basketsReceived,
    basketsRequestFailed,
    basketsRemoved,
    basketsRequestFiled,
    productCreated,
    productUpdateSuccessed
} =
    actions;

const removeBasketsRequested = createAction("baskets/removeBasketsRequested");
const addProductRequested = createAction("baskets/addProductRequested");
const productUpdateRequested = createAction("baskets/productUpdateRequested");

export const loadBasketsList = () => async (dispatch) => {
    try {
        const {content} = await basketService.fetchAll();
        dispatch(basketsReceived(content));
    } catch (error) {
        dispatch(basketsRequestFailed(error.message));
    }
};

export const addProductBasket = (payload) => async (dispatch) => {
    dispatch(addProductRequested());
    try {
        const {content} = await basketService.addProduct(payload);
        dispatch(productCreated(content));
    } catch (error) {
        dispatch(basketsRequestFailed(error.message));
    }

};

export const removeBaskets = (basketsId) => async (dispatch) => {
    dispatch(removeBasketsRequested());
    try {
        const {content} = await basketService.removeBasket(basketsId);
        if (!content) {
            dispatch(basketsRemoved(basketsId));
        }
    } catch (error) {
        dispatch(basketsRequestFiled(error.message));
    }
};

export const updateProductBasket = (payload) => async (dispatch) => {
    dispatch(productUpdateRequested());
    try {
        const {content} = await basketService.updateBasket(payload);
        dispatch(productUpdateSuccessed(content));
    } catch (error) {
        dispatch(basketsRequestFiled(error.message));
    }
};

export const getBaskets = () => (state) => state.baskets.entities;

export default basketsReducer;
