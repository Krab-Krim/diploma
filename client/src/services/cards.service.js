import httpService from "./http.service";

const cardsEndpoint = "cards/";

const cardsService = {
    fetchAll: async () => {
        const {data} = await httpService.get(cardsEndpoint);
        return data;
    }
};
export default cardsService;
