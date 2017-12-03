import React from 'react';
import {connect} from 'react-redux';
import { showDialogs, selectZone } from '../actions/Actions.js';

class ModalDialog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentZone:'',
      zones: [{
        name: "Eniwetok",
        gmt: -12
      },
      {
        name: "Samoa",
        gmt: -11
      },
      {
        name: "Hawaii",
        gmt: -10
      },
      {
        name: "Alaska",
        gmt: -9
      },
      {
        name: "Pacific",
        gmt: -8
      },
      {
        name: "Mountain",
        gmt: -7
      },
      {
        name: "Central",
        gmt: -6
      },
      {
        name: "Eastern",
        gmt: -5
      },
      {
        name: "Atlantic",
        gmt: -4
      },
      {
        name: "Brazilia",
        gmt: -3
      },
      {
        name: "MidAtlantic",
        gmt: -2
      },
      {
        name: "Azores",
        gmt: -1
      },
      {
        name: "Greenwich",
        gmt: 0
      },
      {
        name: "Rome",
        gmt: 1
      },
      {
        name: "Israel",
        gmt: 2
      },
      {
        name: "Moscow",
        gmt: 3
      },
      {
        name: "Baku",
        gmt: 4
      },
      {
        name: "Delhi",
        gmt: 5
      },
      {
        name: "Dhakar",
        gmt: 6
      },
      {
        name: "Bangkok",
        gmt: 7
      },
      {
        name: "HongKong",
        gmt: 8
      },
      {
        name: "Tokyo",
        gmt: 9
      },
      {
        name: "Sydney",
        gmt: 10
      },
      {
        name: "Magadan",
        gmt: 11
      },
      {
        name: "Wellington",
        gmt: 12
      }]
    }
    this.clousDialogs = this.clousDialogs.bind(this);
    this.saveZone = this.saveZone.bind(this);
    this.selectZone =this.selectZone.bind(this);
  }

  selectZone(event){
    console.log('select', event.target.value);
     this.setState({
       currentZone: event.target.value
     });
  }

  clousDialogs(val){
    this.props.dispatch(showDialogs(val));
  }
  saveZone(){
    this.props.dispatch(selectZone({
      zone: this.state.currentZone,
      selectedZones:this.props.selectedZones
    }));
  }

  render(){

    const classNames = this.props.modalVisible === 'show' ? "z-modal-show" : "z-modal";
    return(
      <div className={classNames}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Time zone</h5>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Select time zone</label>
                <select className="form-control" onChange={this.selectZone}>
                  {
                    this.state.zones.map((zone, index) => {
                      return (
                        <option
                          key={index}
                          value={zone.name}>
                          {zone.name} (GMT {zone.gmt})
                        </option>
                      );
                    })
                  }
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={this.clousDialogs.bind(this, '')}className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
              <button type="button" onClick={this.saveZone.bind(this, '')} className="btn btn-outline-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default connect(function(store) {
  return {
    modalVisible: store.modalVisible,
    selectedZones: store.selectedZones
  }
})(ModalDialog);
