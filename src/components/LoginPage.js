import React from 'react'

import { connect } from 'react-redux';
import {startLogin} from '../actions/auth'

//destructure the props to get our dispatch
export const LoginPage = ({ startLogin }) => (
         <div className="box-layout">
           <div className="box-layout__box">
             <h1 className="box-layout__title ">The Pivot</h1>
             <p className="box-layout__sub">
               {" "}
               <span className="box-layout__name">Jesse Skralskis's</span> journey into the tech game
             </p>
             <button className="buttons" onClick={startLogin}>
               Login with Google
             </button>
           </div>
         </div>
       );

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
        
});

export default connect(undefined, mapDispatchToProps)(LoginPage);



    
