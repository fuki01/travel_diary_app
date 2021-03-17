import React from "react";
import { InfoWindow} from "@react-google-maps/api";
import { Button } from "@material-ui/core";

class Place extends React.Component{
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
          <p>ここに日記を作成</p>
          <Button variant="outlined" color="primary" href="#outlined-buttons">
            作成
          </Button>
          </div>
        </InfoWindow>
      </div>
    )
  }
}
export default Place;