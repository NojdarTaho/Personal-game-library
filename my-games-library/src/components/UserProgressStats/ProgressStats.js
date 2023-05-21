import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faCheck,
  faCalendarPlus,
  faTrash,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const ProgressStats = () => {
  return (
    <ul className="progress-stats-container">
      <li className="progress-stats-item">
        <span className="progress-stats-label progress-stats-playing">
          Currently Playing
        </span>
        <FontAwesomeIcon icon={faPlay} className="progress-stats-icon" />
      </li>
      <li className="progress-stats-item">
        <span className="progress-stats-label progress-stats-finished">
          Finished Playing
        </span>
        <FontAwesomeIcon icon={faCheck} className="progress-stats-icon" />
      </li>
      <li className="progress-stats-item">
        <span className="progress-stats-label progress-stats-plan">
          Plan to Play
        </span>
        <FontAwesomeIcon
          icon={faCalendarPlus}
          className="progress-stats-icon"
        />
      </li>
      <li className="progress-stats-item">
        <span className="progress-stats-label progress-stats-dropped">
          Dropped
        </span>
        <FontAwesomeIcon icon={faTrash} className="progress-stats-icon" />
      </li>
      <li className="progress-stats-item">
        <span className="progress-stats-label progress-stats-on-hold">
          On-Hold
        </span>
        <FontAwesomeIcon icon={faPause} className="progress-stats-icon" />
      </li>
    </ul>
  );
};

export default ProgressStats;
