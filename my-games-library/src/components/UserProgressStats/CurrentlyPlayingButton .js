import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const CurrentlyPlayingButton = ({ gameId, onClick }) => {
  return (
    <button onClick={() => onClick(gameId)}>
      <span className="dropdown-menu-label">
        Currently Playing{" "}
        <FontAwesomeIcon icon={faPlay} className="dropdown-menu-icon" />
      </span>
    </button>
  );
};

export default CurrentlyPlayingButton;
