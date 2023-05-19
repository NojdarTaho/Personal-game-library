const GameRatings = ({ data }) => {
  return (
    <div className="metacritic-rating">
      Metacritic Rating: {data.metacritic}
    </div>
  );
};

export default GameRatings;
