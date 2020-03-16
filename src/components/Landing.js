import React from "react";

import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import results from "../apiPlay";
import Header from "./Header";

import Search from "./Search";

//destructure the props to get our dispatch
export const LoginPage = ({ startLogin }) => {
  return (
    <div className="landing__container">
      <div className="landing__header">
        <Header />
      </div>{" "}
      <div className="landing__search">
        <Search />
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
