import {createAction, createSlice} from "@reduxjs/toolkit";
import feedbackService from "../services/feedback.service";

const feedbackSlice = createSlice({
    name: "feedback",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        feedbackRequestFiled: (state, action) => {
            state.error = action.payload;
        },
        feedbackCreated: (state, action) => {
            state.entities.push(action.payload);
        }
    }
});

const {reducer: feedbackReducer, actions} = feedbackSlice;
const {
    feedbackRequestFiled,
    feedbackCreated,
} =
    actions;

const addFeedbackRequested = createAction("feedback/addFeedbackRequested");

export const createFeedback = (payload) => async (dispatch) => {
    dispatch(addFeedbackRequested());
    try {
        const {content} = await feedbackService.createFeedback(payload);
        dispatch(feedbackCreated(content));
    } catch (error) {
        dispatch(feedbackRequestFiled(error.message));
    }
};

export default feedbackReducer;
