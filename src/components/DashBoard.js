import React from "react";
import Filters from './Filters';
import BlogList from './BlogList';



//need to import the named export from redux-react to be able to get the store
//this is the parent of expense list

const DashBoard = () => (
  <div>
    <Filters />
    <BlogList/>
  </div>
);

export default DashBoard;
