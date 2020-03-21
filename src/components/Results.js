import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid";
import InteriorMap from "./InteriorMap";
import Modal from "react-modal";
import numeral from "numeral";

Modal.setAppElement("#root");

function Results({
  propStatus,
  address,
  propId,
  listId,
  photo,
  price,
  type,
  lat,
  lon
}) {
  const [hood, setHood] = useState("none");
  const [latLon, setLatLon] = useState({
    lat: "",
    lon: ""
  });
  const [schools, setSchools] = useState({
    schools: [],
    districs: []
  });
  const [menu, setMenu] = useState("overview");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ids, setIds] = useState({
    propId: "",
    listId: "",
    propStatus: ""
  });
  const [details, setDetails] = useState({
    photos: [],
    propertyType: "",
    price: 0,
    beds: "",
    baths: "",
    sqrft: 0,
    yearBuilt: 0,
    listingAgent: "",
    name: "",
    email: "",
    photoCentered: "",

    description: "",
    loanAmount: 0,
    rate: 0,
    term: 0,
    monthlyPayment: 0,
    principle_interest: 0,
    monthPropertyTax: 0,
    monthlyHomeInsurance: 0,
    monthlyMortgageInsurance: 0,
    totalPayment: 0,
    downPayment: 0,
    listingDateValue: 0,
    addressNeighborhood: ""
  });
  useEffect(() => {
    if (details.photos.length > 0) {
      setModalIsOpen(true);
    }
  }, [details]);

  useEffect(() => {
    if (ids.propId !== "") {
      fetch(
        `https://realtor.p.rapidapi.com/properties/detail?listing_id=${ids.listId}&prop_status=${ids.propStatus}&property_id=${ids.propId}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key":
              "72335bc7bcmsh9cc768e8c93a992p140efbjsnc1630856fdcb"
          }
        }
      )
        .then(response => {
          const json = response.json();
          return json;
        })
        .then(json =>
          setDetails({
            photos: json.listing.photos.map(photo => photo.href),
            propertyType: json.listing.raw_prop_type,
            price: json.listing.price,
            beds: json.listing.beds,
            baths: json.listing.baths,
            sqrft: json.listing.sqft,
            yearBuilt: json.listing.year_built,
            listingAgent: json.listing.agent.name,
            email: json.listing.agent.email,
            phoneNumber: json.listing.agent.phone1
              ? json.listing.agent.phone1.number
              : "Agent number not provided",
            photoCentered:
              json.listing.agent.photo !== undefined
                ? json.listing.agent.photo.href
                : "https://www.achievesuccesstutoring.com/wp-content/uploads/2019/05/no-photo-icon-22.jpg-300x300.png",
            description: json.listing.description,
            loanAmount: json.listing.mortgage.estimate.loan_amount,
            rate: json.listing.mortgage.estimate.rate,
            term: json.listing.mortgage.estimate.term,
            monthlyPayment: json.listing.mortgage.estimate.monthly_payment,
            principal_interest:
              json.listing.mortgage.estimate.principal_and_interest,
            monthPropertyTax:
              json.listing.mortgage.estimate.monthly_property_taxes,
            monthlyHomeInsurance:
              json.listing.mortgage.estimate.monthly_home_insurance,
            totalPayment: json.listing.mortgage.estimate.total_payment,
            downPayment: json.listing.mortgage.estimate.down_payment,
            listingDateValue:
              json.listing.client_display_text.listing_date_value,
            addressNeighborhood:
              json.listing.client_display_text.address_with_neighborhood,
            propertyDisplayName:
              json.listing.client_display_text.prop_type_display_name
          })
        )
        .catch(err => {
          console.log(err);
        });
    }
  }, [ids]);

  useEffect(() => {
    if (hood === "schools") {
      fetch(
        `https://realtor.p.rapidapi.com/schools/list-nearby?lon=${latLon.lon}&lat=${latLon.lat}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key":
              "72335bc7bcmsh9cc768e8c93a992p140efbjsnc1630856fdcb"
          }
        }
      )
        .then(response => {
          const json = response.json();
          console.log(json);
          return json;
        })
        .then(json =>
          setSchools({
            schools: json.schools.map(school => school),
            districts: json.districts.map(district => district)
          })
        )
        .catch(err => {
          console.log(err);
        });
    }
  }, [hood, latLon]);

  const handleClick = (propId, listId, propStatus, lat, lon) => {
    setIds({
      propId,
      listId,
      propStatus
    });
    setLatLon({
      lat,
      lon
    });
  };

  return (
    <div>
      <div>
        <Link
          onClick={() => handleClick(propId, listId, propStatus, lat, lon)}
          to={"/"}
          style={{ textDecoration: "none" }}
        >
          <div className="results__card">
            <div className="results__photo-container">
              <div
                className="results__background-photo"
                style={{
                  backgroundImage: `url(${photo})`
                }}
              ></div>
            </div>
            <h3>{price}</h3>
            <h5>{address}</h5>

            <h6>{type}</h6>
          </div>
        </Link>
      </div>
      <Modal
        className="results__modal"
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <button onClick={() => setModalIsOpen(false)}>X</button>
        <div className="results__modal-container">
          {" "}
          <div className="results__modal-photos-wrapper">
            {details.photos.length > 0 &&
              details.photos.map(photo => (
                <div
                  key={uuid()}
                  className="results__modal-photo-wrapper"
                  style={{
                    background: `url(${photo}) no-repeat`,
                    backgroundSize: "cover"
                  }}
                ></div>
              ))}
          </div>
          <div className="results__modal-details_container">
            <div className="results__modal-details-title">
              <h3>Haven</h3>
            </div>

            <div className="results__modal-details-sub">
              <h3 className="results__modal-details-spans">
                <span className="price">
                  {numeral(details.price).format("$0,0")}{" "}
                </span>{" "}
                <span className="num">{details.beds}</span>{" "}
                <span className="abr">bds </span>{" "}
                <span className="break">|</span>{" "}
                <span className="num">{details.baths}</span>{" "}
                <span className="abr"> ba </span>
                <span className="break">|</span>{" "}
                <span className="num">{details.sqrft}</span>{" "}
                <span className="abr">sqft </span>
              </h3>

              <h4 className="results-modal-address">
                {details.addressNeighborhood}
              </h4>
            </div>
            <div>
              <hr className="results__modal-hr" />
              <div className="results__modal-menu">
                <button
                  className="buttons buttons--logout"
                  onClick={() => setMenu("overview")}
                >
                  overview
                </button>
                <button
                  className="buttons buttons--logout"
                  onClick={() => setMenu("realtor")}
                >
                  realtor info
                </button>
                <button
                  className="buttons buttons--logout"
                  onClick={() => setMenu("financial")}
                >
                  financial
                </button>
                <button
                  className="buttons buttons--logout"
                  onClick={() => setMenu("neighborhood")}
                >
                  neighborhood
                </button>
              </div>
              <hr className="results__modal-hr" />
            </div>

            <div className="results__modal-belowButtons">
              {menu === "overview" && <h4>{details.description}</h4>}
              {menu === "realtor" && (
                <div className="results__modal-realtor">
                  <div className="results__modal-realtor-details">
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
                  <div className="results__modal-realtor-photo">
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
                <div>
                  <h5>
                    Estimated Principle Interest:{" "}
                    {numeral(details.principal_interest).format("$0,0")}
                  </h5>
                  <h5>
                    {" "}
                    Estimated Loan Amount:{" "}
                    {numeral(details.loanAmount).format("$0,0")}
                  </h5>
                  <h5>
                    {" "}
                    Estimated Property Tax:{" "}
                    {numeral(details.monthPropertyTax).format("$0,0")}
                  </h5>
                  <h5>
                    {" "}
                    Estimated Monthly Home Insurance:
                    {numeral(details.monthlyHomeInsurance).format("$0,0")}
                  </h5>
                  <h5>
                    {" "}
                    Estimated Monthly Mortgage Payment:{" "}
                    {numeral(details.monthlyPayment).format("$0,0")}
                  </h5>
                  <h5>
                    {" "}
                    Estimated Monthly Mortgage Insurance:
                    {numeral(details.monthlyMortgageInsurance).format("$0,0")}
                  </h5>
                  <h5>
                    {" "}
                    Estimated Down Payment:{" "}
                    {numeral(details.downPayment).format("$0,0")}
                  </h5>
                  <h5>
                    {" "}
                    How Long Property Been Listed: {details.listingDateValue}
                  </h5>
                  <h5>
                    Estimated Mortgage Rate:{" "}
                    {numeral(details.rate).format("0%")}
                  </h5>
                  <h5>Estimated Term {details.term} years</h5>
                </div>
              )}
              {menu === "neighborhood" && (
                <div className="results__neighborhood-container">
                  <div className="results__neighborhood-buttons-wrapper">
                    <button
                      onClick={() => setHood("schools")}
                      className="buttons buttons--logout"
                    >
                      Schools
                    </button>
                    <button className="buttons buttons--logout">
                      Sex Offenders
                    </button>
                    <button className="buttons buttons--logout">Crime</button>
                  </div>
                  <div className="results__neighborhood-info-box">
                    {hood === "none" && (
                      <div className="results__hood-none-container">
                        <h4>Click a button for Information</h4>
                      </div>
                    )}
                    {hood === "schools" && (
                      <div className="results__hood-schools-container">
                        
                        {schools.schools.length > 0 &&
                          schools.schools.map(school => (
                            <h6 key={school.name}
                            >
                              {school.name} </h6>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div>
              <hr />
              <InteriorMap
                schoolsLatLon={
                  schools.schools.length > 0 ? schools.schools : null
                }
                latLon={latLon}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Results;
