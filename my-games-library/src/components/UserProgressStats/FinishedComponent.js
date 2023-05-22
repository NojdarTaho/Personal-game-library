import { FinishedPlayingContext } from "../../context/FinishedPlayingContext";
import useFetch from "../../hooks/useFetch";
import GamesList from "../GamesLists/GamesList";
import { useContext, useEffect, useState } from "react";

const FinishedComponent = () => {
  const apiKey = "8fc295b55f7144f7b20c401bf545e96a";
  const { finishedPlayingId } = useContext(FinishedPlayingContext);

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/games?ids=${finishedPlayingId.join(
      ","
    )}&key=${apiKey}`
  );

  const [addedGame, setAddedGame] = useState([]);
  console.log(finishedPlayingId);
  const games = data && data.results;
  useEffect(() => {
    if (games && finishedPlayingId) {
      const playing = games.filter((game) =>
        finishedPlayingId.includes(game.id)
      );
      setAddedGame(playing);
    }
  }, [games, finishedPlayingId]);

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
        <div>No games added to the finished playing page</div>
      )}
    </>
  );
};
export default FinishedComponent;
