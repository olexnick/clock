import React from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';


class SelectedGMT extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    const m = moment.tz(this.props.time, this.props.zone);
    return(
      <div>
        <h1>{m.format('h:mm:ss a')}</h1>
        <input></input>
      </div>
    )
  }
}


SelectedGMT.propTypes = {
  time: PropTypes.any,
  zone: PropTypes.string.isRequired
};

export default SelectedGMT;
