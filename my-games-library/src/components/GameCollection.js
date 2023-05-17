import { useContext, useEffect, useState } from "react";
import { LibraryContext } from "../context/LibraryContext";
import useFetch from "../hooks/useFetch";
import GamesList from "./GamesList";
const GameLibrary = (game) => {
  const apiKey = "8fc295b55f7144f7b20c401bf545e96a";

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/games?key=${apiKey}`
  );
  const { collection } = useContext(LibraryContext);
  const [addedGame, setAddedGame] = useState("");
  const games = data && data.results;

  useEffect(() => {
    if (games && collection) {
      const favourites = games.filter((game) => collection.includes(game.id));
      setAddedGame(favourites);
    }
  }, [games, collection]);
  if (error) {
    return <div>{error}</div>;
  }
  if (isPending) {
    return <div>{isPending}</div>;
  }
  return (
    <>
      <h1>My Game Library</h1>

      {error}
      {isPending}
      {addedGame.length > 0 ? (
        <GamesList games={addedGame} />
      ) : (
        <div>No games can be found in the library</div>
      )}
    </>
  );
};

export default GameLibrary;
