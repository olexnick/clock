import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { showDialogs, selectZone } from "../actions/Actions.js";
import zones from "./zones.js";

class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentZone: "",
      zones: zones
    };
    this.clousDialogs = this.clousDialogs.bind(this);
    this.saveZone = this.saveZone.bind(this);
    this.selectZone = this.selectZone.bind(this);
  }

  selectZone(event) {
    this.setState({
      currentZone: event.target.value
    });
  }

  clousDialogs() {
    this.props.history.push("/");
  }
  saveZone() {
    this.props.history.push("/");
    this.props.dispatch(
      selectZone({
        zone: this.state.zones.filter(z => {
          if (z.name === this.state.currentZone) return z;
        })[0],
        selectedZones: this.props.selectedZones
      })
    );
  }

  render() {
    console.log("this.props.", this.props);
    const classNames =
      this.props.location.pathname === "/create-clock"
        ? "z-modal-show"
        : "z-modal";
    return (
      <div className={classNames}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Time zone</h5>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">
                  Select time zone
                </label>
                <select className="form-control" onChange={this.selectZone}>
                  {this.state.zones.map((zone, index) => {
                    return (
                      <option key={index} value={zone.name}>
                        {zone.name} (GMT {zone.gmt})
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={this.clousDialogs}
                className="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={this.saveZone}
                className="btn btn-outline-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(
  connect(function(store) {
    return {
      modalVisible: store.modalVisible,
      selectedZones: store.selectedZones
    };
  })(ModalDialog)
);
