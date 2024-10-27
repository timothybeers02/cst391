import React, { useState } from "react";
import dataSource from "./dataSource";
import { useNavigate } from "react-router-dom";
import './UpdateMedia.css';

const UpdateMedia = (props) => {
  // Initialize media object
  let media = {
    mediaId: "",
    title: "",
    author: "",
    description: "",
    mediaType: "",
    category: "",
    filePath: "",
  };

  // Determine if creating new media or updating existing
  let isNewMedia = true;
  if (props.media) {
    media = props.media;
    isNewMedia = false;
  }

  // State variables for form fields
  const [mediaId, setMediaId] = useState(media.mediaId);
  const [title, setTitle] = useState(media.title);
  const [author, setAuthor] = useState(media.author);
  const [description, setDescription] = useState(media.description);
  const [mediaType, setMediaType] = useState(media.mediaType);
  const [category, setCategory] = useState(media.category);
  const [filePath, setFilePath] = useState(media.filePath);

  const navigate = useNavigate();

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const mediaItem = {
      mediaId: mediaId,
      title: title,
      author: author,
      description: description,
      mediaType: mediaType,
      category: category,
      filePath: filePath,
    };

    saveMedia(mediaItem);
  };

  // Save media item (create or update)
  const saveMedia = async (mediaItem) => {
    try {
      let response;
      if (isNewMedia) {
        response = await dataSource.post("/media", mediaItem);
      } else {
        response = await dataSource.put(
          `/media/${mediaItem.mediaId}`,
          mediaItem
        );
      }
      console.log(response.data);
      props.onMediaUpdated(navigate);
    } catch (error) {
      console.error("Error saving media:", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <h1>{isNewMedia ? "Create New Media" : "Edit Media"}</h1>
        <div className="form-group">
          <label htmlFor="mediaTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="mediaTitle"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="mediaAuthor">Author</label>
          <input
            type="text"
            className="form-control"
            id="mediaAuthor"
            placeholder="Enter Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <label htmlFor="mediaDescription">Description</label>
          <textarea
            className="form-control"
            id="mediaDescription"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="mediaType">Media Type</label>
          <input
            type="text"
            className="form-control"
            id="mediaType"
            placeholder="Enter Media Type"
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
          />

          <label htmlFor="mediaCategory">Category</label>
          <input
            type="text"
            className="form-control"
            id="mediaCategory"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <label htmlFor="mediaFilePath">File Path</label>
          <input
            type="text"
            className="form-control"
            id="mediaFilePath"
            placeholder="Enter File Path"
            value={filePath}
            onChange={(e) => setFilePath(e.target.value)}
          />
        </div>
        <div align="center" style={{ marginTop: "20px" }}>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: "10px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMedia;
