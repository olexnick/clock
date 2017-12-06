import React from "react";
import { connect } from "react-redux";
import { showDialogs, selectZone } from "../actions/Actions.js";

class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentZone: "",
      zones: [
        {
          name: "Pacific/Pago_Pago",
          gmt: -11
        },
        {
          name: "US/Hawaii",
          gmt: -10
        },
        {
          name: "US/Alaska",
          gmt: -9
        },
        {
          name: "US/Pacific",
          gmt: -8
        },
        {
          name: "US/Mountain",
          gmt: -7
        },
        {
          name: "America/Mexico_City",
          gmt: -6
        },
        {
          name: "America/Kentucky/Louisville",
          gmt: -5
        },
        {
          name: "America/Curacao",
          gmt: -4
        },
        {
          name: "America/Santiago",
          gmt: -3
        },
        {
          name: "America/Sao_Paulo",
          gmt: -2
        },
        {
          name: "Atlantic/Azores",
          gmt: -1
        },
        {
          name: "Europe/Belfast",
          gmt: 0
        },
        {
          name: "Europe/Rome",
          gmt: 1
        },
        {
          name: "Europe/Vilnius",
          gmt: 2
        },
        {
          name: "Europe/Moscow",
          gmt: 3
        },
        {
          name: "Asia/Baku",
          gmt: 4
        },
        {
          name: "Asia/Ashgabat",
          gmt: 5
        },
        {
          name: "Asia/Dhaka",
          gmt: 6
        },
        {
          name: "Asia/Bangkok",
          gmt: 7
        },
        {
          name: "Asia/Shanghai",
          gmt: 8
        },
        {
          name: "Asia/Tokyo",
          gmt: 9
        },
        {
          name: "Australia/Sydney",
          gmt: 10
        },
        {
          name: "sia/Magadan",
          gmt: 11
        },
        {
          name: "Antarctica/South_Pole",
          gmt: 12
        }
      ]
    };
    this.clousDialogs = this.clousDialogs.bind(this);
    this.saveZone = this.saveZone.bind(this);
    this.selectZone = this.selectZone.bind(this);
  }

  selectZone(event) {
    console.log("select", event.target.value);
    this.setState({
      currentZone: event.target.value
    });
  }

  clousDialogs(val) {
    this.props.dispatch(showDialogs(val));
  }
  saveZone() {
    this.props.dispatch(
      selectZone({
        zone: this.state.zones.filter(z => {
          if (z.name === this.state.currentZone) return z;
        }),
        selectedZones: this.props.selectedZones
      })
    );
  }

  render() {
    const classNames =
      this.props.modalVisible === "show" ? "z-modal-show" : "z-modal";
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
                onClick={this.clousDialogs.bind(this, "")}
                className="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={this.saveZone.bind(this, "")}
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
export default connect(function(store) {
  return {
    modalVisible: store.modalVisible,
    selectedZones: store.selectedZones
  };
})(ModalDialog);
