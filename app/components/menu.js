import React from 'react';
import {connect} from 'react-redux';
import {showDialogs} from '../actions/Actions.js';

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.showDialogs = this.showDialogs.bind(this);
  }

  showDialogs(val){
    console.log(val);
    this.props.dispatch(showDialogs(val));
  }

    render(){
      return(
        <div className="menu-sort">
          <button type="button"
            className="btn btn-outline-success btn-sm"
            onClick={this.showDialogs.bind(this, 'show')}>Create zone</button>
            <div className="sorting-zone">
              <span>Sort by</span>
              <button type="button"
                className="btn btn-outline-info btn-sm"
                onClick={this.showDialogs.bind(this, 'show')}>Time zone</button>
            </div>
        </div>
      )
    }
  };
  export default connect(function(store) {
    return {
      projectReducer: store
    }
  })(Menu);
