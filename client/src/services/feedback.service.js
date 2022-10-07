import httpService from "./http.service";

const feedbackEndpoint = "feedback/";

const feedbackService = {
    createFeedback: async (payload) => {
        const {data} = await httpService.post(feedbackEndpoint, payload);
        return data;
    },
};
export default feedbackService;
