import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store/store.js";
import { Router } from "react-router";
import { Route } from "react-router-dom";

import SelectedGMT from "./SelectGMT/selectedGMT.js";
import Menu from "./menu.js";
import CollectionZone from "./CollectionZone.js";
import ModalDialog from "./modalDialog.js";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ModalDialog />
        <div className="row">
          <div className="hidden-xs hidden-sm col-md-1 col-lg-1"/>
          <div className="col-xs-12 col-sm-10 col-md-12 col-lg-10">
            <div className="card wrapper-clock">
              <div className="card-header text-center">Time Zones</div>
              <div className="card-body">
                <Menu />
                <div className="card">
                  <CollectionZone />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden-xs hidden-sm col-md-1 col-lg-1"/>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
