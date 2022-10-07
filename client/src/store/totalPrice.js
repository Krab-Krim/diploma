import {createAction, createSlice} from "@reduxjs/toolkit";
import totalPriceService from "../services/totalPrice.service";
import userService from "../services/user.service";

const totalPriceSlice = createSlice({
    name: "totalPrice",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        totalPriceReceived: (state, action) => {
            state.entities = action.payload;
        },
        totalPriceRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        totalPriceRequestFiled: (state, action) => {
            state.error = action.payload;
        },
        totalPriceCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        totalPriceUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u._id === action.payload._id)
                ] = action.payload;
        },
    }
});

const {reducer: totalPriceReducer, actions} = totalPriceSlice;
const {
    totalPriceReceived,
    totalPriceRequestFailed,
    // totalPriceRemoved,
    totalPriceRequestFiled,
    totalPriceCreated,
    totalPriceUpdateSuccessed
} =
    actions;

// const removeTotalPriceRequested = createAction("totalPrice/removeTotalPriceRequested");
const addTotalPriceRequested = createAction("totalPrice/addTotalPriceRequested");
const totalPriceUpdateRequested = createAction("totalPrice/totalPriceUpdateRequested");

export const loadTotalPriceList = () => async (dispatch) => {
    try {
        const {content} = await totalPriceService.getTotalPrice();
        dispatch(totalPriceReceived(content));
    } catch (error) {
        dispatch(totalPriceRequestFailed(error.message));
    }
};

export const addTotalPrice = (payload) => async (dispatch) => {
    dispatch(addTotalPriceRequested());
    try {
        const {content} = await totalPriceService.addTotalPrice(payload);
        dispatch(totalPriceCreated(content));
    } catch (error) {
        dispatch(totalPriceRequestFailed(error.message));
    }

};

// export const removeBaskets = (basketsId) => async (dispatch) => {
//     dispatch(removeBasketsRequested());
//     try {
//         const { content } = await totalPriceService.removeBasket(basketsId);
//         if (!content) {
//             dispatch(basketsRemoved(basketsId));
//         }
//     } catch (error) {
//         dispatch(basketsRequestFiled(error.message));
//     }
// };

// export const updateProduct = (payload) => async (dispatch) => {
//     console.log("payload--payload", payload)
//     dispatch(totalPriceUpdateRequested());
//     try {
//         const {content} = await totalPriceService.updateTotalPrice(payload);
//         console.log("content", content)
//         dispatch(totalPriceUpdateSuccessed(content));
//         history.push(`/basket/${content._id}`);
//     } catch (error) {
//         dispatch(totalPriceRequestFiled(error.message));
//     }
// };

export const updateProduct = (payload) => async (dispatch) => {
    console.log("payload", payload)
    dispatch(totalPriceUpdateRequested());
    try {
        const {content} = await totalPriceService.updateTotalPrice(payload);
        dispatch(totalPriceUpdateSuccessed(content));
        // history.push(`/users/${content._id}`);
    } catch (error) {
        dispatch(totalPriceRequestFiled(error.message));
    }
};

export const getTotalPrice = () => (state) => state.totalPrice.entities;

export default totalPriceReducer;
