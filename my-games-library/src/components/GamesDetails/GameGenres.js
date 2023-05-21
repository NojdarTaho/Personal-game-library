import { Link } from "react-router-dom";

const GameGenres = ({ data }) => {
  return (
    <ul className="genres">
      <span>Genres: </span>
      {data.genres.map((genre) => (
        <li key={genre.id}>
          <Link to="/"></Link>
          <Link className="genre-link" to={`/genre/${genre.id}`}>
            {genre.name}
            <span className="btn__glitch">{genre.name}</span>

            <img src={genre.image_background} alt="genre-img" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GameGenres;
