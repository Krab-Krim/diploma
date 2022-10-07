import React, {useEffect, useState} from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import imgFeedback from "../statics/Feedback/1.jpg";
import TextField from "../components/common/form/textField";
import {validator} from "../utils/validator";
import TextAreaField from "../components/common/form/textAreaField";
import PageTitle from "../components/ui/pageTitle";
import {useDispatch} from "react-redux";
import {createFeedback} from "../store/feedback";
import {useHistory} from "react-router-dom";

const Feedback = () => {
    const catalogName = "Обратная связь";
    const [data, setData] = useState({
        email: "",
        content: ""
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
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
        content: {
            isRequired: {
                message: "Сообщение не может быть пустым"
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
        const newData = {...data};
        dispatch(createFeedback(newData));
        history.push("/");
    };

    return (
        <Container>
            <PageTitle catalogName={catalogName}/>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Image
                        src={imgFeedback}
                        className="w-50"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <form
                        onSubmit={handleSubmit}
                        style={{width: "50%", margin: "0 auto"}}
                    >
                        <TextField
                            label="Электронная почта"
                            name="email"
                            placeholder="Электронная почта"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextAreaField
                            value={data.content}
                            onChange={handleChange}
                            name="content"
                            label="Ваш вопрос, отзыв или пожелание:"
                            error={errors.content}
                        />
                        <Button
                            type="submit"
                            variant="outline-secondary"
                            disabled={!isValid}
                        >
                            Отправить сообщение
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Feedback;
