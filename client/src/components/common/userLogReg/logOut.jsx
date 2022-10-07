import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {logOut} from "../../../store/users";
import Login from "../../../layouts/login";

const LogOut = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logOut());
    }, []);
    return <Login/>;
};

export default LogOut;
