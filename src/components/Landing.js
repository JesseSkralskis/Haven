import React from "react";

import { connect } from "react-redux";

import Header from "./Header";

import Search from "./Search";

//destructure the props to get our dispatch
export const Landing = ({ history }) => {
  return (
    <div className="landing__container">
      <div className="landing__header">
        <Header />
      </div>{" "}
      <div className="landing__search">
        <Search history={history} />
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({});

export default connect(undefined, mapDispatchToProps)(Landing);
