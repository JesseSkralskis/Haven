import React from 'react'
import numeral from "numeral";

export default function ResultsCard({photo,price,address,type,beds,baths,sqft}) {
    return (
      <div className="results__card">
        <div className="results__photo-container">
          <div
            className="results__background-photo"
            style={{
              backgroundImage: `url(${photo})`
            }}
          ></div>
        </div>
        <h3 className="details__house-info-spans">
          <span className="price">
            {numeral(price).format("$0,0")}{" "}
          </span>{" "}
          <span className="num">{beds}</span>{" "}
          <span className="abr">bds </span> <span className="break">|</span>{" "}
          <span className="num">{baths}</span>{" "}
          <span className="abr"> ba </span>
          <span className="break">|</span>{" "}
          <span className="num">{sqft}</span>{" "}
          <span className="abr">sqft </span>
        </h3>

        <h4 className="details__house-info-address">
          {address}
        </h4>
        {/* <h3>{price}</h3>
        <h5>{address}</h5>

        <h6>{type}</h6> */}
      </div>
    );
}
