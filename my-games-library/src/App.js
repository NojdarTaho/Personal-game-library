import AllGames from "./components/AllGames";
import NavBar from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameLibrary from "./components/GameCollection";
import { LibraryProvider } from "./context/LibraryContext";
import GameDetails from "./components/GamesDetails/GameDetails";
import SearchBar from "./components/SearchBar";
import AllGamesGenres from "./components/AllGamesGenres";
import GameGenre from "./components/GameGenre";
function App() {
  return (
    <div className="App">
      <LibraryProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<AllGamesGenres />} />
            <Route path="/games" element={<AllGames />} />
            <Route path="/library" element={<GameLibrary />} />
            <Route path="games/:id" element={<GameDetails />} />
            <Route path="/search" element={<SearchBar />} />
            <Route path="genre/:id" element={<GameGenre />} />
          </Routes>
        </Router>
      </LibraryProvider>
    </div>
  );
}

export default App;
