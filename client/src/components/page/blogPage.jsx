import React from "react";
import LoadingSpinner from "../common/loadingSpinner";
import {useHistory} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import BackButton from "../common/backButton";
import {useSelector} from "react-redux";
import {getBlogs} from "../../store/blog";

const BlogPage = () => {
    const {location} = useHistory();
    const {pathname} = location;
    const pathNames = pathname.split("/").filter((el) => el);
    const a = useSelector(getBlogs());
    const blogCardPage = a.filter(el => el._id === pathNames[1]);

    if (blogCardPage.length === 0) {
        return <LoadingSpinner/>;
    } else {
        return (
            <>
                <Container className="mt-5 p-5 shadow">
                    <BackButton/>
                    {blogCardPage.map(elem => {
                        return (
                            <div key={elem._id}>
                                <Row>
                                    <Col className="d-flex justify-content-center">
                                        <Image src={elem.img} className="w-50"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="mt-3">
                                        <h2 className="text-center text-danger">
                                            {elem.title}
                                        </h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="mt-3">
                                        <p>
                                            {elem.p1}
                                        </p>
                                        <p>
                                            {elem.p2}
                                        </p>
                                        <p>
                                            {elem.p3}
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        )
                    })}
                </Container>
            </>
        );
    }
};

export default BlogPage;
