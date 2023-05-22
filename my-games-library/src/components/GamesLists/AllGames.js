import useFetch from "../../hooks/useFetch";
import GamesList from "./GamesList";
const AllGames = () => {
  const apiKey = "8fc295b55f7144f7b20c401bf545e96a";

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/games?page_size=40&key=${apiKey}`
  );

  const games = data && data.results;
  if (error) {
    return <div>{error}</div>;
  }
  if (isPending) {
    return <div className="loader-container">{isPending}</div>;
  }
  return <>{<GamesList games={games} />}</>;
};

export default AllGames;
