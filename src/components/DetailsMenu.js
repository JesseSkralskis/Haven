import React from "react";

export default function DetailsMenu({ setMenu }) {
  return (
    <div>
      <hr className="details__menu-hr" />
      <div className="details__menue-container">
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
  );
}
