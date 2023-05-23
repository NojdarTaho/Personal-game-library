const GamePlatforms = ({ data }) => {
  return (
    <ul className="platforms">
      <span>Platforms: </span>
      {data.parent_platforms.map((plat) => (
        <li key={plat.platform.id}>{plat.platform.name}</li>
      ))}
    </ul>
  );
};

export default GamePlatforms;
