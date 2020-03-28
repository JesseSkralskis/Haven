import React from "react";
import SexOffenders from './SexOffenders';

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
            {details.phoneNumber.indexOf("(") === -1 ? (
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
        <div className="details__menuResults-financialContainer">
          <h5>
            Estimated Principle Interest:{" "}
            <span>{numeral(details.principal_interest).format("$0,0")}</span>
          </h5>
          <h5>
            {" "}
            Estimated Loan Amount:{" "}
            <span> {numeral(details.loanAmount).format("$0,0")}</span>{" "}
          </h5>
          <h5>
            {" "}
            Estimated Property Tax:{" "}
            <span>{numeral(details.monthPropertyTax).format("$0,0")}</span>
          </h5>
          <h5>
            {" "}
            Estimated Monthly Home Insurance:{" "}
            <span>{numeral(details.monthlyHomeInsurance).format("$0,0")}</span>
          </h5>
          <h5>
            {" "}
            Estimated Monthly Mortgage Payment:{" "}
            <span>{numeral(details.monthlyPayment).format("$0,0")}</span>
          </h5>
          <h5>
            {" "}
            Estimated Monthly Mortgage Insurance:{" "}
            <span>
              {" "}
              {numeral(details.monthlyMortgageInsurance).format("$0,0")}
            </span>
          </h5>
          <h5>
            {" "}
            Estimated Down Payment:{" "}
            <span>{numeral(details.downPayment).format("$0,0")}</span>
          </h5>
          <h5>
            {" "}
            How Long Property Been Listed:{" "}
            <span>{details.listingDateValue}</span>
          </h5>
          <h5>
            Estimated Mortgage Rate:{" "}
            <span>{numeral(details.rate).format("0%")}</span>
          </h5>
          <h5>
            Estimated Term: <span>{details.term}</span> years
          </h5>
        </div>
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
            <button onClick={()=> setHood('sex')} className="buttons buttons--logout">Sex Offenders</button>
            <button className="buttons buttons--logout">Crime</button>
          </div>
          <div className="details__menuResults-hood-infoBox">
            {hood === "none" && (
              <div className="details__menuResults-hood-empty">
                <h4>Click a button for Information</h4>
              </div>
            )}
            {hood === "schools" && (
              <div className="details__menuResults-school-container">
                {schools.schools.length > 0 &&
                  schools.schools.map(school => (
                    <h6 key={school.name}>{school.name} </h6>
                  ))}
              </div>
              
            )}
          </div>
        </div>
      )}
      {hood==='sex'&& <SexOffenders/>}
    </div>
  );
}
