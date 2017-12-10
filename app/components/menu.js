import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { showDialogs, sortZones } from "../actions/Actions.js";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.showDialogs = this.showDialogs.bind(this);
  }

  showDialogs() {
    this.props.history.push("/create-clock");
  }
  sortZone(typeSort) {
    this.props.dispatch(
      sortZones(this.props.projectReducer.selectedZones, typeSort)
    );
  }

  render() {
    return (
      <div className="menu-sort">
        <button
          type="button"
          className="btn btn-outline-success btn-sm"
          onClick={this.showDialogs}
        >
          Create zone
        </button>
        <div className="sorting-zone">
          <span>Sort by</span>
          <div className="btn-group" role="group">
            <button
              onClick={this.sortZone.bind(this, "east")}
              type="button"
              className="btn btn-outline-info btn-sm"
            >
              From Est to West
            </button>
            <button
              onClick={this.sortZone.bind(this, "west")}
              type="button"
              className="btn btn-outline-info btn-sm"
            >
              From West to East
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(
  connect(function(store) {
    return {
      projectReducer: store
    };
  })(Menu)
);
