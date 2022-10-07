import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const HeaderSubscription = () => {
    return (
        <Container>
            <Alert className="my-5 py-5" variant="success">
                <Row>
                    <Col md={8}>
                        <h1 className="text-dark d-flex text-center">ПОЛУЧАЙТЕ НОВОСТИ РАНЬШЕ ВСЕХ И БУДЬТЕ С НАМИ!</h1>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center align-items-center">
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Control type="email" placeholder="name@example.com"/>
                                </Form>
                            </Col>
                            <Col>
                                <Button
                                    variant="secondary" size="md"
                                >
                                    Подписаться
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Alert>
        </Container>
    );
};

export default HeaderSubscription;
