import httpService from "./http.service";

const bannerEndpoint = "blog/";

const BlogService = {
    fetchAll: async () => {
        const {data} = await httpService.get(bannerEndpoint);
        return data;
    }
};
export default BlogService;
