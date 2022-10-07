import React from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import RenderCount from "../../common/renderCount";
import PaymentMethod from "../../common/paymentMethod";
import UserData from "../../common/userData";
import {Link} from "react-router-dom";
import TotalScrollTop from "../../common/scroll/totalScrollTop";
import PriceOfOneItem from "../../common/price/priceOfOneItem";
import ProductCode from "../../common/productCode";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {removeBaskets} from "../../../store/basket";

const BasketProduct = ({catalogBasketProduct}) => {
    const dispatch = useDispatch();

    const handleRemoveComment = (basketsId) => {
        dispatch(removeBaskets(basketsId));
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={7} className="shadow p-5">
                    {catalogBasketProduct.map(catalogElement => {
                        return (
                            <div
                                key={catalogElement._id}
                                className="d-flex"
                            >
                                <Col className="mb-5 me-5" md={1}>
                                    <Image
                                        src={catalogElement.img}
                                        style={{width: "100%"}}
                                    />
                                </Col>
                                <Col md={4} className="me-5">
                                    <Col className="truncate navLinkStyle">
                                        <Link className="text-decoration-none"
                                              to={`/catalog/${catalogElement._id}`}>
                                            <p>{catalogElement.title}</p>
                                        </Link>
                                        <ProductCode id={catalogElement._id}/>
                                    </Col>
                                </Col>
                                <Col className="d-flex justify-content-end" md={4}>
                                    <Row className="d-flex flex-column">
                                        <Col className="p-0">
                                            <RenderCount data={catalogElement} price={catalogElement.price}/>
                                            <PriceOfOneItem priceOne={catalogElement.price}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={1} className="card-title">
                                    <Button
                                        variant="link"
                                        onClick={() => handleRemoveComment(catalogElement._id)}
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </div>
                        );
                    })}
                    <Row>
                        <Col className="d-flex justify-content-evenly">
                            <Row>
                                <Col className="mt-5">
                                    <PaymentMethod/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mt-5">
                                    <UserData/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col
                    md={4}
                    className="p-0 mx-5"
                    style={{height: "max-content"}}
                >
                    <Row>
                        <Col>
                            <TotalScrollTop total={catalogBasketProduct}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

BasketProduct.propTypes = {
    catalogBasketProduct: PropTypes.array
}

export default BasketProduct;
