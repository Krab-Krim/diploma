import React from "react";
import {Button} from "react-bootstrap";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {addProductBasket} from "../../../store/basket";
import {useHistory} from "react-router-dom";

const CatalogButtonOrderClick = ({data}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSaveBasket = () => {
        const newData = {...data}
        dispatch(addProductBasket(newData));
        history.push("/basket");
    };

    return (
        <>
            <Button
                variant="outline-danger"
                onClick={() => handleSaveBasket()}
            >
                Заказать в 1 клик
            </Button>
        </>
    );
};

CatalogButtonOrderClick.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
}

export default CatalogButtonOrderClick;
