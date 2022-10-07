const Banner = require("../models/Banner");
const Blog = require("../models/Blog");
const Cards = require("../models/Cards");
const CardsBanner = require("../models/CardsBanner");
const CatalogCardImg = require("../models/CatalogCardImg");
const Popularity = require("../models/Popularity");
const Profession = require("../models/Profession");
const Quality = require("../models/Quality");
const Basket = require("../models/Basket");
const TotalPrice = require("../models/TotalPrice");
const Feedback = require("../models/Feedback");
const CatalogTitleImg = require("../models/CatalogTitleImg");
const CatalogTitle = require("../models/CatalogTitle");

const professionMock = require("../mock/professions.json");
const qualitiesMock = require("../mock/qualities.json");
const bannerMock = require("../mock/banner.json");
const blogMock = require("../mock/blog.json");
const cardsMock = require("../mock/cards.json");
const cardsBannerMock = require("../mock/cardsBanner.json");
const catalogCardImgMock = require("../mock/catalogCardImg.json");
const popularityMock = require("../mock/popularity.json");
const catalogTitleMock = require("../mock/catalogTitle.json");
const basketMock = require("../mock/basket.json");
const totalPriceMock = require("../mock/totalPrice.json");
const feedbackMock = require("../mock/feedback.json");
const catalogTitleImgMock = require("../mock/catalogTitleImg.json");

module.exports = async () => {
    const totalPrice = await TotalPrice.find();
    if (totalPrice.length !== totalPriceMock.length) {
        await createInitialEntity(TotalPrice, totalPriceMock)
    }

    const feedback = await Feedback.find();
    if (feedback.length !== feedbackMock.length) {
        await createInitialEntity(Feedback, feedbackMock)
    }

    const baskets = await Basket.find();
    if (baskets.length !== basketMock.length) {
        await createInitialEntity(Basket, basketMock)
    }

    const professions = await Profession.find()
    if (professions.length !== professionMock.length) {
        await createInitialEntity(Profession, professionMock)
    }

    const catalogTitle = await CatalogTitle.find()
    if (catalogTitle.length !== catalogTitleMock.length) {
        await createInitialEntity(CatalogTitle, catalogTitleMock)
    }

    const qualities = await Quality.find()
    if (qualities.length !== qualitiesMock.length) {
        await createInitialEntity(Quality, qualitiesMock)
    }

    const banner = await Banner.find()
    if (banner.length !== bannerMock.length) {
        await createInitialEntity(Banner, bannerMock)
    }

    const blog = await Blog.find()
    if (blog.length !== blogMock.length) {
        await createInitialEntity(Blog, blogMock)
    }

    const card = await Cards.find()
    if (card.length !== cardsMock.length) {
        await createInitialEntity(Cards, cardsMock)
    }

    const cardsBanner = await CardsBanner.find()
    if (cardsBanner.length !== cardsBannerMock.length) {
        await createInitialEntity(CardsBanner, cardsBannerMock)
    }

    const catalogCardImg = await CatalogCardImg.find()
    if (catalogCardImg.length !== catalogCardImgMock.length) {
        await createInitialEntity(CatalogCardImg, catalogCardImgMock)
    }

    const popularity = await Popularity.find()
    if (popularity.length !== popularityMock.length) {
        await createInitialEntity(Popularity, popularityMock)
    }

    const catalogTitleIMG = await CatalogTitleImg.find()
    if (catalogTitleIMG.length !== catalogTitleImgMock.length) {
        await createInitialEntity(CatalogTitleImg, catalogTitleImgMock)
    }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            }
            catch (e) {
                return e;
            }
        })
    );
};