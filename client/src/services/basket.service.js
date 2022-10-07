import httpService from "./http.service";

const basketEndpoint = "basket/";

const basketService = {
    fetchAll: async () => {
        const {data} = await httpService.get(basketEndpoint);
        return data;
    },
    addProduct: async (payload) => {
        const {data} = await httpService.post(basketEndpoint, payload);
        return data;
    },
    removeBasket: async (basketId) => {
        const {data} = await httpService.delete(basketEndpoint + basketId);
        return data;
    },
    updateBasket: async (payload) => {
        const {data} = await httpService.patch(basketEndpoint + payload._id, payload);
        return data;
    },
    create: async (payload) => {
        const {data} = await httpService.put(
            basketEndpoint + payload._id,
            payload
        );
        return data;
    },
};
export default basketService;
