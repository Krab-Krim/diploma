import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCurrentUserId} from "../../../store/users";
import {Button} from "react-bootstrap";

const UserCard = ({user}) => {
    const history = useHistory();
    const currentUserId = useSelector(getCurrentUserId());

    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                {currentUserId === user._id && (
                    <Button variant="outline-secondary"
                            className="position-absolute top-0 end-0 btn btn-light btn-sm"
                            onClick={handleClick}
                    >
                        <i className="bi bi-gear"></i>
                    </Button>
                )}

                <div className="d-flex flex-column align-items-center text-center position-relative">
                    <img
                        src={user.image}
                        className="rounded-circle"
                        width="150"
                    />
                    <div className="mt-3">
                        <h4>{user.name}</h4>
                        <p className="text-secondary mb-1">
                            {user.profession.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
UserCard.propTypes = {
    user: PropTypes.object
};

export default UserCard;