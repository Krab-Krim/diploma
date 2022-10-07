import httpService from "./http.service";

const catalogTitleEndpoint = "catalogTitle/";

const catalogTitleService = {
    fetchAll: async () => {
        const {data} = await httpService.get(catalogTitleEndpoint);
        return data;
    }
};
export default catalogTitleService;
