import React from "react";
import NavBar from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameLibrary from "./components/GameCollection/GameCollection";
import { LibraryProvider } from "./context/LibraryContext";
import GameDetails from "./components/GamesDetails/GameDetails";
import SearchBar from "./components/SearchBar/SearchBar";
import AllGamesGenres from "./components/GameGenres/AllGamesGenres";
import GameGenre from "./components/GameGenres/GameGenre";
import AllGames from "./components/GamesLists/AllGames";
import GameTag from "./components/GameTags/GameTag";
import AllGamesTags from "./components/GameTags/AllGamesTags";

import FinishedComponent from "./components/UserProgressStats/FinishedComponent";
import CurrentlyPlaying from "./components/UserProgressStats/CurrentlyPlaying";
import OnHold from "./components/UserProgressStats/OnHold";
import PlanToPlay from "./components/UserProgressStats/PlanToPlay";
import Dropped from "./components/UserProgressStats/Dopped";
function App() {
  return (
    <div className="App">
      <LibraryProvider>
        <Router>
          <NavBar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<AllGamesGenres />} />
              <Route path="/tags" element={<AllGamesTags />} />
              <Route path="/games" element={<AllGames />} />
              <Route path="/library" element={<GameLibrary />} />
              <Route path="games/:id" element={<GameDetails />} />
              <Route path="/search" element={<SearchBar />} />
              <Route path="genre/:id" element={<GameGenre />} />
              <Route path="tag/:id" element={<GameTag />} />
              <Route path="/currently_playing" element={<CurrentlyPlaying />} />

              <Route path="/finished" element={<FinishedComponent />} />
              <Route path="/on_hold" element={<OnHold />} />

              <Route path="/plan_to_play" element={<PlanToPlay />} />
              <Route path="/dropped" element={<Dropped />} />
            </Routes>
          </div>
        </Router>
      </LibraryProvider>
    </div>
  );
}

export default App;
