import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import {Button, Container, Image} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {useHistory} from "react-router-dom";
import {getPopularity, removePopularity} from "../../../store/popularity";
import {paginate} from "../../../utils/paginate";
import Search from "../../common/search";
import Pagination from "../../common/pagination";

const AdminList = () => {
    const adminList = useSelector(getPopularity());
    const [selectedProf, setSelectedProf] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy] = useState({path: "name", order: "asc"});
    const pageSize = 8;
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSaveAdminAddProduct = () => {
        history.push(`/adminAddProduct`);
    };

    const handleClick = (adminId) => {
        history.push(`admin/${adminId}`);
    };

    const handleRemoveComment = (popularityId) => {
        dispatch(removePopularity(popularityId));
    };

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

    if (adminList.length === 0) {
        return "Loading";
    } else {
        const filteredUsers = adminList.filter(
            (user) =>
                user.title
                    .toLowerCase()
                    .indexOf(searchQuery.toLowerCase()) !== -1
        )

        const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
        const userCrop = paginate(sortedUsers, currentPage, pageSize);
        const count = sortedUsers.length;

        return (
            <Container>
                <Search onChange={handleSearchQuery} value={searchQuery}/>
                <Button
                    onClick={handleSaveAdminAddProduct}
                    className="mb-3"
                    variant="secondary"
                >
                    Добавить
                </Button>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Color</th>
                        <th>Img</th>
                        <th>ImgCard</th>
                        <th>Info</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>Subtitle</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    {userCrop.map(list => {
                        return (
                            <tbody key={list._id}>
                            <tr>
                                <td>{list._id}</td>
                                <td>{list.color}</td>
                                <td>
                                    <Image src={list.img} style={{width: "50px", height: "70px"}}/>
                                </td>
                                <td>@ImgCard</td>
                                <td className="truncate">
                                    <p>
                                        {list.info}
                                    </p>
                                </td>
                                <td>{list.price}</td>
                                <td>{list.size}</td>
                                <td className="truncate">
                                    <p>
                                        {list.subtitle}
                                    </p>
                                </td>
                                <td className="truncate">
                                    <p>
                                        {list.title}
                                    </p>
                                </td>
                                <td>{list.type}</td>
                                <td>
                                    <Button
                                        onClick={() => handleRemoveComment(list._id)}
                                        variant="danger"
                                    >
                                        Удалить
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        onClick={() => handleClick(list._id)}
                                        variant="success"
                                    >
                                        Изменить
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                        )
                    })}
                </Table>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </Container>
        );
    }
};

export default AdminList;
