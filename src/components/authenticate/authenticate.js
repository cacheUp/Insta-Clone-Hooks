/* eslint-disable default-case */
/* eslint-disable no-useless-constructor */
import React, { useState, useEffect } from "react";
import dummyData from "../../dummy-data";

export const authenticate = App => Login =>
  function(props) {
    //React Hook State
    const [data, setData] = useState([]);

    //storing data to my local storage. (React Hooks syntax for ComponentDidMount())
    useEffect(() => {
      const vdata = JSON.parse(localStorage.getItem("data")) || dummyData;
      setData({ data: [...vdata] }, () => {
        localStorage.setItem("data", JSON.stringify(data));
      });
    });

    const [currentUser, setCurrentUser] = useState("");
    useEffect(() => {
      const vcurrentUser =
        JSON.parse(localStorage.getItem("currentUser")) || "";
      setCurrentUser({ currentUser: vcurrentUser }, () => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      });
    });
    //conditional statement to decide which page to render
    return !this.state.currentUser ? (
      <Login data={data} />
    ) : (
      <App data={data} />
    );
  };