import React from "react";
import SearchForm from "./SearchForm";
import MediaList from "./MediaList";

const HomePage = (props) => {
  console.log("HomePage props:", props);

  return (
    <div className="container">
      <SearchForm onSubmit={props.updateSearchResults} />
      <MediaList
        mediaList={props.mediaList}
        onClick={props.selectMediaItem}
        onDelete={props.deleteMediaItem}
      />
    </div>
  );
};

export default HomePage;
