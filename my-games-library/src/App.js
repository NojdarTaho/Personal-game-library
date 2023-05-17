import Home from "./components/Home";
import NavBar from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameLibrary from "./components/GameCollection";
import { LibraryProvider } from "./context/LibraryContext";
import GameDetails from "./components/GameDetails";
function App() {
  return (
    <div className="App">
      <LibraryProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<GameLibrary />} />
            <Route path="games/:id" element={<GameDetails />} />
          </Routes>
        </Router>
      </LibraryProvider>
    </div>
  );
}

export default App;
