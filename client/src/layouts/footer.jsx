import React from "react";
import Alert from "react-bootstrap/Alert";
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <Alert className="mb-0 mt-5 pb-5" variant="success">
            <Container>
                <Row className="text-black">
                    <Col>
                        <h5>
                            Компания
                        </h5>
                        <Row>
                            <Col className="navLinkStyle d-flex flex-column">
                                <NavLink to="/about">О компании</NavLink>
                                <NavLink to="/requisites">Реквизиты</NavLink>
                                <NavLink to="/question">Вопрос и ответ</NavLink>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h5>Каталог</h5>
                        <Row className="flex-column mt-3">
                            <Col className="navLinkStyle d-flex flex-column">
                                <NavLink to="/catalog/dog">Собаки</NavLink>
                                <NavLink to="/catalog/cat">Кошки</NavLink>
                                <NavLink to="/catalog/fish">Рыбки</NavLink>
                                <NavLink to="/catalog/bird">Птицы</NavLink>
                                <NavLink to="/catalog/rodent">Грызуны</NavLink>
                                <NavLink to="/catalog/reptiles">Рептилии</NavLink>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h5>Помощь</h5>
                        <Row className="flex-column mt-3">
                            <Col className="navLinkStyle d-flex flex-column">
                                <NavLink to="/delivery">Доставка</NavLink>
                                <NavLink to="/blog">Блог</NavLink>
                                <NavLink to="/feedback">Обратная связь</NavLink>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h5>Контакты</h5>
                        <Row className="flex-column mt-3">
                            <Col>
                                <h5>
                                    +7 (498) 223-45-67
                                </h5>
                            </Col>
                            <Col>
                                <p className="text-secondary">
                                    <small>ежедневно с 09:00 до 22:00</small>
                                </p>
                            </Col>
                            <Col>
                                <p>
                                    hello@go-insales.ru
                                </p>
                            </Col>
                            <Col className="navLinkStyle d-flex justify-content-between">
                                <NavLink
                                    target={"_blank"}
                                    to={{pathname: "https://www.instagram.com/result.school.it"}}
                                >
                                    <i className="bi bi-instagram"></i>
                                </NavLink>

                                <NavLink
                                    target={"_blank"}
                                    to={{pathname: "https://t.me/result_school_it"}}
                                >
                                    <i className="bi bi-telegram"></i>
                                </NavLink>
                                <NavLink
                                    target={"_blank"}
                                    to={{pathname: "https://www.youtube.com/c/VladilenMinin"}}
                                >
                                    <i className="bi bi-youtube"></i>
                                </NavLink>
                                <NavLink
                                    target={"_blank"}
                                    to={{pathname: "https://www.facebook.com/"}}
                                >
                                    <i className="bi bi-facebook"></i>
                                </NavLink>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Alert>
    );
};

export default Footer;
