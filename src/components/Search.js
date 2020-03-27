import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { realtorSearch } from "../utilities/apiCalls";
import { getApiData } from "../actions/firstSearch";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const Search = ({ history, firstSearch }) => {
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
    setCordinates(latLng);
    realtorSearch(city, stateCode).then(result => setApiData(result));

    // history.push("/resmap");
  };

  useEffect(() => {
    if (apiData.length > 0) {
      console.log(apiData);
      console.log(cordinates);
      firstSearch(apiData, cordinates);
      history.push("resmap");
    }
  }, [apiData, firstSearch, history, cordinates]);

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
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  firstSearch: (data, cordinates) => dispatch(getApiData(data, cordinates))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
