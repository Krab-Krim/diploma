import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import HorizontalLine from "../../common/horizontalLine";
import CatalogButtonBasket from "./catalogButtonBasket";
import CatalogButtonOrderClick from "./catalogButtonOrderClick";
import LoadingSpinner from "../../common/loadingSpinner";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import BackButton from "../../common/backButton";
import {FreeMode, Navigation, Thumbs, EffectCards} from "swiper";
import AboutTheProduct from "../../common/aboutTheProduct";
import ButtonScrollTo from "../../common/buttonScrollTo";
import {useSelector} from "react-redux";
import {getPopularityById} from "../../../store/popularity";

const CatalogCardPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const params = useParams();
    const {catalogId} = params;

    if (catalogId === undefined) {
        return (
            <LoadingSpinner/>
        );
    } else {
        const catalogCardPage = useSelector(getPopularityById(catalogId));


        if (catalogCardPage === undefined) {
            return "loading";
        } else {
            const sliderImg = () => {
                if (catalogCardPage.imgCard === undefined) {
                    return (
                        <h3 className="text-center">Данные при создании нового товара заполнены неверно</h3>
                    )
                } else {
                    return (
                        <>
                            <Row>
                                <Col>
                                    <Swiper
                                        style={{
                                            "--swiper-navigation-color": "#fff",
                                            "--swiper-pagination-color": "#fff"
                                        }}
                                        loop={true}
                                        spaceBetween={10}
                                        thumbs={{swiper: thumbsSwiper}}
                                        modules={[FreeMode, Navigation, Thumbs, EffectCards]}
                                        className="mySwiper2"
                                        effect={"cards"}
                                        grabCursor={true}
                                    >
                                        {
                                            catalogCardPage.imgCard.map(img => {
                                                return (
                                                    <SwiperSlide key={img._id}>
                                                        <Image
                                                            src={img.imgCard}
                                                            style={{width: "500px", height: "740px"}}
                                                        />
                                                    </SwiperSlide>
                                                );
                                            })
                                        }
                                    </Swiper>
                                </Col>
                                <Col>
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mt-3"
                                    >
                                        {
                                            catalogCardPage.imgCard.map(img => {
                                                return (
                                                    <SwiperSlide key={img._id}>
                                                        <Image
                                                            src={img.imgCard}
                                                            style={{width: "70px", height: "80px"}}
                                                        />
                                                    </SwiperSlide>
                                                );
                                            })
                                        }
                                    </Swiper>
                                    <h6 className="text-secondary mt-3">Код товара: {catalogId}</h6>
                                </Col>
                            </Row>
                        </>
                    )
                }
            }
            return (
                <>
                    <Container className="mt-5 p-5 shadow">
                        <BackButton/>
                        <Row>
                            <Col xs={5} className="me-5 mt-3">
                                {sliderImg()}
                            </Col>
                            <Col className="text-center">
                                <h1>
                                    {catalogCardPage.title}
                                </h1>
                                <h6 className="mt-4 text-secondary">
                                    {catalogCardPage.subtitle}
                                </h6>
                                <Row className="d-flex flex-column">
                                    <Col className="mt-1 ms-5 d-flex flex-column align-items-start">
                                        <AboutTheProduct/>
                                    </Col>
                                    <Col>
                                        <div className="mt-5">
                                            <CatalogButtonBasket data={catalogCardPage}/>
                                            <CatalogButtonOrderClick data={catalogCardPage}/>
                                            <ButtonScrollTo/>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-1">
                                <HorizontalLine/>
                                {catalogCardPage.info}
                            </Col>
                        </Row>
                    </Container>
                </>
            );
        }

    }
};

export default CatalogCardPage;
