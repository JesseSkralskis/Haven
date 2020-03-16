import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducer from "../reducers/auth";
import propertyReducer from "../reducers/propertyReducers";
//in order to keep the dev tools we have to config a specific way
// this config allows for redux and firebase to work together

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //Store creation
  //using combine reducers to register reducers
  const store = createStore(
    combineReducers({
      auth: authReducer,
      property: propertyReducer
    }),
    composeEnhansers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
