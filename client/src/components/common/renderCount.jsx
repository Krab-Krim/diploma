import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {updateProductBasket} from "../../store/basket";

const RenderCount = ({price, data}) => {
    const [otherPlus, setOtherPlus] = useState(false);
    const [otherMinus, setOtherMinus] = useState(false);
    const [renderCountPrice, setRenderCountPrice] = useState(1);
    // const data = useSelector(getTotalPrice());

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

    const dispatch = useDispatch();

    const resultSumPrice = () => {
        return price * renderCountPrice;
    };

    useEffect(()=> {
        const newData = {...data,sum: price * renderCountPrice}
        dispatch(updateProductBasket(newData))
    },[resultSumPrice()])

    return (
        <>
            <Row className="d-flex align-items-center">
                <Col>
                    <Form.Group className="d-flex">
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
                <Col className="p-0">
                    <h5 className="ps-3">{resultSumPrice()} ₽</h5>
                </Col>
            </Row>
        </>
    );
};

RenderCount.propTypes = {
    price: PropTypes.number,
    data: PropTypes.object
};

export default RenderCount;