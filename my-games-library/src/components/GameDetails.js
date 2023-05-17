import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
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
    return <div>{isPending}</div>;
  }
  return (
    <>
      {error}
      {isPending}

      {data && (
        <>
          <h1>{data.name}</h1>
          <img src={data.background_image} alt="game-img" />
          <div>{data.description_raw}</div>
          <div>metacritic rating: {data.metacritic} </div>
          <h3>Release Date: {data.released}</h3>
          <ul>
            <span>Developers: </span>
            {data.developers.map((developer) => (
              <li key={developer.id}>{<span>{developer.name}</span>}</li>
            ))}
          </ul>
          <ul>
            <span>Genres: </span>
            {data.genres.map((genre) => (
              <li key={genre.id}>
                <span> {genre.name}</span>
                <img src={genre.image_background} alt="genre-img" />
              </li>
            ))}
          </ul>
          <ul>
            <span>Tags: </span>
            {data.tags.map((tag) => (
              <li key={tag.id}>
                <span>{tag.name}</span>
              </li>
            ))}
          </ul>
          <ul>
            <span>Platforms: </span>
            {data.parent_platforms.map((plat) => (
              <li key={plat.platform.id}>
                <span> {plat.platform.name}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default GameDetails;
