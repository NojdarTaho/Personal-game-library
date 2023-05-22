import { OnHoldContext } from "../../context/OnHoldContext";
import useFetch from "../../hooks/useFetch";
import GamesList from "../GamesLists/GamesList";
import { useContext, useEffect, useState } from "react";

const OnHold = () => {
  const apiKey = "8fc295b55f7144f7b20c401bf545e96a";
  const { onHoldId } = useContext(OnHoldContext);

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/games?ids=${onHoldId.join(",")}&key=${apiKey}`
  );

  const [addedGame, setAddedGame] = useState([]);
  const games = data && data.results;
  useEffect(() => {
    if (games && onHoldId) {
      const dropped = games.filter((game) => onHoldId.includes(game.id));
      setAddedGame(dropped);
    }
  }, [games, onHoldId]);

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
        <div>No games added to the On-Hold page</div>
      )}
    </>
  );
};
export default OnHold;
