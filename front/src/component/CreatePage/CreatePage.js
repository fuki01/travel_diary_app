import { Box, Grid,Button } from '@material-ui/core';
import React, { Component } from 'react';
import Form from './Form';
import '../../style/createPage.css';

class CreatePage extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.history.push({
      pathname: '/',
      state: {position: this.props.address}
    });
  }

  render(){
    console.log(this.props.location.state.position)
    return(
      <div>
        <Box m={2}>
           <Button variant="contained"  color="primary" onClick={this.handleClick} style={{fontSize:5, width:0.1}}>←</Button>
        </Box>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
        <Box m={10}>
          <p>{this.props.location.state.position}</p>
        </Box>
        <Box>
          <Form />
        </Box>
        </Grid>
      </div>
    );
  }
}
export default CreatePage;
