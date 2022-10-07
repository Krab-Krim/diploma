import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import HorizontalLine from "../../common/horizontalLine";
import Card from "react-bootstrap/Card";
import LoadingSpinner from "../../common/loadingSpinner";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getBlogs} from "../../../store/blog";

const HeaderBlog = () => {
    const headerBlog = useSelector(getBlogs());
    const headerBlogTitle = "Все об уходе за животными в нашем блоге";

    if (headerBlog.length === 0) {
        return <LoadingSpinner/>;
    } else {
        const newArrayBlog = headerBlog.slice(0, 2);

        return (
            <Container>
                <HorizontalLine title={headerBlogTitle}/>
                <Row>
                    {newArrayBlog.map((blog) => {
                        return (
                            <Col
                                xs={6}
                                className="d-flex justify-content-between mt-3 text-center"
                                key={blog._id}
                            >
                                <Card className="cardStyle">
                                    <Card.Img variant="top" src={blog.img}/>
                                    <Card.Body>
                                        <Link
                                            className="text-decoration-none"
                                            to={`/blog/${blog._id}`}
                                        >
                                            <Card.Title className="text-black">{blog.title}</Card.Title>
                                        </Link>
                                        <Card.Text>
                                            {blog.subtitle}
                                        </Card.Text>
                                        <Link
                                            className="text-decoration-none"
                                            to={`/blog/${blog._id}`}
                                        >
                                            <Button
                                                variant="outline-secondary"
                                                size="lg"
                                            >
                                                Читать
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
};

export default HeaderBlog;
