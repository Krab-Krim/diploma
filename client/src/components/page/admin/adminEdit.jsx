import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {validator} from "../../../utils/validator";
import BackHistoryButton from "../../common/backButton";
import TextField from "../../common/form/textField";
import {Button} from "react-bootstrap";
import {getPopularity, updatePopularity} from "../../../store/popularity";
import {useHistory} from "react-router-dom";

const AdminEdit = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const {location} = useHistory();
    const {pathname} = location;
    const pathNames = pathname.split("/").filter((el) => el);
    const a = useSelector(getPopularity());
    const q = a.filter(el => el._id === pathNames[1]);
    const [data, setData] = useState();
    const history = useHistory();

    useEffect(() => {
        setData({...q[0]});
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(updatePopularity({...data}));
        history.push("/admin");
    };

    const validatorConfig = {
        color: {
            isRequired: {
                message: "Поле обязательно для заполнения"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    if (data === undefined) {
        return "Loading";
    } else {
        return (
            <div className="container mt-5">
                <BackHistoryButton/>
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
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
                                type="submit"
                                disabled={!isValid}
                                className="w-100 mx-auto"
                                variant="danger"
                            >
                                Обновить
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default AdminEdit;
