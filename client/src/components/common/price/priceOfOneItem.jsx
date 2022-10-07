import React from "react";
import PropTypes from "prop-types";

const PriceOfOneItem = ({priceOne}) => {
    return (
        <div className="mt-1">
            <p className="text-secondary" style={{fontSize: "12px"}}>
                <small>{priceOne} ₽ /шт.</small>
            </p>
        </div>
    );
};

PriceOfOneItem.propTypes = {
    priceOne: PropTypes.number
};

export default PriceOfOneItem;
