import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

const PaymentMethod = () => {
    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col className="d-flex flex-column">
                        <h4>
                            Способ оплаты
                        </h4>
                        <div className="d-flex">
                            <i className="bi bi-currency-exchange"></i>
                            <h6 className="mx-2">Оплата по QR-коду</h6>
                        </div>
                        <Button
                            variant="outline-danger"
                            className="mt-2"
                        >
                            Изменить
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PaymentMethod;
