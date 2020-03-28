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

function Map({ lat, lon, schoolsLatLon }) {
  console.log(`@@@@@@@@@@@@@@${lat}  @@@@@@@@@@@@@@@@${lon}`);
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{
        lat: lat,
        lng: lon
      }}
      defaultOptions={{
        styles: mapStyle,
        gestureHandling: "greedy"
      }}
    >
      <Marker
        position={{
          lat: lat,
          lng: lon
        }}
        // onMouseOver={() => setSelectedProperty(property)}
        icon={{
          url: "images/iconHouse.png",
          scaledSize: new window.google.maps.Size(85, 50)
        }}
      />
      {schoolsLatLon !== null &&
        schoolsLatLon.map(school => {
          console.log(`@@@@@@@@@@@ ${JSON.stringify(school.lat)}`);
          return (
            <Marker
              key={uuid()}
              position={{
                lat: school.lat,
                lng: school.lon
              }}
            />
          );
        })}

      {selectedProperty && (
        <InfoWindow
          position={{
            lat: selectedProperty.lat,
            lng: selectedProperty.lon
          }}
          onCloseClick={() => setSelectedProperty(null)}
        >
          <div>
            <img src={selectedProperty.photo} alt="pic" />
            <h4>{selectedProperty.price}</h4>
            <h3>{selectedProperty.address}</h3>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
//withscripts imbeds the correct scripts for map to work correctly in react
// adding higer order components
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function InteriorMap({ lat, lon, schoolsLatLon }) {
  return (
    <div
      className="results__modal-map"
      style={{ width: "30vw", height: "27rem" }}
    >
      <WrappedMap
        schoolsLatLon={schoolsLatLon}
        lat={lat}
        lon={lon}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%`, width: "100%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
