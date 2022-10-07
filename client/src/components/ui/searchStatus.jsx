import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({length}) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number < 15) {
            return "пользователей зарегистрировано на сайте";
        }
        if (lastOne === 1) return "пользователь зарегистрирован на сайте";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "пользователя зарегистрировано на сайте";
        return "человек тусанет";
    };
    return (
        <div className="d-flex align-items-center justify-content-center">
            <h2>
            <span
                className={"badge " + (length > 0 ? "bg-white text-dark" : "bg-danger")}
            >
                {length > 0
                    ? `${length + " " + renderPhrase(length)}. Вы можете общаться`
                    : "Еще мало зарегистрировалось пользователей для общения "}
            </span>
            </h2>
        </div>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;