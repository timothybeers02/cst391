import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SearchAlbum from "./SearchAlbum";
import NavBar from "./NavBar";
import EditAlbum from "./EditAlbum";
import OneAlbum from "./OneAlbum";
import './App.css';
// import SearchForm from "./SearchForm";
// import albums from './albums.json';
import dataSource from "./dataSource";

const App = () => {
  const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(0);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [albumList, setAlbumList] = useState([]);

  let refresh = false;

  const updateSearchResults = (phrase) => {
    console.log('phrase is ' + phrase);
    setSearchPhrase(phrase);
  }

  useEffect(() => {
    loadAlbums();
  }, [refresh]);

  const loadAlbums = async () => {
    const response = await dataSource.get('/albums');

    setAlbumList(response.data);
  }

  // console.log('albumList', albumList);
  const renderedList = albumList.filter((album) => {
    if (album.description.toLowerCase().includes(searchPhrase.toLowerCase()) || searchPhrase === '')
      return true;
    return false;
  });

  const updateSingleAlbum = (id, navigate, uri) => {
    console.log("Update Single Album = ", id);
    console.log("Update Single Album = ", navigate);
    var indexNumber = 0;
    for (var i = 0; i < albumList.length; ++i) {
      if (albumList[i].id === id) indexNumber = i;
    }
    setCurrentlySelectedAlbumId(indexNumber);
    let path = uri + indexNumber;
    console.log("path", path);
    navigate(path);
  };

  const onNewAlbum = (navigate) => {
    loadAlbums();
    navigate("/");
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SearchAlbum
              updateSearchResults={updateSearchResults}
              albumList={renderedList}
              updateSingleAlbum={updateSingleAlbum}
            />
          }
        />
        <Route exact path="/new" element={<EditAlbum onNewAlbum={onNewAlbum} />} />
        <Route exact path="/edit/:albumId" element={<EditAlbum onNewAlbum={onNewAlbum} album={albumList[currentlySelectedAlbumId]}/>} />
        <Route exact path="/show/:albumId" element={<OneAlbum album={albumList[currentlySelectedAlbumId]} />} />
      </Routes>
    </BrowserRouter>
  );

};

export default App;
