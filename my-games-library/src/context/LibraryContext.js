import { createContext, useState, useEffect } from "react";

export const LibraryContext = createContext();

export function LibraryProvider({ children }) {
  const [collection, setCollection] = useState(() => {
    const localData = localStorage.getItem("collection");
    return localData ? JSON.parse(localData) : [];
  });

  const [currentlyId, setCurrentlyId] = useState([]);
  const [droppedId, setDroppedId] = useState([]);
  const [onHoldId, setOnHoldId] = useState([]);
  const [planToPlayId, setPlanToPlayId] = useState([]);
  const [finishedPlayingId, setFinishedPlayingId] = useState([]);

  const addToFinishedToPlay = (id) => {
    if (finishedPlayingId.includes(id)) {
      setFinishedPlayingId(finishedPlayingId.filter((gameId) => gameId !== id));
    } else {
      setFinishedPlayingId([...finishedPlayingId, id]);
    }
  };

  const addToPlanToPlay = (id) => {
    if (planToPlayId.includes(id)) {
      setPlanToPlayId(planToPlayId.filter((gameId) => gameId !== id));
    } else {
      setPlanToPlayId([...planToPlayId, id]);
    }
  };

  const addToOnHold = (id) => {
    if (onHoldId.includes(id)) {
      setOnHoldId(onHoldId.filter((gameId) => gameId !== id));
    } else {
      setOnHoldId([...onHoldId, id]);
    }
  };
  const addToDropped = (id) => {
    if (droppedId.includes(id)) {
      setDroppedId(droppedId.filter((gameId) => gameId !== id));
    } else {
      setDroppedId([...droppedId, id]);
    }
  };

  const addToCurrentlyPlaying = (id) => {
    if (currentlyId.includes(id)) {
      setCurrentlyId(currentlyId.filter((gameId) => gameId !== id));
    } else {
      setCurrentlyId([...currentlyId, id]);
    }
  };
  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(collection));
  }, [collection]);

  const addToCollection = (id) => {
    if (collection.includes(id)) {
      setCollection(collection.filter((gameId) => gameId !== id));
    } else {
      setCollection([...collection, id]);
    }
  };

  return (
    <LibraryContext.Provider
      value={{
        collection,
        addToCollection,
        addToCurrentlyPlaying,
        currentlyId,
        addToDropped,
        droppedId,
        onHoldId,
        addToOnHold,
        addToPlanToPlay,
        planToPlayId,
        addToFinishedToPlay,
        finishedPlayingId,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}
