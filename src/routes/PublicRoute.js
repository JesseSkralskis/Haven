import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

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
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
