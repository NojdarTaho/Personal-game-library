import React, { useState } from "react";
import GamesList from "./GamesList";
import useFetch from "../hooks/useFetch";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchedQuery, setSearchedQuery] = useState("");
  const apiKey = "8fc295b55f7144f7b20c401bf545e96a";
  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/games?page_size=40&search=${searchedQuery}&key=${apiKey}`
  );

  const games = data && data.results;

  const handleSearch = () => {
    setSearchedQuery(query);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (isPending) {
    return <div className="loader-container"> {isPending}</div>;
  }

  return (
    <div className="search-bar-container">
      <label htmlFor="search-input">Search</label>
      <input
        id="search-input"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchedQuery &&
        games !== undefined &&
        (games.length === 0 ? (
          <h2>No results have been found</h2>
        ) : (
          <GamesList games={games} />
        ))}
    </div>
  );
}

export default SearchBar;
