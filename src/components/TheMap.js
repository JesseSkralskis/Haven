import React, { useState } from "react";
import uuid from "uuid";
import mapStyle from "../styles/mapStyles/lightDark";
import { setIds } from "../actions/property";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Map({ data, cordinates, setIds, history }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const handleClick = () => {
    console.log(history);
    setIds(
      selectedProperty.propId,
      selectedProperty.listId,
      selectedProperty.propStatus,
      selectedProperty.lat,
      selectedProperty.lon
    );
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
            onClick={() => handleClick()}
            to={"/details"}
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

export function TheMap({ locationData, cordinates, setIds, history }) {
  return (
    <div style={{ width: "50vw", height: "50vw" }}>
      <WrappedMap
        history={history}
        setIds={setIds}
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

const mapDispatchtoProps = dispatch => ({
  setIds: (propId, listId, propStatus, lat, lon) =>
    dispatch(setIds(propId, listId, propStatus, lat, lon))
});

export default connect(undefined, mapDispatchtoProps)(TheMap);
