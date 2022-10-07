import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

const UserData = () => {
    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col className="d-flex flex-column">
                        <h4>
                            Ваши данные
                        </h4>
                        <div className="d-flex">
                            <i className="bi bi-incognito"></i>
                            <h6 className="mx-2">Вера Петрова</h6>
                            <h6 className="mx-2">+7 (978) 864-99-76</h6>
                        </div>
                        <Button
                            variant="outline-danger"
                            className="mt-2"
                        >
                            Изменить
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default UserData;
