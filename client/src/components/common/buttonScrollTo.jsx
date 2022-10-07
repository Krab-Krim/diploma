import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";

const ButtonScrollTo = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {
                scroll > 150
                    ? <>
                        <Row>
                            <Col>
                                <Button
                                    className="position-fixed-button"
                                    variant="outline-success"
                                    onClick={handleUpButton}
                                >
                                    <i className="bi bi-arrow-up"></i>
                                </Button>
                            </Col>
                        </Row>
                    </>
                    : ""
            }
        </>
    );
};

export default ButtonScrollTo;
