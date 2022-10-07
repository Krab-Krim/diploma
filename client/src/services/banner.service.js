import httpService from "./http.service";

const bannerEndpoint = "banner/";

const bannerService = {
    fetchAll: async () => {
        const {data} = await httpService.get(bannerEndpoint);
        return data;
    }
};
export default bannerService;
