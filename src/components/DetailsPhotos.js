import React from 'react'
import uuid from 'uuid';

export default function DetailsPhotos({details}) {
    return (
      <div className="detailsPhotos__wrapper">
        {details.photos &&
          details.photos.map(photo => (
            <div
              key={uuid()}
              className="detailPhoto__photo-wrapper"
              style={{
                background: `url(${photo}) no-repeat`,
                backgroundSize: "cover"
              }}
            ></div>
          ))}
      </div>
    );
}
