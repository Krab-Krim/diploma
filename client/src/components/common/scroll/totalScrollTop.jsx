import React, {useEffect, useState} from "react";
import TotalAmount from "../totalAmount";
import PropTypes from "prop-types";

const TotalScrollTop = ({total}) => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const getTotalAmount = () => {
        if (scroll > 299) {
            return (
                <div className="shadow position-fixed w-25 getTotalAmountTop getTotalAmount">
                    <TotalAmount total={total}/>
                </div>
            );
        } else {
            return (
                <div className="shadow position-fixed w-25 getTotalAmount">
                    <TotalAmount total={total}/>
                </div>
            );
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (total === undefined) {
        return "Loading";
    } else {
        return (
            <>
                {getTotalAmount()}
            </>
        );
    }
};

TotalScrollTop.propTypes = {
    total: PropTypes.array
};

export default TotalScrollTop;
