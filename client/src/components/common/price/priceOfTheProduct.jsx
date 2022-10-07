import React, {useState} from "react";
import PropTypes from "prop-types";
import {Button, Col, Form, Row} from "react-bootstrap";

const PriceOfTheProduct = ({price}) => {
    const [otherPlus, setOtherPlus] = useState(false);
    const [otherMinus, setOtherMinus] = useState(false);
    const [renderCountPrice, setRenderCountPrice] = useState(1);

    const toggleOtherPlus = () => {
        setOtherPlus(!otherPlus);
        setRenderCountPrice(prevState => prevState + 1);
    };

    const toggleOtherMinus = () => {
        setOtherMinus(!otherMinus);
        if (renderCountPrice > 1) {
            setRenderCountPrice(prevState => prevState - 1);
        }
    };

    const handleChange = (event) => {
        event.preventDefault();
        setRenderCountPrice(event.target.value);
    };

    const resultSumPrice = () => {
        return price * renderCountPrice;
    };

    return (
        <>
            <Row className="mt-5 text-start">
                <Col>
                    Цена товара
                </Col>
                <Col className="d-flex justify-content-center">
                    {resultSumPrice()} ₽
                </Col>
            </Row>
            <Row className="mt-3 text-start">
                <Col>
                    Количество товара
                </Col>
                <Col className="d-flex justify-content-center">
                    <Form.Group className="d-flex w-50">
                        <Button
                            onClick={toggleOtherPlus}
                            variant="light"
                            className="boxShadowNone"
                        >
                            +
                        </Button>
                        <Form.Control
                            type="number"
                            value={renderCountPrice}
                            className="boxShadowNone input"
                            onChange={handleChange}
                        >
                        </Form.Control>
                        <Button
                            onClick={toggleOtherMinus}
                            variant="light"
                            className="boxShadowNone"
                        >
                            -
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
        </>
    );
};

PriceOfTheProduct.propTypes = {
    price: PropTypes.number,
    data: PropTypes.object
};

export default PriceOfTheProduct;
