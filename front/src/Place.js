import React from "react";
import { InfoWindow} from "@react-google-maps/api";

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
          <p>ここに日記を作成</p>
        </InfoWindow>
      </div>
    )
  }
}
export default Place;