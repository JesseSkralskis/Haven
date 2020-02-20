import React from "react";


import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

//destructure the props to get our dispatch
export const LoginPage = ({ startLogin }) => {
  // const handleGuestEntry = (e) => {
  //   history.push("/dashboard");

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title ">Pivot</h1>
        <div className="box-layout__box-container">
          <button className="buttons" onClick={startLogin}>
            Login with Google
          </button>
        </div>

        <div className="box-layout__move-both">
          <p className="box-layout__name">Jesse Skralskis</p>
          <p className="box-layout__description">
            a full stack web developer coding blog
          </p>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
