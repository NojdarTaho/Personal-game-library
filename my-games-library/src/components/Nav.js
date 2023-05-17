import { Link } from "react-router-dom";
import { LibraryContext } from "../context/LibraryContext";
import { useContext } from "react";
const NavBar = () => {
  const { collection } = useContext(LibraryContext);
  return (
    <nav>
      <Link to={"/"}>
        <h2>All games</h2>
      </Link>
      <Link to={"/library"}>
        <h2>Collection {collection.length}</h2>
      </Link>
    </nav>
  );
};

export default NavBar;
