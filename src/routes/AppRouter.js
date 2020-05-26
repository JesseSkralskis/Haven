import React from "react";
import { connect } from "react-redux";

import { Switch, Router, Route } from "react-router-dom";
import "../styles/styles.scss";

import NotFoundPage from "../components/NotFoundPage.js";
import Landing from "../components/Landing";
import ResMap from "../components/ResMap";
import Search from "../components/Search";
import DetailsPage from "../components/DetailsPage";

//import this to get access to history api anywhere
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

const AppRouter = ({ firstSearch }) => (
  <Router history={history}>
    <div>
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
