import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Place from './Place';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 36,
  lng: 138
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      position: {"lat": 36, "lng": 138},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick = (props) => {
    let item = { lat: props.latLng.lat()};
    item.lng = props.latLng.lng();
    this.setState({ position: item })
  };

  render() {
    return (
      <LoadScript
        googleMapsApiKey="API_KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
          onClick={this.onMarkerClick}
          >
          <Place position={this.state.position} />
        </GoogleMap>
      </LoadScript>
    )
  }
}
export default App;