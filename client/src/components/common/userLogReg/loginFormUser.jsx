import React from "react";
import {NavLink} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../../../store/users";
import NavProfile from "./navProfile";

const LoginFormUser = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const history = useHistory();

    const handleLogin = () => {
        history.push("/login");
    };

    return (
        <>
            {isLoggedIn
                ? <NavProfile/>
                : <div className="navLinkStyle">
                    <NavLink className="text-decoration-none" onClick={() => handleLogin()}>
                        <i className="bi bi-person-fill"></i>
                        <span className="mx-1">Вход</span>
                    </NavLink>
                </div>
            }
        </>
    );
};

export default LoginFormUser;
