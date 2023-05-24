import { useState, useContext, useEffect } from "react";
import { CurrentlyPlayingContext } from "../../context/CurrentlyPlayingContext";
import { FinishedPlayingContext } from "../../context/FinishedPlayingContext";
import { OnHoldContext } from "../../context/OnHoldContext";
import { PlanToPlayContext } from "../../context/PlanToPlayContext";
import { DroppedContext } from "../../context/DroppedContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu";

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
  const { addToDropped, droppedId } = useContext(DroppedContext);

  useEffect(() => {
    setIsOpen(false);
  }, [gameId]);

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faEllipsisV} className="dropdown-icon" />
      </button>
      {isOpen && (
        <DropdownMenu
          gameId={gameId}
          addToCurrentlyPlaying={addToCurrentlyPlaying}
          addToFinishedToPlay={addToFinishedToPlay}
          addToOnHold={addToOnHold}
          addToPlanToPlay={addToPlanToPlay}
          addToDropped={addToDropped}
          currentlyId={currentlyId}
          onHoldId={onHoldId}
          planToPlayId={planToPlayId}
          finishedPlayingId={finishedPlayingId}
          droppedId={droppedId}
        />
      )}
    </div>
  );
};

export default DropDownStats;
