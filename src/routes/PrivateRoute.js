import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header';
//destructure props renaming component to capital because we will be rendering it
//when destructering we can get the rest of whatever using the ...rest
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        //this is how to only allow a logged in user to see certain pages
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <div>
                    <Header/>
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to='/' />
                )
        )}/>
);

const mapStateToProps = (state) => ({
    //using thwe double !! to get actual boolean values
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
   

 
