import { LibraryContext } from "../../context/LibraryContext";
import useFetch from "../../hooks/useFetch";
import GamesList from "../GamesLists/GamesList";
import { useContext, useEffect, useState } from "react";

const CurrentlyPlaying = () => {
  const apiKey = "8fc295b55f7144f7b20c401bf545e96a";
  const { currentlyId } = useContext(LibraryContext);

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/games?ids=${currentlyId.join(",")}&key=${apiKey}`
  );

  const [addedGame, setAddedGame] = useState([]);
  console.log(currentlyId);
  const games = data && data.results;
  useEffect(() => {
    if (games && currentlyId) {
      const playing = games.filter((game) => currentlyId.includes(game.id));
      setAddedGame(playing);
    }
  }, [games, currentlyId]);

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
        <div>No games added to the currently playing page</div>
      )}
    </>
  );
};

export default CurrentlyPlaying;
