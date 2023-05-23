import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

const PlanToPlayButton = ({ gameId, onClick }) => {
  return (
    <button onClick={() => onClick(gameId)}>
      <span className="dropdown-menu-label plan">
        Plan to Play{" "}
        <FontAwesomeIcon icon={faCalendarPlus} className="dropdown-menu-icon" />
      </span>
    </button>
  );
};

export default PlanToPlayButton;
