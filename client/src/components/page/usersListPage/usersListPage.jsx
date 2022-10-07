import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {paginate} from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import SearchStatus from "../../ui/searchStatus";
import _ from "lodash";
import {useSelector} from "react-redux";
import {getCurrentUserId, getUsersList} from "../../../store/users";
import UsersTable from "../../ui/userUI/usersTable";
import UserSearch from "../../ui/userUI/userSearch";

const UsersListPage = () => {
    const users = useSelector(getUsersList());
    const currentUserId = useSelector(getCurrentUserId());
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({path: "name", order: "asc"});
    const pageSize = 4;

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchQuery]);

    const handleSearchQuery = ({target}) => {
        setSelectedProf(null);
        setSearchQuery(target.value);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };

    function filterUsers(data) {
        const filteredUsers = searchQuery
            ? data.filter(
                (user) =>
                    user.name
                        .toLowerCase()
                        .indexOf(searchQuery.toLowerCase()) !== -1
            )
            : selectedProf
                ? data.filter((user) => user.profession === selectedProf._id)
                : data;
        return filteredUsers.filter((u) => u._id !== currentUserId);
    }

    const filteredUsers = filterUsers(users);
    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);

    return (
        <>
            <SearchStatus length={count}/>
            <UserSearch
                handleSearchQuery={handleSearchQuery}
                searchQuery={searchQuery}
            />
            {count > 0 && (
                <UsersTable
                    users={usersCrop}
                    onSort={handleSort}
                    selectedSort={sortBy}
                />
            )}
            <div className="d-flex justify-content-center">
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

UsersListPage.propTypes = {
    users: PropTypes.array
};

export default UsersListPage;

