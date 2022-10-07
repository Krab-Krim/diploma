import httpService from "./http.service";

const popularityEndpoint = "popularity/";

const popularityService = {
    fetchAll: async () => {
        const {data} = await httpService.get(popularityEndpoint);
        return data;
    },
    removePopular: async (popularityId) => {
        const {data} = await httpService.delete(popularityEndpoint + popularityId);
        return data;
    },
    createPopularity: async (payload) => {
        const {data} = await httpService.post(popularityEndpoint, payload);
        return data;
    },
    updatePopularity: async (payload) => {
        const {data} = await httpService.patch(
            popularityEndpoint + payload._id,
            payload);
        return data;
    }
};
export default popularityService;
