const GameTags = ({ data }) => {
  return (
    <ul className="tags">
      <span>Tags: </span>
      {data.tags.map((tag) => (
        <li key={tag.id}>{tag.name}</li>
      ))}
    </ul>
  );
};

export default GameTags;
