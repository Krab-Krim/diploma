import React from "react";
import CarouselBanner from "../components/ui/carousel/carouselBanner";
import HeaderAdvertisingTwo from "../components/ui/header/headerAdvertisingTwo";
import PopularProducts from "../components/ui/product/popularProducts";
import HeaderCatalogCard from "../components/ui/header/headerCatalogCard";
import NewProducts from "../components/ui/product/newProduct";
import HeaderSubscription from "../components/ui/header/headerSubscription";
import HeaderBlog from "../components/ui/header/headerBlog";
import HeaderInfo from "../components/ui/header/headerInfo";
import ButtonScrollTo from "../components/common/buttonScrollTo";

const Main = () => {
    return (
        <>
            <CarouselBanner/>
            <ButtonScrollTo/>
            <HeaderAdvertisingTwo/>
            <PopularProducts/>
            <HeaderCatalogCard/>
            <NewProducts/>
            <HeaderSubscription/>
            <HeaderBlog/>
            <HeaderInfo/>
        </>
    );
};

export default Main;
