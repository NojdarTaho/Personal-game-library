import { createContext, useState, useEffect } from "react";

export const FinishedPlayingContext = createContext();

export function FinishedPlayingProvider({ children }) {
  const [finishedPlayingId, setFinishedPlayingId] = useState(() => {
    const localData = localStorage.getItem("finishedPlayingId");
    return localData ? JSON.parse(localData) : [];
  });

  const addToFinishedToPlay = (id) => {
    if (finishedPlayingId.includes(id)) {
      setFinishedPlayingId(finishedPlayingId.filter((gameId) => gameId !== id));
    } else {
      setFinishedPlayingId([...finishedPlayingId, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem(
      "finishedPlayingId",
      JSON.stringify(finishedPlayingId)
    );
  }, [finishedPlayingId]);

  return (
    <FinishedPlayingContext.Provider
      value={{ finishedPlayingId, addToFinishedToPlay }}
    >
      {children}
    </FinishedPlayingContext.Provider>
  );
}
