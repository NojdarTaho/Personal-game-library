import { DroppedContext } from "../../context/DroppedContext";
import useFetch from "../../hooks/useFetch";
import GamesList from "../GamesLists/GamesList";
import { useContext, useEffect, useState } from "react";

const Dropped = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const { droppedId } = useContext(DroppedContext);

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/games?ids=${droppedId.join(",")}&key=${apiKey}`
  );

  const [addedGame, setAddedGame] = useState([]);
  console.log(droppedId);
  const games = data && data.results;
  useEffect(() => {
    if (games && droppedId) {
      const dropped = games.filter((game) => droppedId.includes(game.id));
      setAddedGame(dropped);
    }
  }, [games, droppedId]);

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
        <div>No games added to the dropped page</div>
      )}
    </>
  );
};

export default Dropped;
