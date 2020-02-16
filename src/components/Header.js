import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => (
  //navlink allows gives us props that help us style easily the
  //nav we are on using activeclassname and the styling is-active
  <header className="header">
    <div className="header__content">
      <Link className="header__link" to="/dashboard">
        {" "}
        <h1 id="header__h1">Pivot</h1>
      </Link>
      <div className="header__buttonContainer">
        <button className="buttons buttons--logout" onClick={startLogout}>
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDipatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDipatchToProps)(Header);
