import React from "react";
import {Col, Row} from "react-bootstrap";

const HeaderFeedback = () => {
    return (
        <>
            <Row>
                <Col>
                    <h5 className="text-center">+7 (498) 223-45-67</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-center">ежедневно с 09:00 до 22:00</p>
                </Col>
            </Row>
        </>
    );
};

export default HeaderFeedback;
