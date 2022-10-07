import {createSlice} from "@reduxjs/toolkit";
import catalogTitleService from "../services/catalogTitle.service";

const catalogTitleSlice = createSlice({
    name: "catalogTitle",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        catalogTitleReceived: (state, action) => {
            state.entities = action.payload;
        },
        catalogTitleRequestFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const {reducer: catalogTitleReducer, actions} = catalogTitleSlice;
const {catalogTitleReceived, catalogTitleRequestFailed} =
    actions;

export const loadCatalogTitleList = () => async (dispatch) => {
    try {
        const {content} = await catalogTitleService.fetchAll();
        dispatch(catalogTitleReceived(content));
    } catch (error) {
        dispatch(catalogTitleRequestFailed(error.message));
    }
};

export const getCatalogTitle = () => (state) => state.catalogTitle.entities;

export default catalogTitleReducer;
