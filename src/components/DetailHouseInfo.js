import React from "react";

export default function DetailHouseInfo({ details, numeral }) {
  return (
    <div className="details__house-info-container">
      <h3 className="details__house-info-spans">
        <span className="price">{numeral(details.price).format("$0,0")} </span>{" "}
        <span className="num">{details.beds}</span>{" "}
        <span className="abr">bds </span> <span className="break">|</span>{" "}
        <span className="num">{details.baths}</span>{" "}
        <span className="abr"> ba </span>
        <span className="break">|</span>{" "}
        <span className="num">{details.sqrft}</span>{" "}
        <span className="abr">sqft </span>
      </h3>

      <h4 className="details__house-info-address">{details.addressNeighborhood}</h4>
    </div>
  );
}
