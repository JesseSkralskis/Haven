import React from "react";

export default function DetailsTitle({ handleRemovePage }) {
  return (
    <div className="details__details-title">
      <h3>Haven</h3>
      <button onClick={() => handleRemovePage()}>x</button>
    </div>
  );
}
