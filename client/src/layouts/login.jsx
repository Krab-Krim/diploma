import React, {useState} from "react";
import {useParams} from "react-router-dom";
import RegisterForm from "../components/common/userLogReg/registerForm";
import LoginForm from "../components/common/userLogReg/loginForm";

const Login = () => {
    const {type} = useParams();
    const [formType, setFormType] = useState(type === "register" ? type : "login");

    const toggleFormType = () => {
        setFormType(prevState => prevState === "register" ? "login" : "register");
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        {formType === "register"
                            ? (<>
                                <h3 className="mb-4 text-center">Регистрация</h3>
                                <RegisterForm/>
                                <p>
                                    Уже есть аккаунт? {" "}
                                    <a
                                        role="button"
                                        onClick={toggleFormType}
                                        className="text-danger text-decoration-none"
                                    >
                                        {" "}
                                        Вход в кабинет покупателя
                                    </a>
                                </p>
                            </>)
                            : (<>
                                <h3 className="mb-4 text-center">Вход</h3>
                                <LoginForm/>
                                <p>
                                    У вас нет аккаунта? {" "}
                                    <a
                                        role="button"
                                        onClick={toggleFormType}
                                        className="text-danger text-decoration-none"
                                    >
                                        {" "}
                                        Регистрация
                                    </a>
                                </p>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
