import React from "react";
import PropTypes from "prop-types";

const HorizontalLine = ({title}) => {
    const styleHr = {
        border: "3px solid #16a9a2",
        width: "100px",
        backgroundColor: "#16a9a2"
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <hr style={styleHr}/>
            <h3>
                {title}
            </h3>
        </div>
    );
};

HorizontalLine.propTypes = {
    title: PropTypes.string
};

export default HorizontalLine;
