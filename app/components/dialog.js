import React from 'react';
import {connect} from 'react-redux';


class Dialogs extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
	   return(
       <div className="modalDialogs">
         ffff
       </div>
     )
   }
}

export default connect(function(store) {
  return {
    projectReducer: store
  }
})(Dialogs);
