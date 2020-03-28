import React from "react";

export default function DetailsTitle({ handleRemovePage }) {
  return (
    <div className="details__details-title">
      <h1></h1>
      <h3>Haven</h3>
      <div className="detail__detail-button">
        <button onClick={() => handleRemovePage()}>x</button>
      </div>
    </div>
  );
}
