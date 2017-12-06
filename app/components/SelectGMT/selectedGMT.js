import React from "react";
import moment from "moment-timezone";
import PropTypes from "prop-types";

class SelectedGMT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textZone: ""
    };
    this.textZone = this.textZone.bind(this);
  }

  textZone(el) {
    this.setState({
      textZone: el.target.value
    });
  }

  render() {
    const m = moment.tz(this.props.time, this.props.zone);
    return (
      <div className="zone-select">
        <h4>{m.format("h:mm:ss a")}</h4>
        <div className="form-group">
          <p>{this.props.zone}</p>
          <textarea
            className="form-control"
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

export default SelectedGMT;
