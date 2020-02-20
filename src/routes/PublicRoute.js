import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const king = process.env.REACT_APP_KING_KEY;



//destructure props renaming component to capital because we will be rendering it
//when destructering we can get the rest of whatever using the ...rest
export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          <Redirect to="/dashboard" />
        </div>
      ) : (
        <div>
          <Component {...props} />
        </div>
      )
    }
  />
);

const mapStateToProps = state => ({
  //using thwe double !! to get actual boolean values
  isAuthenticated: !!state.auth.uid,
  authId: state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
