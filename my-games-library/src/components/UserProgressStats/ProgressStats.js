// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlay,
//   faCheck,
//   faCalendarPlus,
//   faTrash,
//   faPause,
// } from "@fortawesome/free-solid-svg-icons";
// import { LibraryContext } from "../../context/LibraryContext";
// import { useState, useContext, useEffect } from "react";

// const ProgressStats = ({ gameId }) => {
//   const { addToCurrentlyPlaying, currentlyId } = useContext(LibraryContext);
//   const [addedToCurrentlyPlaying, setAddedToCurrentlyPlaying] = useState(false);

//   useEffect(() => {
//     setAddedToCurrentlyPlaying(currentlyId.includes(gameId));
//   }, [currentlyId, gameId]);

//   function handleButton() {
//     setAddedToCurrentlyPlaying(!addedToCurrentlyPlaying);
//     addToCurrentlyPlaying(gameId);
//   }

//   return (
//     <div className="progress-stats-container">
//       <button className="progress-stats-item" onClick={handleButton}>
//         Currently Playing
//         <FontAwesomeIcon icon={faPlay} className="progress-stats-icon" />
//       </button>
//       <li className="progress-stats-item">
//         <span className="progress-stats-finished">Finished Playing</span>
//         <FontAwesomeIcon icon={faCheck} className="progress-stats-icon" />
//       </li>
//       <li className="progress-stats-item">
//         <span className="progress-stats-plan">Plan to Play</span>
//         <FontAwesomeIcon
//           icon={faCalendarPlus}
//           className="progress-stats-icon"
//         />
//       </li>
//       <li className="progress-stats-item">
//         <span className="progress-stats-dropped">Dropped</span>
//         <FontAwesomeIcon icon={faTrash} className="progress-stats-icon" />
//       </li>
//       <li className="progress-stats-item">
//         <span className="progress-stats-on-hold">On-Hold</span>
//         <FontAwesomeIcon icon={faPause} className="progress-stats-icon" />
//       </li>
//     </div>
//   );
// };

// export default ProgressStats;
