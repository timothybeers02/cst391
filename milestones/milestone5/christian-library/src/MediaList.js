import React from "react";
import MediaCard from "./MediaCard";
import { useNavigate } from "react-router-dom";

const MediaList = (props) => {
  const navigate = useNavigate();

  const handleSelectionOne = (mediaId, uri) => {
    console.log("Selected ID is " + mediaId);
    props.onClick(mediaId, navigate, uri);
  };

  const handleDeleteMedia = (mediaId) => {
    props.onDelete(mediaId, navigate);
  };

  console.log("props mediaList", props);

  const mediaItems = props.mediaList.map((media) => {
    return (
      <MediaCard
        key={media.mediaId}
        mediaId={media.mediaId}
        mediaTitle={media.title}
        mediaDescription={media.description}
        mediaAuthor={media.author}
        mediaType={media.mediaType}
        buttonText="View"
        onClick={handleSelectionOne}
        onDelete={handleDeleteMedia}
      />
    );
  });

  return <div className="container">{mediaItems}</div>;
};

export default MediaList;
