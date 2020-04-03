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

function Map({ lat, lon, schools, offendersData }) {
  console.log(offendersData[0]);
  const [selectedOffender, setSelectedOffender] = useState(null);
  const [selectedSchoolProperty, setSelectedSchoolProperty] = useState(null);

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
      {offendersData &&
        offendersData.map(offender => {
          console.log(offender.lat, typeof offender.lon);
          return (
            <Marker
              key={uuid()}
              position={{
                lat: parseFloat(offender.lat),
                lng: parseFloat(offender.lng)
              }}
              onMouseOver={() => setSelectedOffender(offender)}
              icon={{
                url: "images/handcuffs2.png",
                scaledSize: new window.google.maps.Size(50, 50)
              }}
            />
          );
        })}
      {schools !== null &&
        schools.map(school => {
          console.log(school);
          return (
            <Marker
              key={uuid()}
              position={{
                lat: school.lat,
                lng: school.lon
              }}
              onMouseOver={() => setSelectedSchoolProperty(school)}
              icon={{
                url: "images/school_icon.png",
                scaledSize: new window.google.maps.Size(30, 30)
              }}
            />
          );
        })}

      {selectedSchoolProperty && (
        <InfoWindow
          position={{
            lat: selectedSchoolProperty.lat,
            lng: selectedSchoolProperty.lon
          }}
          onCloseClick={() => setSelectedSchoolProperty(null)}
        >
          <div className="interiorMap__schools-container">
            <h3>{selectedSchoolProperty.name}</h3>
            <h4>{selectedSchoolProperty.phone}</h4>
            <h5>{selectedSchoolProperty.funding_type}</h5>

            <h5>
              grades range: {selectedSchoolProperty.grades.range.low} through{" "}
              {selectedSchoolProperty.grades.range.high}
            </h5>
            <h5>
              miles from selected house:{" "}
              {selectedSchoolProperty.distance_in_miles}
            </h5>
            <h5>student count: {selectedSchoolProperty.student_count}</h5>
            <h5>
              student to teacher ratio:{" "}
              {selectedSchoolProperty.student_teacher_ratio}
            </h5>
            <h5>
              public rating:{" "}
              {selectedSchoolProperty.ratings.great_schools_rating}
            </h5>
            <h5>
              parent rating: {selectedSchoolProperty.ratings.parent_rating}
            </h5>
          </div>
        </InfoWindow>
      )}
      {selectedOffender && (
        <InfoWindow
          position={{
            lat: parseFloat(selectedOffender.lat),
            lng: parseFloat(selectedOffender.lng)
          }}
          onCloseClick={() => setSelectedOffender(null)}
        >
          <div className="interiorMap__offender-container">
            <h2 className="interiorMap__offender-name-dob">
              {selectedOffender.name}{" "}
              <span id="interiorMap__offender-break">|</span>{" "}
              <span id="interiorMap__offender-dob">{selectedOffender.dob}</span>{" "}
            </h2>
            <h4 classname="interiorMap__offender-address">
              {selectedOffender.address}
            </h4>
            <h3 classname="interiorMap__offender-height">
              {selectedOffender.height}{" "}
              <span id="interiorMap__offender-break">|</span>{" "}
              <span id="interiorMap__offender-weight">
                {selectedOffender.weight}
              </span>
              <span id="interiorMap__offender-break">|</span>
              <span id="interiorMap__offender-eyes">
                {selectedOffender.eyes}
              </span>
              <span>eys</span>
            </h3>
            <h5 classname="interiorMap__offender-crime">
              {selectedOffender.crime}
            </h5>
            <img
              classname="interiorMap__offender-photo"
              src={selectedOffender.photo}
              alt="offender"
            />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
//withscripts imbeds the correct scripts for map to work correctly in react
// adding higer order components
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function InteriorMap({ lat, lon, schools, offendersData }) {
  return (
    <div
      className="results__modal-map"
      style={{ width: "30vw", height: "34rem" }}
    >
      <WrappedMap
        offendersData={offendersData}
        schools={schools}
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
