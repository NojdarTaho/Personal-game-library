import { useState, useEffect } from "react";
import Rating from "./Rating";

const RatingContainer = ({ gameId }) => {
  const [rating, setRating] = useState(() => {
    const localData = localStorage.getItem(`rating_${gameId}`);
    return localData ? JSON.parse(localData) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`rating_${gameId}`, JSON.stringify(rating));
  }, [rating, gameId]);

  return (
    <div className="rating-container">
      <Rating rating={rating} onRating={setRating} count={5} />
      <span className="rating-value">{rating}</span>
    </div>
  );
};

export default RatingContainer;
