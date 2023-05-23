import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const AllGamesTags = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const { data, isPending, error } = useFetch(
    `https://api.rawg.io/api/tags?page_size=40&key=${apiKey}`
  );
  const tags = data && data.results;

  if (error) {
    return <div>{error}</div>;
  }

  if (isPending) {
    return <div className="loader-container">{isPending}</div>;
  }

  return (
    <div>
      <ul className="tag-games-list">
        {tags &&
          tags.map((tag) => (
            <li key={tag.id}>
              <Link to={`/tag/${tag.id}`} className="tag-game-link">
                <div className="tag-game-card">
                  <img
                    src={tag.image_background}
                    alt={tag.name}
                    className="tag-game-image"
                  />
                  <span className="tag-game-name">{tag.name}</span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AllGamesTags;
