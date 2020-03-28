import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { history } from "../routes/AppRouter";

const Header = ({ startLogout }) => {
  const handleClick = () => {
    history.push("/");
  };

  return (
    //navlink allows gives us props that help us style easily the
    //nav we are on using activeclassname and the styling is-active
    <header className="header">
      {" "}
      <div className="header__wrapper">
        <Link
          onClick={()=>handleClick()}
          target="_self"
          style={{ textDecoration: "none" }}
          className="header__link"
          to="/"
        >
          {" "}
          <h1 className="header__h1">Haven</h1>
        </Link>
      </div>
      <div className="header__buttonContainer">
        {/* <button className="buttons buttons--logout" onClick={startLogout}>
        Logout
      </button> */}
      </div>
    </header>
  );
};

const mapDipatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDipatchToProps)(Header);
