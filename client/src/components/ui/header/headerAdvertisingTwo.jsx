import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import HeaderAdvertisingOne from "./headerAdvertisingOne";
import Card from "react-bootstrap/Card";
import {useHistory} from "react-router-dom";
import LoadingSpinner from "../../common/loadingSpinner";
import {useSelector} from "react-redux";
import {getCards} from "../../../store/cards";

const HeaderAdvertisingTwo = () => {
    const cardInfo = useSelector(getCards());
    const history = useHistory();

    const handleSaveCatalog = () => {
        history.push("/catalog");
    };

    if (cardInfo.length === 0) {
        return (
            <LoadingSpinner/>
        );
    } else {
        return (
            <Container>
                <Row>
                    {cardInfo.map((card) => {
                        return (
                            <Col key={card._id}>
                                <Card className="text-white">
                                    <Card.Img
                                        src={card.img}
                                        alt="Card image"
                                        style={{maxWidth: "100%", maxHeight: "410px"}}
                                    />
                                    <Card.ImgOverlay className="cardBannerImg">
                                        <Card.Title className="text-white">
                                            <h1>{card.title}</h1>
                                        </Card.Title>
                                        <Button
                                            variant="light"
                                            size="lg"
                                            onClick={() => handleSaveCatalog()}
                                        >
                                            Купить
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
                <Row>
                    <HeaderAdvertisingOne/>
                </Row>
            </Container>
        );
    }
};

export default HeaderAdvertisingTwo;
