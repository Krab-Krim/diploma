import React from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import imgBasketEmpty from "../../../statics/BasketEmpty/hungry-8.gif";
import {useHistory} from "react-router-dom";

const BasketEmpty = () => {
    const history = useHistory();

    const handleSaveMain = () => {
        history.push("/");
    };

    const handleSaveCatalog = () => {
        history.push("/catalog");
    };

    return (
        <>
            <Container className="shadow p-5 mt-5">
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Image src={imgBasketEmpty} style={{width: "350px"}}/>
                    </Col>
                </Row>
                <Row className="d-flex flex-column">
                    <Col className="d-flex justify-content-center flex-column text-center">
                        <h2 className="text-danger mt-3">
                            Корзина пуста
                        </h2>
                        <p>
                            Посмотрите предложения на главной странице, воспользуйтесь каталогом или поиском
                        </p>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button
                            variant="outline-secondary"
                            className="me-3"
                            onClick={() => handleSaveMain()}
                        >
                            На главную
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => handleSaveCatalog()}
                        >
                            В каталог
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BasketEmpty;
