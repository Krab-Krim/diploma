import React, {useEffect, useState} from "react";
import {Button, Container, Row} from "react-bootstrap";
import PageTitle from "../../ui/pageTitle";
import TextField from "../../common/form/textField";
import {validator} from "../../../utils/validator";
import {useDispatch} from "react-redux";
import {createPopularity} from "../../../store/popularity";
import {useHistory} from "react-router-dom";
import BackHistoryButton from "../../common/backButton";

const AdminAddProduct = () => {
    const adminTitle = "Новый продукт";
    const [data, setData] = useState({
        color: "",
        img: "",
        info: "",
        price: "",
        size: "",
        subtitle: "",
        title: "",
        type: ""
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        color: {
            isRequired: {
                message: "Поле обязательно для заполнения"
            },
            min: {
                message: "Поле должно состоять минимум из 3 символов",
                value: 3
            }
        },
        img: {
            isRequired: {
                message: "Поле обязательно для заполнения"
            },
            min: {
                message: "Поле должно состоять минимум из 3 символов",
                value: 3
            }
        },
        info: {
            isRequired: {
                message: "Поле обязательно для заполнения"
            },
            min: {
                message: "Поле должно состоять минимум из 3 символов",
                value: 3
            }
        },
        price: {
            isRequired: {
                message: "Поле обязательно для заполнения"
            },
            number: {
                message: "Введите цену числом"
            }
        },
        size: {
            isRequired: {
                message: "Форма для заполнения размера - s, l или m"
            }
        },
        subtitle: {
            isRequired: {
                message: "Поле обязательно для заполнения"
            },
            min: {
                message: "Поле должно состоять минимум из 3 символов",
                value: 3
            }
        },
        title: {
            isRequired: {
                message: "Поле обязательно для заполнения"
            },
            min: {
                message: "Поле должно состоять минимум из 3 символов",
                value: 3
            }
        },
        type: {
            isRequired: {
                message: "Поле обязательно для заполнения"
            },
            min: {
                message: "Поле должно состоять минимум из 3 символов",
                value: 3
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = {...data, price: Number(data.price)};
        dispatch(createPopularity(newData));
        history.push("/admin");
    };


    return (
        <Container>
            <BackHistoryButton/>
            <PageTitle catalogName={adminTitle}/>
            <Row>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Color"
                        name="color"
                        value={data.color}
                        onChange={handleChange}
                        error={errors.color}
                    />
                    <TextField
                        label="img"
                        name="img"
                        value={data.img}
                        onChange={handleChange}
                        error={errors.img}
                    />
                    <TextField
                        label="info"
                        name="info"
                        value={data.info}
                        onChange={handleChange}
                        error={errors.info}
                    />
                    <TextField
                        label="price"
                        name="price"
                        value={data.price}
                        onChange={handleChange}
                        error={errors.price}
                    />
                    <TextField
                        label="size"
                        name="size"
                        value={data.size}
                        onChange={handleChange}
                        error={errors.size}
                    />
                    <TextField
                        label="subtitle"
                        name="subtitle"
                        value={data.subtitle}
                        onChange={handleChange}
                        error={errors.subtitle}
                    />
                    <TextField
                        label="title"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        error={errors.title}
                    />
                    <TextField
                        label="type"
                        name="type"
                        value={data.type}
                        onChange={handleChange}
                        error={errors.type}
                    />
                    <Button
                        variant="dark"
                        className=" w-100 mx-auto mb-3"
                        type="submit"
                        disabled={!isValid}
                    >
                        Добавить новый продукт
                    </Button>
                </form>
            </Row>
        </Container>
    );
};

export default AdminAddProduct;