import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import imgRequisites from "../statics/Requisites/1.jpg";
import Table from "react-bootstrap/Table";
import PageTitle from "../components/ui/pageTitle";
import ButtonScrollTo from "../components/common/buttonScrollTo";

const Requisites = () => {
    const catalogName = "Реквизиты ООО «Pet Town»";
    return (
        <>
            <Container>
                <PageTitle catalogName={catalogName}/>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Image
                            src={imgRequisites}
                            className="w-50"
                        />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Table striped bordered hover className="d-flex justify-content-center">
                            <tbody>
                            <tr>
                                <td>Полное наименование</td>
                                <td>Общество с ограниченной ответственностью «Pet Town»</td>
                            </tr>
                            <tr>
                                <td>Генеральный директор</td>
                                <td>Бакальчук Татьяна Владимировна</td>
                            </tr>
                            <tr>
                                <td>Наименование банка</td>
                                <td>в Банк ВТБ (ПАО), г. Москва</td>
                            </tr>
                            <tr>
                                <td>Корреспондентский счет</td>
                                <td>30101810700000000187</td>
                            </tr>
                            <tr>
                                <td>БИК</td>
                                <td>044525187</td>
                            </tr>
                            <tr>
                                <td>Расчетный счет</td>
                                <td>40702810500110000939</td>
                            </tr>
                            <tr>
                                <td>ИНН</td>
                                <td>7721546864</td>
                            </tr>
                            <tr>
                                <td>КПП</td>
                                <td>507401001</td>
                            </tr>
                            <tr>
                                <td>ОГРН</td>
                                <td>1067746062449</td>
                            </tr>
                            <tr>
                                <td>Юридический адреc</td>
                                <td>142181, Московская область, г. Подольск, деревня Коледино, Территория Индустриальный
                                    парк Коледино, д. 6, стр. 1
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <ButtonScrollTo/>
                    </Col>
                </Row>
                <Row className="mt-3 text-center text-danger">
                    <Col>
                        <h4>
                            Обращаем внимание, что данные реквизиты не предназначены для оплаты заказов
                        </h4>
                        <h4>
                            Оплата заказа производится только через Личный кабинет
                        </h4>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Requisites;
