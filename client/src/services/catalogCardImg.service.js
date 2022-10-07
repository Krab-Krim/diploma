import httpService from "./http.service";

const catalogCardImgEndpoint = "catalogCardImg/";

const catalogCardImgService = {
    fetchAll: async () => {
        const {data} = await httpService.get(catalogCardImgEndpoint);
        return data;
    }
};
export default catalogCardImgService;
