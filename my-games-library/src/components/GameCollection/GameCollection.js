import { useContext, useEffect, useState } from "react";
import { CollectionContext } from "../../context/CollectionContext";
import useFetch from "../../hooks/useFetch";
import GamesList from "../GamesLists/GamesList";

const GameLibrary = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const { collectionIds } = useContext(CollectionContext);

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/games?ids=${collectionIds.join(",")}&key=${apiKey}`
  );

  const [addedGame, setAddedGame] = useState([]);

  const games = data && data.results;

  useEffect(() => {
    if (games && collectionIds) {
      const favourites = games.filter((game) =>
        collectionIds.includes(game.id)
      );
      setAddedGame(favourites);
    }
  }, [games, collectionIds]);

  if (error) {
    return <div>{error}</div>;
  }
  if (isPending) {
    return <div className="loader-container">{isPending}</div>;
  }

  return (
    <>
      {addedGame.length > 0 ? (
        <GamesList games={addedGame} />
      ) : (
        <div>No games can be found in the library</div>
      )}
    </>
  );
};

export default GameLibrary;
