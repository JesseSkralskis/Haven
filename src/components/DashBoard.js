import React from "react";

import BlogList from "./BlogList";
import Header from "./Header";

//need to import the named export from redux-react to be able to get the store
//this is the parent of expense list

const DashBoard = () => (
  <div className="dashboard__container">
    <div className="dashboard__exsisting-content">
      <Header />
    </div>
    <div className="dashboard__remaining-space">
      <BlogList />
    </div>
  </div>
);

export default DashBoard;
