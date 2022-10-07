import {createSlice} from "@reduxjs/toolkit";
import catalogCardImgService from "../services/catalogCardImg.service";

const catalogCardImgSlice = createSlice({
    name: "catalogCardImg",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        catalogCardImgReceived: (state, action) => {
            state.entities = action.payload;
        },
        catalogCardImgRequestFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const {reducer: catalogCardImgReducer, actions} = catalogCardImgSlice;
const {catalogCardImgReceived, catalogCardImgRequestFailed} =
    actions;

export const loadCatalogCardImgList = () => async (dispatch) => {
    try {
        const {content} = await catalogCardImgService.fetchAll();
        dispatch(catalogCardImgReceived(content));
    } catch (error) {
        dispatch(catalogCardImgRequestFailed(error.message));
    }
};

export const getCatalogCardImg = () => (state) => state.catalogCardImg.entities;

export default catalogCardImgReducer;
