const GameDescriptions = ({ data }) => {
  return (
    <div className="game-description">
      <span>About {data.name}: </span>
      <p>{data.description_raw}</p>
    </div>
  );
};

export default GameDescriptions;
