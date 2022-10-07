import React from "react";
import {Button} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import {useHistory} from "react-router-dom";
import LoadingSpinner from "../../common/loadingSpinner";
import {useSelector} from "react-redux";
import {getBanners} from "../../../store/banner";

const CarouselBanner = () => {
    const history = useHistory();
    const carouselBanner = useSelector(getBanners());
    const handleSaveCatalog = () => history.push("/catalog");

    window.onload = () => {
        const carouselIndicators = document.querySelectorAll(".carousel-indicators button");
        for (let i = 0; i < carouselIndicators.length; i++) {
            carouselIndicators[i].style.backgroundColor = "black";
        }
    };

    if (carouselBanner.length === 0) {
        return <LoadingSpinner/>;
    } else {
        return (
            <>
                {carouselBanner.map(banner => (
                    <Carousel
                        fade
                        controls={false}
                        interval={5000}
                        indicators={true}
                        key={banner._id}
                    >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner.first}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <Button
                                    onClick={() => handleSaveCatalog()}
                                    variant="outline-secondary"
                                    size="lg"
                                >
                                    В каталог
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner.second}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <Button
                                    onClick={() => handleSaveCatalog()}
                                    variant="outline-secondary"
                                    size="lg"
                                >
                                    Купить
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                ))}
            </>
        );
    }
};

export default CarouselBanner;
