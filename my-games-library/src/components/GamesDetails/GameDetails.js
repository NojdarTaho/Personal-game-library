import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import GameTags from "./GameTags";
import GameGenres from "./GameGenres";
import GameDevelopers from "./GameDevelopers";
import GamePlatforms from "./GamePlatforms";
import GameRatings from "./GameRatings";
import GameDescriptions from "./GameDescriptions";
import GameStores from "./GameStores";

const GameDetails = () => {
  const { id } = useParams();
  const apiKey = "8fc295b55f7144f7b20c401bf545e96a";

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/games/${id}?key=${apiKey}`
  );

  if (error) {
    return <div>{error}</div>;
  }

  if (isPending) {
    return <div className="loader-container">{isPending}</div>;
  }

  return (
    <div className="game-details">
      {data && (
        <>
          <h1 className="game-name">{data.name}</h1>
          <img
            className="game-image"
            src={data.background_image}
            alt="game-img"
          />
          <h3 className="release-date">Release Date: {data.released}</h3>
          <GameDescriptions data={data} />
          <GameRatings data={data} />
          <GameDevelopers data={data} />
          <GameGenres data={data} />
          <GameTags data={data} />
          <GamePlatforms data={data} />
          <GameStores data={data} />
        </>
      )}
    </div>
  );
};

export default GameDetails;
