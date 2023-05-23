import PlanToPlayButton from "./PlanToPlayButton";
import DroppedButton from "./DroppedButton";
import CurrentlyPlayingButton from "./CurrentlyPlayingButton ";
import FinishedPlayingButton from "./FinishedPlayingButton";
import OnHoldButton from "./OnHoldButton ";
const DropdownMenu = ({
  gameId,
  addToCurrentlyPlaying,
  addToFinishedToPlay,
  addToOnHold,
  addToPlanToPlay,
  addToDropped,
  currentlyId,
  onHoldId,
  planToPlayId,
  finishedPlayingId,
  droppedId,
}) => {
  const addedToCurrentlyPlaying = currentlyId.includes(gameId);
  const addedToOnHold = onHoldId.includes(gameId);
  const addedToPlanToPlay = planToPlayId.includes(gameId);
  const addedToFinishedPlaying = finishedPlayingId.includes(gameId);
  const addedToDropped = droppedId.includes(gameId);

  return (
    <ul className="dropdown-menu">
      <li className="dropdown-menu-item">
        <CurrentlyPlayingButton
          gameId={gameId}
          onClick={addToCurrentlyPlaying}
          addedToCurrentlyPlaying={addedToCurrentlyPlaying}
        />
      </li>
      <li className="dropdown-menu-item">
        <FinishedPlayingButton
          gameId={gameId}
          onClick={addToFinishedToPlay}
          addedToFinishedPlaying={addedToFinishedPlaying}
        />
      </li>
      <li className="dropdown-menu-item">
        <PlanToPlayButton
          gameId={gameId}
          onClick={addToPlanToPlay}
          addedToPlanToPlay={addedToPlanToPlay}
        />
      </li>
      <li className="dropdown-menu-item">
        <DroppedButton
          gameId={gameId}
          onClick={addToDropped}
          addedToDropped={addedToDropped}
        />
      </li>
      <li className="dropdown-menu-item">
        <OnHoldButton
          gameId={gameId}
          onClick={addToOnHold}
          addedToOnHold={addedToOnHold}
        />
      </li>
    </ul>
  );
};

export default DropdownMenu;
