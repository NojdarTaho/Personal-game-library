import Rating from "./Rating";
import { useState, useEffect } from "react";

const RatingContainer = ({ gameId }) => {
  const [rating, setRating] = useState(() => {
    const localData = localStorage.getItem(`rating_${gameId}`);
    return localData ? JSON.parse(localData) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`rating_${gameId}`, JSON.stringify(rating));
  }, [rating, gameId]);

  return (
    <div>
      <Rating rating={rating} onRating={(rate) => setRating(rate)} count={5} />
      <p>Your Rating - {rating}</p>
    </div>
  );
};

export default RatingContainer;
