import React from "react";
import moment from "moment-timezone";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteZones } from "../../actions/Actions.js";

class SelectedGMT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textZone: ""
    };
    this.textZone = this.textZone.bind(this);
    this.delete = this.delete.bind(this);
  }

  textZone(el) {
    this.setState({
      textZone: el.target.value
    });
  }
  delete(id) {
    this.props.dispatch(deleteZones(id));
  }

  render() {
    const m = moment.tz(this.props.time, this.props.zone);
    return (
      <div className="zone-select">
        <h4>{m.format("h:mm:ss a")}</h4>
        <div className="form-group">
          <p>{this.props.zone}</p>
          <button
            onClick={this.delete.bind(this, this.props.id)}
            type="button"
            className="btn btn-outline-danger btn-sm btn-block"
          >
            Delete
          </button>
          <textarea
            className="form-control note"
            onChange={this.textZone}
            rows="3"
            maxLength="120"
          />
        </div>
      </div>
    );
  }
}

SelectedGMT.propTypes = {
  time: PropTypes.any,
  zone: PropTypes.string.isRequired
};

export default connect()(SelectedGMT);
