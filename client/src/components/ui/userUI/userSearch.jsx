import React from "react";
import PropTypes from "prop-types";

const UserSearch = ({handleSearchQuery, searchQuery}) => {
    return (
        <div className="d-flex justify-content-center mb-3">
            <input
                type="text"
                name="searchQuery"
                placeholder="Введите имя пользователя..."
                onChange={handleSearchQuery}
                value={searchQuery}
                className="w-100"
            />
        </div>
    );
};

UserSearch.propTypes = {
    handleSearchQuery: PropTypes.func,
    searchQuery: PropTypes.string
};

export default UserSearch;
