import React from "react";
import {NavLink} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import LoadingSpinner from "./loadingSpinner";
import {useSelector} from "react-redux";
import {getCatalogTitle} from "../../store/catalogTitle";

const DropdownContentCatalog = () => {
    const catalogCard = useSelector(getCatalogTitle());

    if (catalogCard.length === 0) {
        return <LoadingSpinner/>;
    } else {
        return (
            <Container>
                <Row>
                    {catalogCard.map((catalog) => (
                        <div key={catalog._id}>
                            <NavLink to={catalog.url}>
                                <Col sm={4} className="d-flex align-items-center">
                                    <Image src={catalog.img} style={{width: "70px"}}/>
                                    <h6 className="ms-3">
                                        {catalog.title}
                                    </h6>
                                </Col>
                            </NavLink>
                        </div>)
                    )}
                </Row>
            </Container>
        );
    }
};

export default DropdownContentCatalog;
