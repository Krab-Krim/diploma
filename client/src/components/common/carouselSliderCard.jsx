import React from "react";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CarouselSliderCard = ({infoCard}) => {
    return (
        <>
            <Card
                style={{width: "18rem", border: "none"}}
                className="text-center 1111111"
            >
                <Link
                    className="text-decoration-none d-flex flex-column align-items-center"
                    to={`/catalog/${infoCard._id}`}
                    style={{width: "280px", height: "300px"}}
                >
                    <Card.Img
                        variant="top"
                        src={infoCard.img}
                        style={{width: "160px", height: "200px"}}
                        className="scale"
                    />
                    <Card.Title className="truncate mt-3">
                        <p><small>{infoCard.title}</small></p>
                    </Card.Title>
                </Link>
                <Card.Body className="d-flex align-items-center justify-content-between p-0">
                    <h4 className="m-0">{infoCard.price} ₽</h4>
                    <Link
                        className="text-decoration-none"
                        to={`/catalog/${infoCard._id}`}
                    >
                        <Button
                            variant="outline-danger"
                            size="lg"
                        >
                            Купить
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

CarouselSliderCard.propTypes = {
    infoCard: PropTypes.object
};

export default CarouselSliderCard;
