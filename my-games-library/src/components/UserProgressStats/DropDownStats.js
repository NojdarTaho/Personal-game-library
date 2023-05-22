import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faCheck,
  faCalendarPlus,
  faTrash,
  faPause,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext, useEffect } from "react";
import { LibraryContext } from "../../context/LibraryContext";

const DropDownStats = ({ gameId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    addToCurrentlyPlaying,
    currentlyId,
    droppedId,
    addToDropped,
    onHoldId,
    addToOnHold,
    addToPlanToPlay,
    planToPlayId,
    finishedPlayingId,
    addToFinishedToPlay,
  } = useContext(LibraryContext);
  const [addedToCurrentlyPlaying, setAddedToCurrentlyPlaying] = useState(false);
  const [addedToDropped, setAddedToDropped] = useState(false);
  const [addedToOnHold, setAddedToOnHold] = useState(false);
  const [addedToPlanToPlay, setAddedToPlanToPlay] = useState(false);
  const [addedToFinishedPlaying, setAddedToFinishedPlaying] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setAddedToCurrentlyPlaying(currentlyId.includes(gameId));
  }, [currentlyId, gameId]);
  useEffect(() => {
    setAddedToDropped(droppedId.includes(gameId));
  }, [droppedId, gameId]);
  useEffect(() => {
    setAddedToOnHold(onHoldId.includes(gameId));
  }, [onHoldId, gameId]);

  useEffect(() => {
    setAddedToOnHold(planToPlayId.includes(gameId));
  }, [planToPlayId, gameId]);

  useEffect(() => {
    setAddedToOnHold(planToPlayId.includes(gameId));
  }, [planToPlayId, gameId]);

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
        <FontAwesomeIcon icon={faBars} className="dropdown-icon" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <button
            className="dropdown-menu-item"
            onClick={handleCurrentlyButtonClick}
          >
            <span className="dropdown-menu-label">
              Currently Playing{" "}
              <FontAwesomeIcon icon={faPlay} className="dropdown-menu-icon" />
            </span>
          </button>
          <button
            className="dropdown-menu-item"
            onClick={handleFinishedPlayingButton}
          >
            <span className="dropdown-menu-label finished">
              Finished Playing{" "}
              <FontAwesomeIcon icon={faCheck} className="dropdown-menu-icon" />
            </span>
          </button>
          <button
            className="dropdown-menu-item"
            onClick={handlePlanToPlayButtonClick}
          >
            <span className="dropdown-menu-label plan">
              Plan to Play{" "}
              <FontAwesomeIcon
                icon={faCalendarPlus}
                className="dropdown-menu-icon"
              />
            </span>
          </button>
          <button
            className="dropdown-menu-item"
            onClick={handleDroppedButtonClick}
          >
            <span className="dropdown-menu-label dropped">
              Dropped{" "}
              <FontAwesomeIcon icon={faTrash} className="dropdown-menu-icon" />
            </span>
          </button>
          <button
            className="dropdown-menu-item"
            onClick={handleOnHoldButtonClick}
          >
            <span className="dropdown-menu-label on-hold">
              On-Hold{" "}
              <FontAwesomeIcon icon={faPause} className="dropdown-menu-icon" />
            </span>
          </button>
        </ul>
      )}
    </div>
  );
};

export default DropDownStats;
