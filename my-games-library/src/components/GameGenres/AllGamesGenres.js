import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import WelcomePage from "../WelcomePage";
const AllGamesGenres = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

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
      <WelcomePage />
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
