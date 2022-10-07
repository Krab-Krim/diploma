import React from "react";
import PropTypes from "prop-types";
import {Col, Row} from "react-bootstrap";

const PageTitle = ({catalogName}) => {
    return (
        <Row>
            <Col>
                <h2 className="text-center mt-1">
                    {catalogName}
                </h2>
            </Col>
        </Row>
    );
};

PageTitle.propTypes = {
    catalogName: PropTypes.string
};

export default PageTitle;
