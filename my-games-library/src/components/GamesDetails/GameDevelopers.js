const GameDevelopers = ({ data }) => {
  return (
    <ul className="developers">
      <span>Developers: </span>
      {data.developers.map((developer) => (
        <li className="developer" key={developer.id}>
          {developer.name}
        </li>
      ))}
    </ul>
  );
};

export default GameDevelopers;
