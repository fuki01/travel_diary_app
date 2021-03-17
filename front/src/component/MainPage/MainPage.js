import React, { Component } from 'react';
import Header from '../Layout/Header';
import { withRouter } from 'react-router-dom';
import Main from './Main';

class MainPage extends Component{
  render(){
    return(
      <div>
        <Header />
        <Main /> 
      </div>
    );
  }
}
export default withRouter(MainPage);
