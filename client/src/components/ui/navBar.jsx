import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Navbar} from "react-bootstrap";
import DropdownContentCatalog from "../common/dropdownContentCatalog";
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../../store/users";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <Navbar bg="success justify-content-center mt-3" sticky="top">
            <Container className="justify-content-center m-1">
                <ul className="nav nav-pills">
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link text-white changes dropbtn" to="/catalog">
                            <h5>
                                <i className="bi bi-bug-fill mx-2"></i>
                                Каталог
                            </h5>
                        </NavLink>
                        <div className="dropdown-content">
                            <DropdownContentCatalog/>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link text-white changes dropbtn" to="/blog">
                            <h5>
                                <i className="bi bi-incognito mx-2"></i>
                                Блог
                            </h5>
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link text-white changes dropbtn" to="/delivery">
                            <h5>
                                <i className="bi bi-truck mx-2"></i>
                                Доставка
                            </h5>
                        </NavLink>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link text-white changes dropbtn" to="/users">
                                    <h5>
                                        <i className="bi bi-people-fill mx-2"></i>
                                        Все пользователи
                                    </h5>
                                </NavLink>

                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link text-white changes dropbtn" to="/admin">
                                    <h5>
                                        <i className="bi bi-person-circle mx-2"></i>
                                        Админка
                                    </h5>
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        ""
                    )}
                </ul>
            </Container>
        </Navbar>
    );
};

export default NavBar;