import React from "react";
import {useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";

const BackHistoryButton = () => {
    const history = useHistory();
    return (
        <Button variant="outline-secondary" onClick={() => history.goBack()}>
            <i className="bi bi-caret-left"></i>
            Назад
        </Button>
    );
};

export default BackHistoryButton;
