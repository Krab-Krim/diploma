import httpService from "./http.service";

const cardsBannerEndpoint = "cardsBanner/";

const cardsBannerService = {
    fetchAll: async () => {
        const {data} = await httpService.get(cardsBannerEndpoint);
        return data;
    }
};
export default cardsBannerService;
