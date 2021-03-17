import React, { Component } from 'react';

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Place from './Place';
import { Button, Box } from '@material-ui/core';
import '../../style/mainPage.css'
const containerStyle = {
  width: '100%',
  height: '700px'
};

const center = {
  lat: 36,
  lng: 138
};

class Main extends Component {
  constructor(){
    super();
    this.state = {
      position: {"lat": 36, "lng": 138},
      infoWindowClose: false,
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.infoWindowClose = this.infoWindowClose.bind(this);

  }

  onMarkerClick = (props) => {
    let item = { lat: props.latLng.lat()};
    item.lng = props.latLng.lng();
    this.setState({ position: item })
  };
  
  infoWindowClose = (props) => {
    if (this.state.infoWindowClose) {
      this.setState({ infoWindowClose: false })
    }else{
      this.setState({ infoWindowClose: true })
    }
  };

  render() {
    return (
        <LoadScript
          googleMapsApiKey="AIzaSyBvIbttKIf9VoZRberZuBxQb759JtffdxU"
        >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
          onClick={this.onMarkerClick}
          >
          {this.state.infoWindowClose && (
            <Place position={this.state.position} />
            )}
        </GoogleMap>
        <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        {this.state.infoWindowClose ?(
          <Box m={2}>
          <Button variant="contained" color="secondary" m={10} onClick={this.infoWindowClose}>にっき場所取り消し</Button>
          </Box>
        ):(
          <Box m={2}>
          <Button variant="contained" color="secondary" onClick={this.infoWindowClose}>にっき場所場所選択</Button>
          </Box>
        )}
          <Box m={2}>
          <Button variant="contained" color="secondary" m={10} onClick={this.infoWindowClose}>みんなのにっきの表示</Button>
          </Box>
          <Box m={2}>
          <Button variant="contained" color="secondary" m={10} onClick={this.infoWindowClose}>お気に入りのにっきを表示</Button>
          </Box>
        </Box>

      </LoadScript>
    )
  }
}
export default Main;