import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Results from "./Results";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import TheMap from "./TheMap";
import uuid from "uuid";

const Search = () => {
  const [apiData, setApiData] = useState([]);
  const [address, setAddress] = useState("");
  const [search, setSearch] = useState("");
  const [cordinates, setCordinates] = useState({ lat: null, lng: null });
  const [cityState, setcityState] = useState({
    city: "",
    state: ""
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);

    const addressSplit = value.split(",");
    const city = addressSplit[0];
    const stateCode = addressSplit[1];

    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setcityState({
      city: city,
      state: stateCode
    });

    realtorSearch(city, stateCode).then(result => setApiData(result));

    setCordinates(latLng);
  };

  const realtorSearch = async (city, state) => {
    try {
      const response = await fetch(
        `https://realtor.p.rapidapi.com/properties/list-for-sale?sort=relevance&radius=10&city=${city}&offset=0&limit=20&state_code=${state}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key":
              "72335bc7bcmsh9cc768e8c93a992p140efbjsnc1630856fdcb"
          }
        }
      );
      const res = await response.json();
      return res.listings.map(listing => ({
        propStatus: listing.prop_status,
        propId: listing.property_id,
        listId: listing.listing_id,
        type: listing.prop_type,
        lat: listing.lat,
        lon: listing.lon,
        photo: listing.photo,
        address: listing.address,
        price: listing.price
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={
        apiData.length === 0 ? "search__container" : "results__container"
      }
    >
      {apiData.length === 0 && (
        <div>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
            searchOptions={{
              types: ["(cities)"],
              componentRestrictions: { country: "us" }
            }}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div className="search__input-wrapper">
                <input
                  className="search__input"
                  {...getInputProps({ placeholder: "Search for a city" })}
                />
                <div>
                  {loading ? <div>...loading </div> : null}
                  {suggestions.map(suggestion => {
                    const style = {
                      backgroundColor: suggestion.active
                        ? "#a6909c"
                        : "#cec4d4",
                      fontSize: "150%"
                    };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      )}

      {apiData.length > 0 && (
        <div className="search__scrollbar-removal">
          <div className="search__results">
            {apiData.length > 0 &&
              apiData.map(property => (
                <Results key={property.propId} {...property} />
              ))}
          </div>
        </div>
      )}

      <div className="search__map">
        {apiData.length > 0 && (
          <TheMap cordinates={cordinates} key={uuid()} locationData={apiData} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
