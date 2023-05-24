import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faCheck,
  faCalendarPlus,
  faTrash,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import playing from "../../icons/currently_playing.jpg";
import dropped from "../../icons/dropped.jpg";
import onHold from "../../icons/on-hold.jpg";
import finished from "../../icons/finished.jpg";
import planToPlay from "../../icons/plan_to_play.png";

const ProgressStats = () => {
  return (
    <div className="progress-stats-container">
      <div className="page-content">
        <div className="card">
          <Link to={"/currently_playing"}>
            <div className="icon">
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </Link>
          <span className="card-title">Currently Playing</span>
          <div className="content">
            <img className="card-image" src={playing} alt="Currently Playing" />
          </div>
        </div>
        <div className="card">
          <Link to={"/dropped"}>
            <div className="icon">
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </Link>
          <span className="card-title">Dropped</span>
          <div className="content">
            <img className="card-image" src={dropped} alt="Dropped" />
          </div>
        </div>
        <div className="card">
          <Link to={"/on_hold"}>
            <div className="icon">
              <FontAwesomeIcon icon={faPause} />
            </div>
          </Link>
          <span className="card-title">On Hold</span>
          <div className="content">
            <img className="card-image" src={onHold} alt="On Hold" />
          </div>
        </div>
        <div className="card">
          <Link to={"/plan_to_play"}>
            <div className="icon">
              <FontAwesomeIcon icon={faCalendarPlus} />
            </div>
          </Link>
          <span className="card-title">Plan to Play</span>
          <div className="content">
            <img className="card-image" src={planToPlay} alt="Plan to Play" />
          </div>
        </div>
        <div className="card">
          <Link to={"/finished"}>
            <div className="icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </Link>
          <span className="card-title">Completed</span>
          <img className="card-image" src={finished} alt="Completed" />
        </div>
      </div>
    </div>
  );
};

export default ProgressStats;
