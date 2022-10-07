import React from "react";
import {Container, Image} from "react-bootstrap";
import HorizontalLine from "../../common/horizontalLine";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import swipeHeaderInfo1 from "../../../statics/HeaderInfo/1.jpg";
import swipeHeaderInfo2 from "../../../statics/HeaderInfo/2.jpg";
import swipeHeaderInfo3 from "../../../statics/HeaderInfo/3.jpg";
import swipeHeaderInfo4 from "../../../statics/HeaderInfo/4.jpg";
import swipeHeaderInfo5 from "../../../statics/HeaderInfo/5.jpg";
import swipeHeaderInfo6 from "../../../statics/HeaderInfo/6.jpg";
import swipeHeaderInfo7 from "../../../statics/HeaderInfo/7.jpg";
import swipeHeaderInfo8 from "../../../statics/HeaderInfo/8.jpg";
import swipeHeaderInfo9 from "../../../statics/HeaderInfo/9.jpg";
import Carousel from "react-multi-carousel";

const HeaderInfo = () => {
    const infoHeaderTitle = "Покупки в Pet City";
    const imgSwiper = [
        swipeHeaderInfo1,
        swipeHeaderInfo2,
        swipeHeaderInfo3,
        swipeHeaderInfo4,
        swipeHeaderInfo5,
        swipeHeaderInfo6,
        swipeHeaderInfo7,
        swipeHeaderInfo8,
        swipeHeaderInfo9
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 1500},
            items: 3
        },
        desktop: {
            breakpoint: {max: 1500, min: 1024},
            items: 2
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    const imgStyle = {
        width: "360px",
        height: "300px"
    };

    return (
        <Container>
            <HorizontalLine title={infoHeaderTitle}/>
            <div className="mt-3 text-center">
                <h6>
                    Добро пожаловать в интернет-магазин замечательных товаров!
                </h6>
                <h6>
                    Мы с радостью принимаем и обслуживаем заказы 7 дней в неделю с 10 до 18 по московскому времени.
                    Доставка возможна как по Москве, так и в регионы.
                </h6>
                <h6>
                    Сделайте заказ через сайт и мы Вам перезвоним для согласования времени доставки заказа.
                </h6>
            </div>
            <Carousel
                className="mt-3 position-static"
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={5000}
                transitionDuration={500}
            >
                {
                    imgSwiper.map((swipeHeaderInfo, index) => {
                        return (
                            <div
                                className="d-flex justify-content-center mt-3"
                                key={index}
                            >
                                <Image
                                    src={swipeHeaderInfo}
                                    style={imgStyle}
                                />
                            </div>
                        );
                    })
                }
            </Carousel>
        </Container>
    );
};

export default HeaderInfo;
