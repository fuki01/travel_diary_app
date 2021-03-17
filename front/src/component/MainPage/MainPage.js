import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Main from './Main';

class MainPage extends Component{
  render(){
    return(
      <div>
        <Main /> 
      </div>
    );
  }
}
export default withRouter(MainPage);
