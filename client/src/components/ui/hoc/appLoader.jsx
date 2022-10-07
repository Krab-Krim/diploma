import {useEffect} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {
    getIsLoggedIn,
    getUsersLoadingStatus,
    loadUsersList
} from "../../../store/users";
import {loadQualitiesList} from "../../../store/qualities";
import {loadProfessionsList} from "../../../store/professions";
import {loadBannersList} from "../../../store/banner";
import {loadBlogsList} from "../../../store/blog";
import {loadCardsList} from "../../../store/cards";
import {loadCardsBannerList} from "../../../store/cardsBanner";
import {loadCatalogCardImgList} from "../../../store/catalogCardImg";
import {loadPopularityList} from "../../../store/popularity";
import {loadCatalogTitleList} from "../../../store/catalogTitle";
import {loadBasketsList} from "../../../store/basket";
import {loadTotalPriceList} from "../../../store/totalPrice";

const AppLoader = ({children}) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersStatusLoading = useSelector(getUsersLoadingStatus());

    useEffect(() => {
        dispatch(loadQualitiesList());
        dispatch(loadProfessionsList());
        dispatch(loadBannersList());
        dispatch(loadBlogsList());
        dispatch(loadCardsList());
        dispatch(loadCardsBannerList());
        dispatch(loadCatalogCardImgList());
        dispatch(loadPopularityList());
        dispatch(loadCatalogTitleList());
        dispatch(loadBasketsList());
        dispatch(loadTotalPriceList());
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
    }, [isLoggedIn]);
    if (usersStatusLoading) return "Loading...";
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
