import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import PageTitle from "../components/ui/pageTitle";
import {useSelector} from "react-redux";
import {getPopularity} from "../store/popularity";
import Search from "../components/common/search";
import Filter from "../components/common/filter/filter";

const Catalog = () => {
    const catalogName = "Каталог";
    const catalogListCard = useSelector(getPopularity());
    const [selectedProf, setSelectedProf] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchQuery]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSearchQuery = ({target}) => {
        setSelectedProf(null);
        setSearchQuery(target.value);
    };

    if (catalogListCard.length === 0) {
        return "Loading";
    } else {
        const filteredUsers = catalogListCard.filter(
            (user) =>
                user.title
                    .toLowerCase()
                    .indexOf(searchQuery.toLowerCase()) !== -1
        )

        return (
            <Container>
                <PageTitle catalogName={catalogName}/>
                <Row>
                    <Col>
                        <Search onChange={handleSearchQuery} value={searchQuery}/>
                    </Col>
                </Row>
                <Row>
                    <Filter
                        pageSize={pageSize}
                        catalogListCard={catalogListCard}
                        filteredUsers={filteredUsers}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Row>
            </Container>
        );
    }
};

export default Catalog;
