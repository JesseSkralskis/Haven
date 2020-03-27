import React from 'react'

export default function ResultsCard({photo,price,address,type}) {
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
        <h3>{price}</h3>
        <h5>{address}</h5>

        <h6>{type}</h6>
      </div>
    );
}
