import React from "react";
import "./MediaCard.css"; // Import custom CSS

const MediaCard = (props) => {
  const handleButtonClick = (uri) => {
    console.log("ID clicked is " + props.mediaId);
    props.onClick(props.mediaId, uri);
  };

  const handleDeleteClick = () => {
    props.onDelete(props.mediaId);
  };

  return (
    <div className="media-card">
      <div className="card-content">
        <h5 className="card-title">{props.mediaTitle}</h5>
        <p className="card-text">Author: {props.mediaAuthor}</p>
        <p className="card-text">{props.mediaDescription}</p>
        <p className="card-text">Type: {props.mediaType}</p>
        <div className="card-buttons">
          {/* <button
            onClick={() => handleButtonClick("/media")}
            className="btn btn-primary"
          >
            {props.buttonText}
          </button> */}
          <button
            onClick={() => handleButtonClick("/update")}
            className="btn btn-secondary"
          >
            Edit
          </button>
          <button onClick={handleDeleteClick} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
