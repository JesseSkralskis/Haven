import ReactDOM from "react-dom";
import React from "react";
import "./styles/styles.scss";
import "./index.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import configStore from "../src/store/configStore";
import { startSetBlog } from "./actions/blog";
import { firebase } from "./firebase/firebase";
//provider allows us to provide the redux store to all our components
import { Provider } from "react-redux";
//call to the export default function gives us access to the store
import { history } from "./routes/AppRouter";
import { login, logout } from "./actions/auth";
import moment from "moment";
import uuid from "uuid";

const store = configStore();



export const testBlogs = [
  {
    id: uuid(),
    title: "one",
    blog:
      "A toast to my cold Christmas in England a month ago: a welcome change from the constant oppressive heat, dust and humidity of Dar es Salaam.A toast to my cold Christmas in England a month ago: a welcome change from the constant oppressive heat, dust and humidity of Dar es Salaam.A toast to my cold Christmas in England a month ago: a welcome change from the constant oppressive heat, dust and humidity of Dar es Salaam. ",
    createdAt: moment()
  },
  {
    id: uuid(),
    title: "two",
    blog: "second blog",
    createdAt: moment()
  }
];

const jsx = (
  // by using this now all applications wwill have access to the store
  <Provider  store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
// allows us to conditionally have app render
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//runs call back when auth status changes
//we need the history api but usually it only is available in a component thats been routed

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));

    //to get user id we

    console.log("logged in");
    store.dispatch(startSetBlog()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    //redirects us where we specify
    store.dispatch(logout());
    console.log("logged out");
    renderApp();
    history.push("/");
  }
});
