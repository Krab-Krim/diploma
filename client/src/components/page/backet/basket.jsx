import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {NavLink} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import {useSelector} from "react-redux";
import {getBaskets} from "../../../store/basket";

const Basket = () => {
    const history = useHistory();
    const initialValue = 0;
    const catalogBasketProduct = useSelector(getBaskets());

    const handleSave = () => history.push(`/basket`);

    if (catalogBasketProduct === undefined) {
        return "Loading";
    } else {
        const sum = catalogBasketProduct.reduce(
            (accumulator, currentValue) => accumulator + currentValue.sum,
            initialValue
        );

        const count = catalogBasketProduct.length;

        const getBadge = () => {
            if (count === 0) {
                return (
                    <>
                        <div onClick={() => handleSave()}>
                            <i className="bi bi-cart-fill"></i>
                            <span className="mx-1">Корзина</span>
                        </div>
                    </>
                );
            } else {
                return (
                    <>
                        <div onClick={() => handleSave()}>
                            <i className="bi bi-cart-fill"></i>
                            <span className="ms-3">{sum} ₽</span>
                            <Badge bg="danger" className="badgeStyle">{count}</Badge>
                        </div>
                    </>
                );
            }
        };

        return (
            <div className="navLinkStyle">
                <NavLink>
                    {getBadge()}
                </NavLink>
            </div>
        );
    }
};

export default Basket;
