import { Link } from "react-router-dom";
import { LibraryContext } from "../context/LibraryContext";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const { collection } = useContext(LibraryContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-dropdown">
        <button className="navbar-dropdown-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {isOpen && (
          <div className="navbar-dropdown-content">
            <Link to={"/"} className="navbar-dropdown-link">
              Game Genres
            </Link>
            <Link to={"/games"} className="navbar-dropdown-link">
              Recommended Games
            </Link>
            <Link to={"/library"} className="navbar-dropdown-link">
              Collection - {collection.length}
            </Link>
            <Link to={"/search"} className="navbar-dropdown-link">
              Search
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
