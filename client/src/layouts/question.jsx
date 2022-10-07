import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import imgQuestion from "../statics/Question/1.jpg";
import Accordion from "react-bootstrap/Accordion";
import PageTitle from "../components/ui/pageTitle";

const Question = () => {
    const catalogName = "FAQ: Вопросы и ответы";
    return (
        <>
            <Container>
                <PageTitle catalogName={catalogName}/>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Image
                            src={imgQuestion}
                            className="w-50"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion defaultActiveKey={["0"]} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>КАК Я МОГУ АВТОРИЗОВАТЬСЯ?</Accordion.Header>
                                <Accordion.Body>
                                    Вы можете авторизоваться на сайте используя ваш email или телефон в любом формате.
                                    Если вы были зарегистрированы на старом сайте - вы также можете воспользоваться
                                    ранее заведенным логином-паролем.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>МОЖНО ЛИ ОФОРМИТЬ ЗАКАЗ БЕЗ РЕГИСТРАЦИИ?</Accordion.Header>
                                <Accordion.Body>
                                    Да, вы можете оформить заказ &quot;В один клик&quot;. Соответствующая кнопка есть в
                                    корзине
                                    и потребует от вас только номера телефона. Тем не менее, лучше оформлять обычный
                                    заказ, т.к. в этом случае будет сохраняться история заказов, а также будет доступен
                                    выбор адресов доставки из уже имеющихся.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>НЕ ПРИХОДИТ ПИСЬМО С ПАРОЛЕМ</Accordion.Header>
                                <Accordion.Body>
                                    Письмо с инструкциями по восстановлению пароля должно придти в течение 5 минут.
                                    Если этого не произошло, пожалуйста, проверьте папку спам. Если и там письма нет -
                                    введите вместо адреса email ваш номер телефона. В этом случае инструкции по
                                    восстановлению пароля придут в СМС. Обращаем ваше внимание, что на данный момент
                                    есть проблемы с доставкой писем на ящики @mail.ru, @inbox.ru, @bk.ru, @list.ru.
                                    Мы занимаемся решением данного вопроса.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>САЙТ ПИШЕТ, ЧТО ПОЛЬЗОВАТЕЛЬ НЕ НАЙДЕН</Accordion.Header>
                                <Accordion.Body>
                                    Скорее всего, вы делали заказ по телефону, либо со старого сайта.
                                    Поэтому даже если вы получаете рассылку (она производится через сторонний сервис),
                                    вам необходимо зарегистрироваться заново, либо просто оформить новый заказ с
                                    указанием ваших контактных данных (в этом случае регистрация произойдет
                                    автоматически). Накопленные ранее бонусы будут сохранены и станут доступны в личном
                                    кабинете.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>В КАКОМ ФОРМАТЕ ВВОДИТЬ НОМЕР ТЕЛЕФОНА?</Accordion.Header>
                                <Accordion.Body>
                                    Вы можете ввести номер телефона в любом удобном для вас формате, например:
                                    +7(911)555-44-33 или 89115554433.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Я ХОЧУ ПОМЕНЯТЬ АДРЕС EMAIL, КАК ЭТО СДЕЛАТЬ?</Accordion.Header>
                                <Accordion.Body>
                                    Зайдите в личный кабинет и введите Ваш новый email. Email можно сменить только на
                                    тот, которого нет в системе.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Question;
