import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Search from "./search";
import Basket from "../page/backet";
import Login from "../../layouts/login";

const FooterBar = () => {
    return (
        <>
            <div className="position-fixed-footerBar">
                <Container>
                    <Row>
                        <Col className="d-flex align-items-center justify-content-start">
                            <Login/>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                            <Search/>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-end">
                            <Basket/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default FooterBar;
