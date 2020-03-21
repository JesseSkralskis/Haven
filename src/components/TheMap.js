import React, { useState } from "react";
import uuid from "uuid";
import mapStyle from "../styles/mapStyles/lightDark";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { Link } from "react-router-dom";

function Map({ data, cordinates }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const handleClick = prop => {
    console.log(prop);
  };

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={cordinates}
      defaultOptions={{
        styles: mapStyle,
        gestureHandling: "greedy"
      }}
    >
      {data.map(property => (
        <Marker
          key={uuid()}
          position={{
            lat: property.lat,
            lng: property.lon
          }}
          onMouseOver={() => setSelectedProperty(property)}
          icon={{
            url: "images/iconHouse.png",
            scaledSize: new window.google.maps.Size(83, 45)
          }}
        />
      ))}
      {selectedProperty && (
        <InfoWindow
          position={{
            lat: selectedProperty.lat,
            lng: selectedProperty.lon
          }}
          onCloseClick={() => setSelectedProperty(null)}
        >
          <Link
            style={{ textDecoration: "none" }}
            to="/"
            onClick={() => handleClick(selectedProperty)}
          >
            <div className="map__info-window">
              <img
                style={{
                  width: "100px",
                  height: "50px"
                }}
                src={selectedProperty.photo}
                alt="pic"
              />
              <h4>{selectedProperty.price}</h4>
              <h6>{selectedProperty.address}</h6>
            </div>
          </Link>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
//withscripts imbeds the correct scripts for map to work correctly in react
// adding higer order components
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function TheMap({ locationData, cordinates }) {
  return (
    <div style={{ width: "50vw", height: "50vw" }}>
      <WrappedMap
        cordinates={cordinates}
        data={locationData}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%`, width: "100%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
