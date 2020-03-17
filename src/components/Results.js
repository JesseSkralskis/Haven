import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid";
import Modal from "react-modal";
import numeral from "numeral";

Modal.setAppElement("#root");

export default function Results({
  propStatus,
  address,
  propId,
  listId,
  photo,
  price,
  type
}) {
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
      console.log(details.photos);
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
            photoCentered: json.listing.agent.face_centered_photo,

            description: json.listing.description,
            loanAmount: json.listing.mortgage.estimate.loan_amount,
            rate: json.listing.mortgage.estimate.rate,
            term: json.listing.mortgage.estimate.term,
            monthlyPayment: json.listing.mortgage.estimate.monthly_payment,
            principle_interest:
              json.listing.mortgage.estimate.principle_and_interest,
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

  const handleClick = (propId, listId, propStatus) => {
    setIds({
      propId,
      listId,
      propStatus
    });
  };

  return (
    <div>
      <div>
        <Link
          onClick={() => handleClick(propId, listId, propStatus)}
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
          <div className="results__modal-details-headers_container">
            <div className="results__modal-details-title">
              <h3>Haven</h3>
            </div>

            <div className="results__modal-details-sub">
              <h3 className="results__modal-details-spans">
                <span className="price">
                  {numeral(details.price).format("$0,0.00")}{" "}
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
          </div>
        </div>
      </Modal>
    </div>
  );
}
