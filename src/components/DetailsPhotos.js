import React from "react";
import uuid from "uuid";

import LoadingIndicator from "./LoadingIndicator";

export default function DetailsPhotos({ details }) {
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
          <div> </div>
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
