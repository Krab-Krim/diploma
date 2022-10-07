import React from "react";
import Basket from "../components/page/backet/basket";
import {Col, Container, Row} from "react-bootstrap";
import HeaderFeedback from "../components/ui/header/headerFeedback";
import HeaderLogoMain from "../components/ui/header/headerLogoMain";
import OffcanvasBurger from "../components/common/offcanvasBurger";
import LoginFormUser from "../components/common/userLogReg/loginFormUser";

const Header = () => {
    return (
        <>
            <Container className="desktop-top">
                <Row className="justify-content-md-center">
                    <Col className="desktop-display-none">
                        <HeaderFeedback/>
                    </Col>
                    <Col className="desktop-display">
                        <OffcanvasBurger/>
                    </Col>
                    <Col>
                        <HeaderLogoMain/>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center desktop-opacity">
                        <LoginFormUser/>
                        <Basket/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Header;
