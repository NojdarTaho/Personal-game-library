import { createContext, useState, useEffect } from "react";

export const CurrentlyPlayingContext = createContext();

export function CurrentlyPlayingProvider({ children }) {
  const [currentlyId, setCurrentlyId] = useState(() => {
    const localData = localStorage.getItem("currentlyId");
    return localData ? JSON.parse(localData) : [];
  });

  const addToCurrentlyPlaying = (id) => {
    if (currentlyId.includes(id)) {
      setCurrentlyId(currentlyId.filter((gameId) => gameId !== id));
    } else {
      setCurrentlyId([...currentlyId, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem("currentlyId", JSON.stringify(currentlyId));
  }, [currentlyId]);

  return (
    <CurrentlyPlayingContext.Provider
      value={{ currentlyId, addToCurrentlyPlaying }}
    >
      {children}
    </CurrentlyPlayingContext.Provider>
  );
}
