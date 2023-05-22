import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import Home from "../Home";
const AllGamesGenres = () => {
  const apiKey = "8fc295b55f7144f7b20c401bf545e96a";

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/genres?key=${apiKey}`
  );
  const genres = data && data.results;

  if (error) {
    return <div>{error}</div>;
  }

  if (isPending) {
    return <div className="loader-container">{isPending}</div>;
  }

  return (
    <div>
      <Home />
      <ul className="genre-games-list">
        {genres &&
          genres.map((genre) => (
            <li key={genre.id}>
              <Link to={`/genre/${genre.id}`} className="genre-game-link">
                <div className="genre-game-card">
                  <img
                    src={genre.image_background}
                    alt={genre.name}
                    className="genre-game-image"
                  />
                  <span className="genre-game-name">{genre.name}</span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AllGamesGenres;
