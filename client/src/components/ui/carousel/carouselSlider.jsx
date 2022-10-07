import React from "react";
import {Container} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import PropTypes from "prop-types";
import CarouselSliderCard from "../../common/carouselSliderCard";
import HorizontalLine from "../../common/horizontalLine";
import LoadingSpinner from "../../common/loadingSpinner";

const CarouselSlider = ({info, titleCarousel}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 1500},
            items: 4
        },
        desktop: {
            breakpoint: {max: 1500, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 768},
            items: 2
        },
        mobile: {
            breakpoint: {max: 767, min: 0},
            items: 1
        }
    };

    if (info === undefined) {
        return (
            <LoadingSpinner/>
        );
    } else {
        return (
            <Container className="mt-3">
                <HorizontalLine title={titleCarousel}/>
                <Carousel
                    className="mt-3 position-static"
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={5000}
                    transitionDuration={500}
                >
                    {info.map((infoCard) => {
                        return <CarouselSliderCard infoCard={infoCard} key={infoCard._id}/>;
                    })}
                </Carousel>
            </Container>
        );
    }
};

CarouselSlider.propTypes = {
    info: PropTypes.array,
    titleCarousel: PropTypes.string
};

export default CarouselSlider;
