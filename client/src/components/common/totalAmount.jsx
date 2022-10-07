import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";

const TotalAmount = ({total}) => {
    const initialValue = 0;

    const sumTotal = total.reduce(
        (accumulator, currentValue) => accumulator + currentValue.sum,
        initialValue
    );

    const totalLength = total.length;

    if (total) {
        return (
            <>
                <Container className="py-5">
                    <Row>
                        <Col>
                            <h4>
                                Итого
                            </h4>
                        </Col>
                        <Col>
                            <p>
                                {sumTotal} ₽
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>Товары</Col>
                        <Col>{totalLength} шт.</Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>Пункт выдачи</Col>
                        <Col className="truncate">
                            <p>республика Крым, Первомайский район,
                                поселок городского типа Первомайское, улица Эдуарда Корпана, дом 5, квартира 29</p>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>Способ получения</Col>
                        <Col>Доставка</Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>Оплата</Col>
                        <Col>Оплата по QR-коду</Col>
                    </Row>
                    <Row className="d-flex flex-column mt-4">
                        <Col className="d-flex flex-column">
                            <Button variant="danger">
                                Оплатить заказ
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

TotalAmount.propTypes = {
    total: PropTypes.array
};

export default TotalAmount;
