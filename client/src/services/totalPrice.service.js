import httpService from "./http.service";

const totalPriceEndpoint = "totalPrice/";

const totalPriceService = {
    updateTotalPrice: async (payload) => {
    const {data} = await httpService.patch(
        totalPriceEndpoint + payload._id,
        payload
    );
    return data;
    },
    getTotalPrice: async () => {
        const {data} = await httpService.get(totalPriceEndpoint);
        return data;
    },
    addTotalPrice: async (payload) => {
        const {data} = await httpService.post(totalPriceEndpoint, payload);
        return data;
    },
};
export default totalPriceService;
