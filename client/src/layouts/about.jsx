import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import imgAbout from "../statics/about/1.jpg";
import HorizontalLine from "../components/common/horizontalLine";
import Alert from "react-bootstrap/Alert";
import PageTitle from "../components/ui/pageTitle";
import ButtonScrollTo from "../components/common/buttonScrollTo";

const About = () => {
    const catalogName = "«Pet Town» — крупнейшая розничная сеть зоомагазинов в России";
    return (
        <>
            <Container>
                <PageTitle catalogName={catalogName}/>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Image src={imgAbout} className="width-media"/>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-3">
                        <h6>
                            Более 25 лет мы заботимся о полноценной жизни питомцев,
                            чтобы их жизнь была здоровой, долгой, радостной и гармоничной.
                            Наш долг - создавать лучшее предложение, поддерживая вас и ваших домашних любимцев.
                        </h6>
                        <h3 className="mt-5 text-success">
                            Более 350 магазинов по всей России
                        </h3>
                        <HorizontalLine/>
                        <p>
                            Все магазины имеют яркое оформление витрин, оснащены современным оборудованием.
                            Благодаря удобной навигации по отделам, вы без труда найдете то, что нужно именно
                            вашему питомцу из более чем 25 000 наименований товаров. Профессиональные ветеринарные
                            врачи и консультанты помогут выбрать все необходимые товары для кормления и содержания
                            вашего любимца.
                        </p>
                        <Alert className="p-5 mt-5" variant="success">
                            <ButtonScrollTo/>
                            <h3 className="text-success">
                                Pet Town в цифрах
                            </h3>
                            <Row className="mt-3">
                                <Col>
                                    <h2 className="d-flex flex-column">
                                        <span className="text-danger">350+</span>
                                        магазинов в России
                                    </h2>
                                </Col>
                                <Col>
                                    <h2 className="d-flex flex-column">
                                        <span className="text-danger">25 000+</span>
                                        наименований товаров
                                    </h2>
                                </Col>
                                <Col>
                                    <h2 className="d-flex flex-column">
                                        <span className="text-danger">80%</span>
                                        постоянных покупателей
                                    </h2>
                                </Col>
                            </Row>
                        </Alert>
                        <h3 className="mt-5 text-success">
                            Мы гордимся тем, что делаем!
                        </h3>
                        <HorizontalLine/>
                        <p>
                            Наша работа помогает сделать этот мир лучше, потому что домашние питомцы приносят
                            радостные эмоции и ощущение полноты жизни. Выберите свой зоомагазин Pet Town и
                            получайте удовольствие от покупок и общения с питомцем. Мы всегда рады видеть Вас!
                        </p>
                        <h3 className="mt-5 text-success">
                            Информация о юридическом лице
                        </h3>
                        <HorizontalLine/>
                        <p>
                            ООО «Pet Town»
                        </p>
                        <p>
                            ОГРН: 1215000031905
                        </p>
                        <p>
                            Юридический адрес: 140186, Московская обл., Г.О. Жуковский, ул. Дугина, дом 28/12,
                            помещ. 7, офис 17
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;
