import { createContext, useState, useEffect } from "react";

export const DroppedContext = createContext();

export function DroppedProvider({ children }) {
  const [droppedId, setDroppedId] = useState(() => {
    const localData = localStorage.getItem("droppedId");
    return localData ? JSON.parse(localData) : [];
  });

  const addToDropped = (id) => {
    if (droppedId.includes(id)) {
      setDroppedId(droppedId.filter((gameId) => gameId !== id));
    } else {
      setDroppedId([...droppedId, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem("droppedId", JSON.stringify(droppedId));
  }, [droppedId]);

  return (
    <DroppedContext.Provider value={{ droppedId, addToDropped }}>
      {children}
    </DroppedContext.Provider>
  );
}
