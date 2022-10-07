import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FullscreenControl, GeolocationControl, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import PageTitle from "../components/ui/pageTitle";

const Delivery = () => {
    const catalogName = "Доставка";

    return (
        <Container>
            <PageTitle catalogName={catalogName}/>
            <Row className="mt-3">
                <Col>
                    <h5 className="mb-3">
                        Наш интернет-магазин осуществляет доставку по Москве и регионам России:
                    </h5>
                    <p>Курьерская доставка по Москве — 200 руб.</p>
                    <p>Почтовая доставка по России — от 150 руб. в зависимости от адреса доставки.</p>
                </Col>
            </Row>
            <Row>
                <Col className="position-relative">
                    <YMaps>
                        <Map
                            defaultState={{
                                center: [55.751574, 37.573856],
                                zoom: 10,
                                controls: []
                            }}
                            style={{width: "100%", height: "300px"}}
                        >
                            <Placemark geometry={[55.684758, 37.738521]}/>
                            <FullscreenControl/>
                            <GeolocationControl options={{float: "left"}}/>
                            <ZoomControl options={{float: "right"}}/>
                        </Map>
                    </YMaps>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <h5 className="mb-3">Способы оплаты товара</h5>
                    <p>Оплата за товар и услугу доставки возможна следующими способами:</p>
                    <p>- онлайн на сайте в момент оформления заказа;</p>
                    <p>- наличными или картой курьеру при получении;</p>
                    <p>- в магазине предварительно до дня доставки.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Delivery;
