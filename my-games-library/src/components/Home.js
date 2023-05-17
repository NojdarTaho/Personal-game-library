import useFetch from "../hooks/useFetch";
import GamesList from "./GamesList";

const Home = () => {
  const apiKey = "8fc295b55f7144f7b20c401bf545e96a";

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/games?key=${apiKey}`
  );

  const games = data && data.results;
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
      {<GamesList games={games} />}
    </>
  );
};

export default Home;
