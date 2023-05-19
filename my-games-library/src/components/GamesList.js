import BookmarkButton from "./BookmarkButton";
import { Link } from "react-router-dom";
import RatingContainer from "./Rating/RatingContainer";
const GamesList = ({ games }) => {
  return (
    <ul className="games">
      {games.map((game) => (
        <li className="games--item" key={game.id}>
          <div className="game">
            <BookmarkButton gameId={game.id} />
            <Link to={`/games/${game.id}`}>
              <img className="game--image" src={game.background_image} alt="" />
              <h2 className="game-name">{game.name}</h2>
            </Link>
            <h2 className="game-release">{game.released}</h2>
            <RatingContainer gameId={game.id} />
            <ul>
              genres:{" "}
              {game.genres.map((genre) => (
                <li className="genre" key={genre.id}>
                  <Link className="genre-link" to={`/genre/${genre.id}`}>
                    {genre.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GamesList;
