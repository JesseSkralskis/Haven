import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setGlobalDetails } from "../actions/detailsSearch";
import Modal from "react-modal";
import { connect } from "react-redux";
import { setIds } from "../actions/property";
import LoadingIndicator from "./LoadingIndicator";

import ResultCard from "./ResultsCard";

Modal.setAppElement("#root");

function Results({
  history,
  mpropId,
  mlistId,
  mlat,
  mlon,
  mpropStatus,
  propStatus,
  address,
  propId,
  listId,
  photo,
  price,
  type,
  lat,
  lon,
  setIds,
  sqftRaw,
  beds,
  baths
}) {
  

  // click from link of property
  const handleClick = (propId, listId, propStatus, lat, lon) => {
    setIds({
      propId,
      listId,
      propStatus,
      lat,
      lon
    });
  };

  return (
    <div>
      <div>
        <Link
          onClick={() => handleClick(propId, listId, propStatus, lat, lon)}
          to={`/details`}
          style={{ textDecoration: "none" }}
        >
          <ResultCard
            beds={beds}
            baths={baths}
            sqft={sqftRaw}
            photo={photo}
            price={price}
            address={address}
            type={type}
          />
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setIds: (propId, listId, propStatus, lat, lon) =>
    dispatch(setIds(propId, listId, propStatus, lat, lon)),
  setGlobalDetails: data => dispatch(setGlobalDetails(data))
});
const mapStateToProps = state => ({
  mpropId: state.ids.propId !== "" ? state.ids.propId.propId : "",
  mlistId: state.ids.listId !== "" ? state.ids.propId.listId : "",
  mpropStatus: state.ids.listId !== "" ? state.ids.propId.propStatus : "",
  mlat: state.ids.lat !== "" ? state.ids.propId.lat : "",
  mlon: state.ids.lon !== "" ? state.ids.propId.lon : ""
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
