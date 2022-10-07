import React from "react";
import "react-multi-carousel/lib/styles.css";
import CarouselSlider from "../carousel/carouselSlider";
import {useSelector} from "react-redux";
import {getPopularity} from "../../../store/popularity";

const PopularProducts = () => {
    const popularity = useSelector(getPopularity());
    const titleCarousel = "Популярные товары";

    return (
        <>
            <CarouselSlider info={popularity} titleCarousel={titleCarousel}/>
        </>
    );
};

export default PopularProducts;
