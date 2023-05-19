import { Link } from "react-router-dom";
import { LibraryContext } from "../context/LibraryContext";
import { useContext } from "react";
const NavBar = () => {
  const { collection } = useContext(LibraryContext);
  return (
    <nav className="navbar">
      <Link to={"/"} className="navbar-link">
        <h2 className="navbar-title">All genres</h2>
      </Link>
      <Link to={"/games"} className="navbar-link">
        <h2 className="navbar-title">All games</h2>
      </Link>
      <Link to={"/library"} className="navbar-link">
        <h2 className="navbar-title">Collection {collection.length}</h2>
      </Link>
      <Link to={"/search"} className="navbar-link">
        <h2 className="navbar-title">Search</h2>
      </Link>
    </nav>
  );
};

export default NavBar;
