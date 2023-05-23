import { useState } from "react";
import GamesList from "../GamesLists/GamesList";
import useFetch from "../../hooks/useFetch";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchedQuery, setSearchedQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;

  // Generate the dates parameter based on the selected year
  let dates = "";
  if (selectedYear !== "all") {
    dates = `&dates=${selectedYear}-01-01,${selectedYear}-12-31`;
  }

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/games?page_size=40&search=${searchedQuery}&key=${apiKey}${dates}`
  );

  const games = data && data.results;

  const handleSearch = () => {
    setSearchedQuery(query);
  };

  const handleGenreChange = (e) => {
    setSelectedYear(e.target.value);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (isPending) {
    return <div className="loader-container"> {isPending}</div>;
  }

  const currentYear = new Date().getFullYear();
  const options = Array.from({ length: currentYear - 1979 }, (_, index) => (
    <option key={index} value={currentYear - index}>
      {currentYear - index}
    </option>
  ));

  return (
    <div className="search-bar-page">
      <div className="search-bar-container">
        <label htmlFor="search-input">Search</label>
        <input
          id="search-input"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <label htmlFor="genre-select">Release Date</label>
        <select id="genre-select" onChange={handleGenreChange}>
          <option value="all">All Years</option>
          {options}
        </select>

        <button onClick={handleSearch}>Search</button>

        {searchedQuery &&
          games !== undefined &&
          games !== null &&
          (games.length === 0 ? (
            <h2>No results have been found</h2>
          ) : (
            <GamesList games={games} />
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
