import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store/store.js";

import { Router, Route, Link } from "react-router-dom";

import history from "../utils/history";

import SelectedGMT from "./SelectGMT/selectedGMT.js";
import Menu from "./menu.js";
import CollectionZone from "./CollectionZone.js";
import ModalDialog from "./modalDialog.js";
import MainMenu from "./mainMenu.js";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" component={MainMenu} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("app")
);
