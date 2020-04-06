import React from "react";
import SexOffenders from "./SexOffenders";
import LoadingIndicator from "./LoadingIndicator";
import DetailsFinancial from "./DetailsFinacial";

export default function DetailsMenuResults({
  menu,
  details,
  numeral,
  setHood,
  hood,
  schools
}) {

  
  return (
    <div className="details__menuResults-container">
      {menu === "overview" && <h4>{details.description}</h4>}
      {menu === "realtor" && (
        <div className="details__menuResults-realtor-container">
          <div className="details__menuResults-realtor-details">
            <h4>{details.listingAgent}</h4>
            <h4>{details.email}</h4>
            {details.phoneNumber !== "no number" &&
            details.phoneNumber.indexOf("(") === -1 ? (
              <h4>
                {details.phoneNumber.slice(0, 3) +
                  "-" +
                  details.phoneNumber.slice(3, 6) +
                  "-" +
                  details.phoneNumber.slice(6, 10)}
              </h4>
            ) : (
              <h4>{details.phoneNumber}</h4>
            )}
          </div>
          <div className="details__menuResults-realtorPhoto">
            <img
              style={{
                width: "160px",
                height: "208px"
              }}
              src={details.photoCentered}
              alt="realtor pic"
            />
          </div>
        </div>
      )}
      {menu === "financial" && (
        <DetailsFinancial numeral={numeral} details={details} />
      )}
      {menu === "neighborhood" && (
        <div className="details__menuResults-hood-container">
          <div className="details__menuResults-hood-buttonWrapper">
            <button
              onClick={() => setHood("schools")}
              className="buttons buttons--logout"
            >
              Schools
            </button>
            <button
              onClick={() => setHood("sex")}
              className="buttons buttons--logout"
            >
              Sex Offenders
            </button>
          </div>
          <hr className="details__menu-hr" />
          <div className="details__menuResults-hood-infobox-wrapper">
            <div className="details__menuResults-hood-infoBox">
              {hood === "none" && (
                <div className="details__menuResults-hood-empty">
                  <h4>Click a button for Information</h4>
                </div>
              )}
              {hood === "schools" && (
                <div className="details__menuResults-school-container">
                  <div className="details_menuResults-school-loading">
                    <LoadingIndicator />
                  </div>
                  {schools.schools.length > 0 &&
                    schools.schools.map(school => (
                      <div>
                        <h6 key={school.name}>
                          {school.name}{" "}
                          <span className="details__MenuResults-schools-span">
                            {school.phone}
                          </span>{" "}
                        </h6>
                      </div>
                    ))}
                </div>
              )}
              {hood === "sex" && <SexOffenders zip={details.zip} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
