import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import LoadingSpinner from "../components/common/loadingSpinner";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import PageTitle from "../components/ui/pageTitle";
import ButtonScrollTo from "../components/common/buttonScrollTo";
import {useSelector} from "react-redux";
import {getBlogs} from "../store/blog";

const Blog = () => {
    const catalogName = "Блог";
    const blogCard = useSelector(getBlogs());

    if (blogCard.length === 0) {
        return <LoadingSpinner/>;
    } else {
        return (
            <Container>
                <PageTitle catalogName={catalogName}/>
                <Row xs={1} sm={2} md={3} className="g-4 mt-3">
                    {blogCard.map((blog) => (
                        <Col key={blog._id}>
                            <Card className="shadow text-center">
                                <Link
                                    className="text-decoration-none"
                                    to={`/blog/${blog._id}`}
                                >
                                    <Card.Img variant="top" src={blog.img}/>
                                    <Card.Body>
                                        <Card.Title className="truncate">
                                            <p>{blog.title}</p>
                                        </Card.Title>
                                    </Card.Body>
                                </Link>
                                <Card.Body>
                                    <Card.Text>{blog.subtitle}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <ButtonScrollTo/>
            </Container>
        );
    }
};

export default Blog;
