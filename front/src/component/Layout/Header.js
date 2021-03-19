import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Header extends Component {
  render(){
    return(
      <AppBar position="static" color='secondary'>
        <Toolbar>
        travel_diary
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;