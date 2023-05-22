import { CurrentlyPlayingContext } from "../../context/CurrentlyPlayingContext";
import { FinishedPlayingContext } from "../../context/FinishedPlayingContext";
import { OnHoldContext } from "../../context/OnHoldContext";
import { PlanToPlayContext } from "../../context/PlanToPlayContext";
import { DroppedContext } from "../../context/DroppedContext"; // Import the DroppedContext
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faCheck,
  faCalendarPlus,
  faTrash,
  faPause,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext, useEffect } from "react";

const DropDownStats = ({ gameId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { addToCurrentlyPlaying, currentlyId } = useContext(
    CurrentlyPlayingContext
  );
  const { addToFinishedToPlay, finishedPlayingId } = useContext(
    FinishedPlayingContext
  );
  const { addToOnHold, onHoldId } = useContext(OnHoldContext);
  const { addToPlanToPlay, planToPlayId } = useContext(PlanToPlayContext);
  const { addToDropped, droppedId } = useContext(DroppedContext); // Use the DroppedContext

  const [addedToCurrentlyPlaying, setAddedToCurrentlyPlaying] = useState(false);
  const [addedToOnHold, setAddedToOnHold] = useState(false);
  const [addedToPlanToPlay, setAddedToPlanToPlay] = useState(false);
  const [addedToFinishedPlaying, setAddedToFinishedPlaying] = useState(false);
  const [addedToDropped, setAddedToDropped] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setAddedToCurrentlyPlaying(currentlyId.includes(gameId));
  }, [currentlyId, gameId]);

  useEffect(() => {
    setAddedToOnHold(onHoldId.includes(gameId));
  }, [onHoldId, gameId]);

  useEffect(() => {
    setAddedToPlanToPlay(planToPlayId.includes(gameId));
  }, [planToPlayId, gameId]);

  useEffect(() => {
    setAddedToFinishedPlaying(finishedPlayingId.includes(gameId));
  }, [finishedPlayingId, gameId]);

  useEffect(() => {
    setAddedToDropped(droppedId.includes(gameId));
  }, [droppedId, gameId]);

  function handleCurrentlyButtonClick() {
    addToCurrentlyPlaying(gameId);
    setAddedToCurrentlyPlaying(!addedToCurrentlyPlaying);
  }
  function handleOnHoldButtonClick() {
    addToOnHold(gameId);
    setAddedToOnHold(!addedToOnHold);
  }
  function handleDroppedButtonClick() {
    addToDropped(gameId);
    setAddedToDropped(!addedToDropped);
  }
  function handlePlanToPlayButtonClick() {
    addToPlanToPlay(gameId);
    setAddedToPlanToPlay(!addedToPlanToPlay);
  }

  function handleFinishedPlayingButton() {
    addToFinishedToPlay(gameId);
    setAddedToFinishedPlaying(!addedToFinishedPlaying);
  }

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faEllipsisV} className="dropdown-icon" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-menu-item">
            <button onClick={handleCurrentlyButtonClick}>
              <span className="dropdown-menu-label">
                Currently Playing{" "}
                <FontAwesomeIcon icon={faPlay} className="dropdown-menu-icon" />
              </span>
            </button>
          </li>
          <li className="dropdown-menu-item">
            <button onClick={handleFinishedPlayingButton}>
              <span className="dropdown-menu-label finished">
                Finished Playing{" "}
                <FontAwesomeIcon
                  icon={faCheck}
                  className="dropdown-menu-icon"
                />
              </span>
            </button>
          </li>
          <li className="dropdown-menu-item">
            <button onClick={handlePlanToPlayButtonClick}>
              <span className="dropdown-menu-label plan">
                Plan to Play{" "}
                <FontAwesomeIcon
                  icon={faCalendarPlus}
                  className="dropdown-menu-icon"
                />
              </span>
            </button>
          </li>
          <li className="dropdown-menu-item">
            <button onClick={handleDroppedButtonClick}>
              <span className="dropdown-menu-label">
                Dropped{" "}
                <FontAwesomeIcon
                  icon={faTrash}
                  className="dropdown-menu-icon"
                />
              </span>
            </button>
          </li>
          <li className="dropdown-menu-item">
            <button onClick={handleOnHoldButtonClick}>
              <span className="dropdown-menu-label">
                On-Hold{" "}
                <FontAwesomeIcon
                  icon={faPause}
                  className="dropdown-menu-icon"
                />
              </span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDownStats;
