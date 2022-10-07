import React from "react";
import {Button, Card, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import LoadingSpinner from "../../common/loadingSpinner";
import {useSelector} from "react-redux";
import {getCardsBanner} from "../../../store/cardsBanner";

const HeaderAdvertisingOne = () => {
    const cardsBannerInfo = useSelector(getCardsBanner());
    const history = useHistory();

    const handleSaveCatalog = () => {
        history.push("/catalog");
    };

    if (cardsBannerInfo.length === 0) {
        return <LoadingSpinner/>;
    } else {
        return (
            <Col className="mt-3">
                {cardsBannerInfo.map(banner => (
                    <Card
                        className="text-white d-flex flex-wrap align-items-end"
                        style={{backgroundColor: "rgb(0 0 0)"}}
                        key={banner._id}
                    >
                        <Card.Img
                            src={banner.img}
                            alt="Card image"
                            style={{maxWidth: "600px", maxHeight: "400px"}}
                        />
                        <Card.ImgOverlay className="cardBannerImg">
                            <Card.Title className="text-white">
                                <h1>{banner.title}</h1>
                            </Card.Title>
                            <Button
                                variant="light"
                                size="lg"
                                onClick={() => handleSaveCatalog()}
                            >
                                Купить
                            </Button>
                        </Card.ImgOverlay>
                    </Card>
                ))}
            </Col>
        );
    }
    ;
};

export default HeaderAdvertisingOne;
