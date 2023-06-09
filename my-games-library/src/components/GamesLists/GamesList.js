import BookmarkButton from "../GameCollection/BookmarkButton";
import { Link } from "react-router-dom";
import RatingContainer from "../Rating/RatingContainer";
import DropDownStats from "../UserProgressStats/DropDownStats";
const GamesList = ({ games }) => {
  return (
    <ul className="games-list">
      {games.map((game) => (
        <li className="games--item" key={game.id}>
          <div className="game">
            <div className="game-list-imported-contents-container">
              <div className="game-list-imported-contents">
                <BookmarkButton gameId={game.id} />
              </div>
              <div className="game-list-imported-contents">
                <RatingContainer gameId={game.id} />
              </div>
              <div className="game-list-imported-contents">
                <DropDownStats gameId={game.id} />
              </div>
            </div>

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
