import React from "react";
import { connect } from "react-redux";
import { showDialogs, sortZones } from "../actions/Actions.js";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.showDialogs = this.showDialogs.bind(this);
  }

  showDialogs(val) {
    this.props.dispatch(showDialogs(val));
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
          onClick={this.showDialogs.bind(this, "show")}
        >
          Create zone
        </button>
        <div className="sorting-zone">
          <span>Sort by</span>
          <div className="btn-group">
            <button
              type="button"
              onClick={this.sortZone.bind(this, "east")}
              className="btn btn-outline-info btn-sm"
            >
              East
            </button>
            <button
              type="button"
              onClick={this.sortZone.bind(this, "west")}
              className="btn btn-outline-info btn-sm"
            >
              West
            </button>
            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                onClick={this.sortZone.bind(this, "east")}
              >
                From Est to West
              </a>
              <a
                className="dropdown-item"
                onClick={this.sortZone.bind(this, "west")}
              >
                From West to East
              </a>
              <a className="dropdown-item">Something else here</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">Separated link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(function(store) {
  return {
    projectReducer: store
  };
})(Menu);
