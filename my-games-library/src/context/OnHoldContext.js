import { createContext, useState, useEffect } from "react";

export const OnHoldContext = createContext();

export function OnHoldProvider({ children }) {
  const [onHoldId, setOnHoldId] = useState(() => {
    const localData = localStorage.getItem("onHoldId");
    return localData ? JSON.parse(localData) : [];
  });

  const addToOnHold = (id) => {
    if (onHoldId.includes(id)) {
      setOnHoldId(onHoldId.filter((gameId) => gameId !== id));
    } else {
      setOnHoldId([...onHoldId, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem("onHoldId", JSON.stringify(onHoldId));
  }, [onHoldId]);

  return (
    <OnHoldContext.Provider value={{ onHoldId, addToOnHold }}>
      {children}
    </OnHoldContext.Provider>
  );
}
