import React from "react";
import PropTypes from "prop-types";
import Qualities from "../qualities";
import Table from "../../common/table";
import {Link} from "react-router-dom";
import Profession from "../profession";

const UserTable = ({users, onSort, selectedSort}) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <Link
                    to={`/users/${user._id}`}
                    className="card-title"
                >
                    {user.name}
                </Link>
            )
        },
        qualities: {
            name: "Какое у вас животное?",
            component: (user) => <Qualities qualities={user.qualities}/>
        },
        professions: {
            name: "Как часто вы посещаете зоомагазины?",
            component: (user) => <Profession id={user.profession}/>
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default UserTable;
