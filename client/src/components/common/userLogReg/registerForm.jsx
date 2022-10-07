import React, {useEffect, useState} from "react";
import {validator} from "../../../utils/validator"
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import CheckBoxField from "../../common/form/checkBoxField";
import {useDispatch, useSelector} from "react-redux";
import {getQualities} from "../../../store/qualities";
import {getProfessions} from "../../../store/professions";
import {getAuthErrors, signUp} from "../../../store/users";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        profession: "",
        sex: "male",
        name: "",
        qualities: [],
        licence: false
    });
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const qualities = useSelector(getQualities());
    const qualitiesList = qualities.map((q) => ({
        label: q.name,
        value: q._id
    }));
    const professions = useSelector(getProfessions());
    const professionsList = professions.map((p) => ({
        label: p.name,
        value: p._id
    }));
    const [errors, setErrors] = useState({});
    const loginError = useSelector(getAuthErrors());

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        if (target.name === "password") {
            setPassword(target.value);
        }

        if (target.name === "repeatPassword") {
            setRepeatPassword(target.value);
        }
    };
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        repeatPassword: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        },
        licence: {
            isRequired: {
                message:
                    "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
            }
        }
    };

    if (password !== repeatPassword && repeatPassword !== "") {
        errors.repeatPassword = "Пароль не соответствует. Проверьте правильность введенных данных";
    }

    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = {
            ...data,
            qualities: data.qualities.map((q) => q.value)
        };
        dispatch(signUp(newData));
        history.push("/")
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <TextField
                label="Повторите пароль"
                type="password"
                name="repeatPassword"
                placeholder="Пароль"
                value={data.repeatPassword}
                onChange={handleChange}
                error={errors.repeatPassword}
            />
            <RadioField
                options={[
                    {name: "Муж", value: "male"},
                    {name: "Жен", value: "female"},
                    {name: "Другое", value: "other"}
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
            />
            <SelectField
                label="Как часто вы посещаете зоомагазины?"
                defaultOption="Выберите..."
                options={professionsList}
                name="profession"
                onChange={handleChange}
                value={data.profession}
                error={errors.profession}
            />
            <MultiSelectField
                options={qualitiesList}
                onChange={handleChange}
                defaultValue={data.qualities}
                name="qualities"
                label="Какое у вас животное?"
            />
            <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name="licence"
                error={errors.licence}
            >
                Согласен с условиями <a>Правил пользования торговой площадкой и правилами возврата</a>
            </CheckBoxField>
            {loginError && <p className="text-danger">{loginError}</p>}
            <Button
                variant="dark"
                className=" w-100 mx-auto mb-3"
                type="submit"
                disabled={!isValid}
            >
                Зарегистрироваться
            </Button>
        </form>
    );
};

export default RegisterForm;