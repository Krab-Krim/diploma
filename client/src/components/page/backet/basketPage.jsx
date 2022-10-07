import React from "react";
import {Container, Row} from "react-bootstrap";
import BasketProduct from "../../ui/basket/basketProduct";
import PageTitle from "../../ui/pageTitle";
import {useSelector} from "react-redux";
import BasketEmpty from "../../ui/basket/basketEmpty";
import {getBaskets} from "../../../store/basket";

const BasketPage = () => {
    const catalogName = "Корзина";
    const catalogBasketProduct = useSelector(getBaskets());

    console.log("catalogBasketProduct", catalogBasketProduct)

    return (
        <>
            <Container>
                <PageTitle catalogName={catalogName}/>
                <Row>
                    {
                        catalogBasketProduct.length === 0
                            ? <BasketEmpty/>
                            : <BasketProduct catalogBasketProduct={catalogBasketProduct}/>
                    }
                </Row>
            </Container>
        </>
    );
};

export default BasketPage;
