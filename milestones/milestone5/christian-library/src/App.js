import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import UpdateMedia from "./UpdateMedia";
// import DeleteMedia from "./DeleteMedia";
// import ViewMediaDetails from "./ViewMediaDetails";
import dataSource from "./dataSource";

const App = () => {
  const [mediaList, setMediaList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [currentlySelectedMediaId, setCurrentlySelectedMediaId] =
    useState(null);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      const response = await dataSource.get("/media");
      setMediaList(response.data);
    } catch (error) {
      console.error("Error fetching media items:", error);
    }
  };

  const updateSearchResults = (phrase) => {
    setSearchPhrase(phrase);
  };

  const filteredMediaList = mediaList.filter((media) => {
    return (
      media.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      media.author.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      searchPhrase === ""
    );
  });

  const selectMediaItem = (id, navigate, uri) => {
    setCurrentlySelectedMediaId(id);
    navigate(`${uri}/${id}`);
  };

  const onMediaUpdated = (navigate) => {
    loadMedia();
    navigate("/");
  };

  const deleteMediaItem = async (id, navigate) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this media item?"
    );
    if (confirmDelete) {
      try {
        await dataSource.delete(`/media/${id}`);
        console.log(`Media item with ID ${id} deleted successfully.`);
        loadMedia();
        navigate("/");
      } catch (error) {
        console.error("Error deleting media item:", error);
      }
    }
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={
            <HomePage
              updateSearchResults={updateSearchResults}
              mediaList={filteredMediaList}
              selectMediaItem={selectMediaItem}
              deleteMediaItem={deleteMediaItem}
            />
          }
        />
        <Route exact path="/create" element={<UpdateMedia onMediaUpdated={onMediaUpdated} />} />
        <Route exact path="/update/:mediaId" element={
            <UpdateMedia
              media={mediaList.find((media) => media.mediaId === parseInt(currentlySelectedMediaId))}
              onMediaUpdated={onMediaUpdated}
            />
          }
        />
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/create" element={<CreateMedia onMediaUpdated={onMediaUpdated} />} />
        <Route exact path="/update/:mediaId" element={
            <UpdateMedia
              media={mediaList.find(
                (media) => media.id === currentlySelectedMediaId
              )}
              onMediaUpdated={onMediaUpdated}
            />
          }
        />
        <Route exact path="/delete" element={
            <DeleteMedia
              mediaList={mediaList}
              onMediaUpdated={onMediaUpdated}
            />
          }
        />
        <Route exact path="/media/:mediaId" element={
            <ViewMediaDetails
              media={mediaList.find(
                (media) => media.mediaId === currentlySelectedMediaId
              )}
            />
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
