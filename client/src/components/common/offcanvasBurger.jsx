import React, {useState} from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {Button} from "react-bootstrap";
import HeaderFeedback from "../ui/header/headerFeedback";

const OffcanvasBurger = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light boxShadowNone" onClick={handleShow}>
                <i className="bi bi-clock-fill"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>График работы</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <HeaderFeedback/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffcanvasBurger;
