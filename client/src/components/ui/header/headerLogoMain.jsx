import React from "react";
import {Image} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import LogoMainImg from "../../../statics/LogoMain/logo.png";

const HeaderLogoMain = () => {
    const history = useHistory();

    const handleSave = () => {
        history.push("/");
    };

    return (
        <div className="d-flex justify-content-center">
            <Image
                src={LogoMainImg}
                onClick={() => handleSave()}
                style={{width: "100%", cursor: "pointer"}}
            />
        </div>
    );
};

export default HeaderLogoMain;
