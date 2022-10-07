import React from "react";
import {Alert, Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import LoadingSpinner from "../../common/loadingSpinner";
import {useSelector} from "react-redux";
import {getCatalogCardImg} from "../../../store/catalogCardImg";

const HeaderCatalogCard = () => {
    const catalogCard = useSelector(getCatalogCardImg());

    if (catalogCard.length === 0) {
        return <LoadingSpinner/>;
    } else {
        return (
            <>
                <Alert className="my-5 py-5 d-flex flex-column align-items-center" variant="success">
                    <input type="checkbox" id="read-more-checker" data-more-checker="read-more"/>
                    <Container className="limiter-header">
                        <h1 className="text-center">Более 200 лучших брендов</h1>
                        <Row xs={6} className="g-4 mt-3 dotted">
                            <div className="bottom-header mt-3"></div>
                            {catalogCard.map(catalog => (
                                <Col
                                    key={catalog._id}
                                    className="d-flex align-items-center dotted"
                                >
                                    <Card
                                        style={{background: "none", border: "none"}}
                                        className="dotted"
                                    >
                                        <Card.Img
                                            src={catalog.img}
                                            alt="Card image"
                                            className="w-75"
                                        />
                                    </Card>
                                </Col>
                            ))}
                            <div className="bottom"></div>
                        </Row>
                    </Container>
                    <label htmlFor="read-more-checker" className="read-more-button-header mt-3"></label>
                </Alert>
            </>
        );
    }
};

export default HeaderCatalogCard;
