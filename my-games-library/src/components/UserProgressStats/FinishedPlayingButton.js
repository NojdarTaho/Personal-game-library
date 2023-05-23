import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FinishedPlayingButton = ({ gameId, onClick }) => {
  return (
    <button onClick={() => onClick(gameId)}>
      <span className="dropdown-menu-label finished">
        Finished Playing{" "}
        <FontAwesomeIcon icon={faCheck} className="dropdown-menu-icon" />
      </span>
    </button>
  );
};

export default FinishedPlayingButton;
