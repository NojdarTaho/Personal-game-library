import BookmarkButton from "../BookmarkButton";
import { Link } from "react-router-dom";
import RatingContainer from "../Rating/RatingContainer";
import DropDownStats from "../UserProgressStats/DropDownStats";
const GamesList = ({ games }) => {
  return (
    <ul className="games-list">
      {games.map((game) => (
        <li className="games--item" key={game.id}>
          <div className="game">
            <DropDownStats gameId={game.id} />

            <BookmarkButton gameId={game.id} />
            <RatingContainer gameId={game.id} />
            <Link to={`/games/${game.id}`}>
              <div className="game-name-container">
                <span className="game-name">{game.name}</span>
              </div>
              <img
                className="game--image"
                src={game.background_image}
                alt="game img"
              />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GamesList;
