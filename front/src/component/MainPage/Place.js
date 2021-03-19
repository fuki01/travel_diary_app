import React from "react";
import { InfoWindow} from "@react-google-maps/api";
import { Button } from "@material-ui/core";
import { withRouter } from 'react-router-dom';

class Place extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(){
    this.props.history.push({
      pathname: '/create',
      state: {position: this.props.address}
    });
  }
  render(){
    return(
      <div>
        <InfoWindow
          position={{
            lat: this.props.position.lat,
            lng: this.props.position.lng
          }}
          >
          <div>
          <p>{this.props.address}</p>
          <Button variant="outlined" color="primary" onClick={this.handleClick}>
            作成
          </Button>
          </div>
        </InfoWindow>
      </div>
    )
  }
}
export default withRouter(Place);