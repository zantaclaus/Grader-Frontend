import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/userAction";
import { getCurrentUser } from "../services/authService";

function SetData(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = getCurrentUser();
    dispatch(setUser(user));

    // window.location = "/";
  }, [dispatch]);

  return <Redirect to="/" />;
}

export default SetData;
