import React from "react";
import Filters from './Filters';



//need to import the named export from redux-react to be able to get the store
//this is the parent of expense list

const DashBoard = () => (
  <div>
   <Filters/>
  </div>
);

export default DashBoard;
