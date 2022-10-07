import React from "react";
import {Image} from "react-bootstrap";

const ChangeUserImg = () => {
    return (
        <>
            <Image
                src={`https://avatars.dicebear.com/api/avataaars/${(
                    Math.random() + 1
                )
                    .toString(36)
                    .substring(7)}.svg`}
                className="rounded-circle"
                style={{width: "150px"}}
            />
        </>
    );
};

export default ChangeUserImg;
