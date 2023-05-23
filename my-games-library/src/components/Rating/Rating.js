import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faStar);

const Rating = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const changeColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    } else {
      return color.unfilled;
    }
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FontAwesomeIcon
          key={idx}
          className="cursor-pointer"
          icon={faStar}
          onClick={() => onRating(idx)}
          style={{ color: changeColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <>{starRating}</>;
};

Rating.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onRating: PropTypes.func,
  color: PropTypes.shape({
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  }),
};

Rating.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#f5eb3b",
    unfilled: "#DCDCDC",
  },
};

export default Rating;
