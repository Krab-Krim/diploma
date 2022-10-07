import React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const CatalogListCard = ({catalogListCard}) => {
    if (catalogListCard.length === 0) {
        return (
            <h5 className="text-center mt-5">
                По Вашему запросу ничего не найдено
            </h5>
        );
    } else {
        return (
            <>
                <Row lg={4} md={4} sm={2} className="g-4 mt-3">
                    {catalogListCard.map((card) => (
                        <Col key={card._id}>
                            <Link className="text-decoration-none text-center" to={`/catalog/${card._id}`}>
                                <Card className="border-0 d-flex align-items-center">
                                    <Card.Img variant="top" src={card.img} style={{width: "150px", height: "200px"}}/>
                                    <Card.Body>
                                        <Card.Title className="text-danger">
                                            {card.price} ₽
                                        </Card.Title>
                                        <Card.Title className="truncate">
                                            <p><small>{card.title}</small></p>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </>
        );
    }
};

CatalogListCard.propTypes = {
    catalogListCard: PropTypes.array
};

export default CatalogListCard;
