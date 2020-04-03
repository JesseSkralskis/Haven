import React from "react";
import uuid from "uuid";
import LoadingPage from "./LoadingPage";
import LoadingIndicator from "./LoadingIndicator";

export default function DetailsPhotos({ details }) {
  console.log(details.photos);
  return (
    <div>
      <LoadingIndicator />
      <div className="detailsPhotos__wrapper">
        {details.photos === "This property has no available Photos" ||
        details.photos === undefined ? (
          <div></div>
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
