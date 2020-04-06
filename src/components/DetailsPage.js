import React, { useState, useEffect } from "react";
import { setIds } from "../actions/property";
import { setGlobalDetails } from "../actions/detailsSearch";
import numeral from "numeral";
import { connect } from "react-redux";
import uuid from "uuid";
import InteriorMap from "./InteriorMap";
import { schoolSearch } from "../utilities/apiCalls";
import { detailsSearch } from "../utilities/apiCalls";
import { history } from "../routes/AppRouter";
import DetailsPhotos from "./DetailsPhotos";
import DetailsTitle from "./DetailsTitle";
import DetailsHouseInfo from "./DetailHouseInfo";
import DetailsMenu from "./DetailsMenu";
import DetailsMenuResults from "./DetailsMenuResults";
import { trackPromise } from "react-promise-tracker";
import LoadingIndicator from "./LoadingIndicator";

export function DetailsPage({
  details,
  mlat,
  mlon,
  mpropId,
  mlistId,
  mpropStatus,
  offendersData,
  setGlobalDetails
}) {
  const [hood, setHood] = useState("none");
  const [schools, setSchools] = useState({
    schools: [],
    districs: []
  });
  const [menu, setMenu] = useState("overview");

  useEffect(() => {
    console.log(mpropId, mlistId, mpropStatus);
    if (mpropId) {
      trackPromise(
        detailsSearch(mpropId, mlistId, mpropStatus).then(res =>
          setGlobalDetails(res)
        )
      );
    }
    console.log("componentEffectFired");
  }, []);

  const handleRemovePage = () => {
    history.push("/resmap");
  };

  //get schools from api and then sets the local state
  useEffect(() => {
    if (hood === "schools") {
      trackPromise(
        schoolSearch(mlat, mlon).then(res => {
          setSchools(res);
        })
      );
    }
  }, [hood, mlat, mlon]);

  return (
    <div className="detailsResults-container">
      <div className="detailsResults-photoWrapper">
        <DetailsPhotos details={details} />
      </div>

      <div className="details__detail-container">
        <DetailsTitle handleRemovePage={handleRemovePage} />
        <DetailsHouseInfo details={details} numeral={numeral} />
        <DetailsMenu setMenu={setMenu} />
        <DetailsMenuResults
          details={details}
          numeral={numeral}
          menu={menu}
          setHood={setHood}
          hood={hood}
          schools={schools}
        />

        <div className="details__details-map">
          <div>
            <hr className="details__menu-hr" />
          </div>
          <InteriorMap
            offendersData={offendersData}
            schools={schools.schools.length > 0 ? schools.schools : null}
            lat={mlat}
            lon={mlon}
          />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  details: state.detailsSearch,
  mlat: state.ids.propId.lat ? state.ids.propId.lat : state.ids.lat,
  mlon: state.ids.propId.lon ? state.ids.propId.lon : state.ids.lon,
  mpropId: state.ids.propId.propId ? state.ids.propId.propId : state.ids.propId,
  mlistId: state.ids.propId.listId ? state.ids.propId.listId : state.ids.listId,
  mpropStatus: state.ids.propId.propStatus
    ? state.ids.propId.propStatus
    : state.ids.propStatus,
  offendersData: state.offenders.offenders
});

const mapDispatchToProps = dispatch => ({
  setIds: (propId, listId, propStatus, lat, lon) =>
    dispatch(setIds(propId, listId, propStatus, lat, lon)),
  setGlobalDetails: data => dispatch(setGlobalDetails(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
