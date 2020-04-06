import React, { useState, useEffect } from "react";
import uuid from "uuid";
import LoadingPage from "./LoadingPage";
import LoadingIndicator from "./LoadingIndicator";

export default function DetailsPhotos({ details }) {
  const [error, setError] = useState("");
  

  console.log(details.photos);
  return (
    <div className="detailsPhotos__mainWrapper">
      <div className="detailsPhotos__loading-wrapper">
        <LoadingIndicator />
      </div>

      <div className="detailsPhotos__wrapper">
        {details.photos ===
          "https://www.achievesuccesstutoring.com/wp-content/uploads/2019/05/no-photo-icon-22.jpg-300x300.png" ||
        details.photos === undefined ? (
          <div className="detailPhoto-noPhotos">{error}</div>
        ) : (
          details.photos.map(photo => (
            <div
              key={uuid()}
              className="detailPhoto__photo-wrapper"
              style={{
                background: `url(${photo}) no-repeat`,
                backgroundSize: "cover"
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}
