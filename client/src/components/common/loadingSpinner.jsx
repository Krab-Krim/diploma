import React from "react";
import Spinner from "react-bootstrap/Spinner";
import {Container} from "react-bootstrap";

const LoadingSpinner = () => {
    return (
        <Container className="d-flex justify-content-center">
            <Spinner animation="border" role="status" variant="secondary">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    );
};

export default LoadingSpinner;
