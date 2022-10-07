import React from "react";
import PropTypes from "prop-types";

const ProductCode = ({id}) => {
    return (
        <div>
            <p className="text-secondary" style={{fontSize: "12px"}}>
                <small> Код товара: {id}</small>
            </p>
        </div>
    );
};

ProductCode.propTypes = {
    id: PropTypes.string
};

export default ProductCode;
