import React from "react";
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {addProductBasket} from "../../../store/basket";

const CatalogButtonBasket = ({data}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSaveCatalog = () => {
        const newData = {...data}
        dispatch(addProductBasket(newData));
        history.push("/catalog");
    };

    const handleSaveBasket = () => {
        const newData = {...data}
        dispatch(addProductBasket(newData));
        history.push("/basket");
    };

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="justify-content-center p-3">
                    <Modal.Title id="contained-modal-title-vcenter">
                        ТОВАР ДОБАВЛЕН В КОРЗИНУ
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-around p-5">
                    <Button
                        onClick={() => handleSaveCatalog()}
                        variant="outline-danger"
                    >
                        ПРОДОЛЖИТЬ ПОКУПКИ
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => handleSaveBasket()}
                    >
                        ПЕРЕЙТИ В КОРЗИНУ
                    </Button>
                </Modal.Body>
            </Modal>
        );
    }

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button
                variant="danger"
                className="me-3"
                onClick={() => setModalShow(true)}
            >
                В корзину
            </Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

CatalogButtonBasket.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
}

export default CatalogButtonBasket;
