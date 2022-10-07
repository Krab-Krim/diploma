import React from "react";
import Form from "react-bootstrap/Form";

const ChangeSex = () => {
    return (
        <>
            <Form.Check
                inline
                label="Муж."
                name="group1"
                type={"radio"}
                id={"inline-radio-1"}
            />
            <Form.Check
                inline
                label="Жен."
                name="group1"
                type={"radio"}
                id={"inline-radio-1"}
            />
        </>
    );
};

export default ChangeSex;
