import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {NavLink, useHistory, withRouter} from "react-router-dom";
import {Container} from "react-bootstrap";

const Breadcrumbs = () => {
    const {location} = useHistory();
    const {pathname} = location;
    const pathnames = pathname.split("/").filter((el) => el);

    const routeTo = `/${pathnames.slice(1, 2).join("/")}`;

    let renderRoute = [
        {name: "/blog", label: "Блог"},
        {name: "/login", label: "Вход"},
        {name: "/users", label: "Список пользователей"},
        {name: "/adminAddProduct", label: "Добавить новый продукт на сайт"},
        {name: "/admin", label: "Админ"},
        {name: `/admin${routeTo}`, label: `${routeTo}`},
        {name: `/users${routeTo}`, label: `${routeTo}`},
        {name: `/blog${routeTo}`, label: `${routeTo}`},
        {name: "/about", label: "О компании"},
        {name: "/requisites", label: "Реквизиты"},
        {name: "/question", label: "Вопросы и ответы"},
        {name: "/delivery", label: "Доставка"},
        {name: "/feedback", label: "Обратная связь"},
        {name: "/user", label: "Личные данные"},
        {name: "/basket", label: "Корзина"},
        {name: "/catalog", label: "Каталог"},
        {name: "/catalog/dog", label: "/ Собаки"},
        {name: "/catalog/cat", label: "/ Кошки"},
        {name: "/catalog/fish", label: "/ Рыбки"},
        {name: "/catalog/bird", label: "/ Птицы"},
        {name: "/catalog/rodent", label: "/ Грызуны"},
        {name: "/catalog/reptiles", label: "/ Рептилии"},
        {name: `/catalog${routeTo}`, label: `${routeTo}`}
    ];

    const getPathnameHome = () => {
        if (pathnames.length === 0) {
            return null;
        } else {
            return (
                <>
                    <NavLink to="/" className="card-title me-1">
                        <i className="bi bi-house-fill"></i>
                    </NavLink>
                    /
                </>
            );
        }
    };

    return (
        <Container className="mt-3">
            <Breadcrumb>
                {getPathnameHome()}
                {pathnames.map((pathname, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    const result = renderRoute.filter(render => render.name === routeTo);

                    return result.map((element, index) => {
                        return (
                            <div key={index}>
                                {
                                    isLast
                                        ? <span className="text-secondary ms-1"> {element.label} </span>
                                        : <NavLink to={routeTo} className="card-title ms-1">
                                            {element.label}
                                        </NavLink>
                                }
                            </div>
                        );
                    });
                })}
            </Breadcrumb>
        </Container>
    );
};

export default withRouter(Breadcrumbs);