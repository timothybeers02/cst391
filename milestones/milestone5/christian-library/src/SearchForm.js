import React, { useState } from "react";
import "./SearchForm.css"; // Import custom CSS

const SearchForm = ({ onSubmit }) => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchPhrase);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search by title or author..."
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
