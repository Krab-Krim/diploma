import {combineReducers, configureStore} from "@reduxjs/toolkit";
import qualitiesReducer from "./qualities";
import professionsReducer from "./professions";
import usersReducer from "./users";
import commentsReducer from "./comments";
import bannerReducer from "./banner";
import blogReducer from "./blog";
import cardsReducer from "./cards";
import catalogCardImgReducer from "./catalogCardImg";
import cardsBannerReducer from "./cardsBanner";
import popularityReducer from "./popularity";
import catalogTitleReducer from "./catalogTitle";
import basketsReducer from "./basket";
import totalPriceReducer from "./totalPrice";
import feedbackReducer from "./feedback";

const rootReducer = combineReducers({
    qualities: qualitiesReducer,
    professions: professionsReducer,
    users: usersReducer,
    comments: commentsReducer,
    banners: bannerReducer,
    blogs: blogReducer,
    cards: cardsReducer,
    cardsBanner: cardsBannerReducer,
    catalogCardImg: catalogCardImgReducer,
    popularity: popularityReducer,
    catalogTitle: catalogTitleReducer,
    baskets: basketsReducer,
    totalPrice: totalPriceReducer,
    feedback: feedbackReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
