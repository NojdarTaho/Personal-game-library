import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faHome,
  faFire,
  faGamepad,
  faTag,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
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
              Home - <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to={"/games"} className="navbar-dropdown-link">
              Popular Games - <FontAwesomeIcon icon={faFire} />
            </Link>
            <Link to={"/library"} className="navbar-dropdown-link">
              Collection - <FontAwesomeIcon icon={faGamepad} />
            </Link>
            <Link to={"/search"} className="navbar-dropdown-link">
              Search - <FontAwesomeIcon icon={faSearch} />
            </Link>
            <Link to={"/tags"} className="navbar-dropdown-link">
              Game Tags - <FontAwesomeIcon icon={faTag} />
            </Link>

            <Link to={"/progress_stats"} className="navbar-dropdown-link">
              Progress Stats - <FontAwesomeIcon icon={faChartBar} />
            </Link>
          </div>
        )}
      </div>
      <Link to={"/"} className="home-endpoint">
        <h1>GameLibra</h1>
      </Link>
      <FontAwesomeIcon className="space-between-icon" icon={faHome} />
      <h1 className="home-endpoint"> Home</h1>
    </nav>
  );
};

export default NavBar;
