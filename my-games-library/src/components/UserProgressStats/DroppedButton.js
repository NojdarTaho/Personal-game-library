import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DroppedButton = ({ gameId, onClick }) => {
  return (
    <button onClick={() => onClick(gameId)}>
      <span className="dropdown-menu-label">
        Dropped{" "}
        <FontAwesomeIcon icon={faTrash} className="dropdown-menu-icon" />
      </span>
    </button>
  );
};

export default DroppedButton;
