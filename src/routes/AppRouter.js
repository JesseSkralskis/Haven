import React from "react";
import { connect } from "react-redux";

import { Switch, Router, Route } from "react-router-dom";
import "../styles/styles.scss";

import NotFoundPage from "../components/NotFoundPage.js";
import Landing from "../components/Landing";
import Results from "../components/Results";
import ResMap from "../components/ResMap";
import Search from "../components/Search";
import DetailsPage from "../components/DetailsPage";

//import this to get access to history api anywhere
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


export const history = createHistory();
//instaed of using browser route3r with history built in
//we pass in our custom history
//now we have the advantage to use history in other files

const AppRouter = ({ firstSearch }) => (
  <Router history={history}>
    {/* if more than on route must wrap with a div */}
    <div>
      {/* switch allows us to say if a route has no path match to print the
      component */}
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route
          path="/resmap"
          render={props => (
            <ResMap
              {...props}
              history={history}
              apiData={firstSearch.firstSearch}
              cordinates={firstSearch.cordinates}
            />
          )}
        />
        <Route path="/details" component={DetailsPage} />
        <Route path="/search" component={Search} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

const mapStateToProps = state => ({
  firstSearch: state.firstSearch
});

export default connect(mapStateToProps)(AppRouter);
