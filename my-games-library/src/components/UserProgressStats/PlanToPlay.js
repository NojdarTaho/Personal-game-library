import { PlanToPlayContext } from "../../context/PlanToPlayContext";
import useFetch from "../../hooks/useFetch";
import GamesList from "../GamesLists/GamesList";
import { useContext, useEffect, useState } from "react";

const PlanToPlay = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const { planToPlayId } = useContext(PlanToPlayContext);

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/games?ids=${planToPlayId.join(",")}&key=${apiKey}`
  );

  const [addedGame, setAddedGame] = useState([]);
  const games = data && data.results;
  useEffect(() => {
    if (games && planToPlayId) {
      const dropped = games.filter((game) => planToPlayId.includes(game.id));
      setAddedGame(dropped);
    }
  }, [games, planToPlayId]);

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
        <div>No games added to the Plan to Play page</div>
      )}
    </>
  );
};

export default PlanToPlay;
