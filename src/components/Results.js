import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Results({
  propStatus,
  address,
  propId,
  listId,
  photo,
  price,
  type
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ids, setIds] = useState({
    propId: "",
    listId: "",
    propStatus: ""
  });
  const [details, setDetails] = useState({
    photos: []
  });
  useEffect(() => {
    if (details.photos.length > 0) {
      console.log(details.photos);
      setModalIsOpen(true);
    }
  }, [details]);

  useEffect(() => {
    if (ids.propId !== "") {
      fetch(
        `https://realtor.p.rapidapi.com/properties/detail?listing_id=${ids.listId}&prop_status=${ids.propStatus}&property_id=${ids.propId}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key":
              "72335bc7bcmsh9cc768e8c93a992p140efbjsnc1630856fdcb"
          }
        }
      )
        .then(response => {
          const json = response.json();
          return json;
        })
        .then(json =>
          setDetails({ photos: json.listing.photos.map(photo => photo.href) })
        )
        .catch(err => {
          console.log(err);
        });
    }
  }, [ids]);

  const handleClick = (propId, listId, propStatus) => {
    setIds({
      propId,
      listId,
      propStatus
    });
  };
  const handleClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div>
        <Link
          onClick={() => handleClick(propId, listId, propStatus)}
          to={"/"}
          style={{ textDecoration: "none" }}
        >
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
            <h3>{propId}</h3>
            <h3>{listId}</h3>
            <h6>{type}</h6>
          </div>
        </Link>
      </div>
      <Modal
        className="results__modal"
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <button onClick={() => setModalIsOpen(false)}>X</button>
        <div className="results__modal-container">
          {" "}
          <div className="results__modal-photos-wrapper">
            {details.photos.length > 0 &&
              details.photos.map(photo => (
                <div
                  className="results__modal-photo-wrapper"
                  style={{
                    background: `url(${photo}) no-repeat`,
                    backgroundSize: "cover"
                  }}
                ></div>
              ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
