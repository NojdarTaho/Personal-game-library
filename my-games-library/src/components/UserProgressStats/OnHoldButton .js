import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";

const OnHoldButton = ({ gameId, onClick }) => {
  return (
    <button onClick={() => onClick(gameId)}>
      <span className="dropdown-menu-label">
        On-Hold{" "}
        <FontAwesomeIcon icon={faPause} className="dropdown-menu-icon" />
      </span>
    </button>
  );
};

export default OnHoldButton;
