import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import history from "../utils/history.js";
import SelectedGMT from "./SelectGMT/selectedGMT";

class CollectionZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().getTime()
    };
  }
  componentDidMount() {
    setInterval(function () {
      this.setState({
        time: new Date().getTime()
      });
    }.bind(this), 1000);
  }

  render() {
    return (
      <div>
        {this.props.selectedZones.map((zone, index) => {
          return <SelectedGMT time={this.state.time} zone={zone} key={index} />;
        })}
      </div>
    );
  }
}
export default connect(function(store) {
  return {
    selectedZones: store.selectedZones
  };
})(CollectionZone);
