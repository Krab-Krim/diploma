import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import PageTitle from "../../ui/pageTitle";
import Card from "react-bootstrap/Card";
import CatalogDog2 from "../../../statics/CatalogDog/2.png";
import CatalogDog3 from "../../../statics/CatalogDog/3.jpg";
import CatalogDog4 from "../../../statics/CatalogDog/4.png";

const CatalogReptiles = () => {
    const catalogName = "Рептилии";

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <PageTitle catalogName={catalogName}/>
                    </Col>
                </Row>
                <Row xs={2} md={6} className="g-4 my-5 d-flex justify-content-center">
                    <Col>
                        <Card className="d-flex align-items-center" style={{border: "none"}}>
                            <Card.Img src={CatalogDog2} style={{width: "100px", height: "100px"}}/>
                            <Card.Body>
                                <Card.Title>Сухие корма</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="d-flex align-items-center" style={{border: "none"}}>
                            <Card.Img src={CatalogDog3} style={{width: "100px", height: "100px"}}/>
                            <Card.Body>
                                <Card.Title>Консервы</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="d-flex align-items-center" style={{border: "none"}}>
                            <Card.Img src={CatalogDog3} style={{width: "100px", height: "100px"}}/>
                            <Card.Body>
                                <Card.Title>Добавки</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="d-flex align-items-center" style={{border: "none"}}>
                            <Card.Img src={CatalogDog3} style={{width: "100px", height: "100px"}}/>
                            <Card.Body>
                                <Card.Title>Витамины</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row xs={2} md={6} className="g-4 my-5 d-flex justify-content-center">
                    <Col>
                        <Card className="d-flex align-items-center" style={{border: "none"}}>
                            <Card.Img src={CatalogDog4} style={{width: "100px", height: "100px"}}/>
                            <Card.Body>
                                <Card.Title>Новинки</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CatalogReptiles;
