const GameGenres = ({ data }) => {
  return (
    <ul className="genres">
      <span>Genres: </span>
      {data.genres.map((genre) => (
        <li key={genre.id}>
          {genre.name}
          <img src={genre.image_background} alt="genre-img" />
        </li>
      ))}
    </ul>
  );
};

export default GameGenres;
