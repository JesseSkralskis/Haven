import ReactDOM from "react-dom";
import React from "react";
import "./styles/styles.scss";
import "./index.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import configStore from "../src/store/configStore";

//provider allows us to provide the redux store to all our components
import { Provider } from "react-redux";
//call to the export default function gives us access to the store


const store = configStore();



const jsx = (
  // by using this now all applications wwill have access to the store
  <Provider store={store}>
    <App />
    
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));

serviceWorker.unregister();


