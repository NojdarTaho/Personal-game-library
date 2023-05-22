import { createContext, useState, useEffect } from "react";

export const PlanToPlayContext = createContext();

export function PlanToPlayProvider({ children }) {
  const [planToPlayId, setPlanToPlayId] = useState(() => {
    const localData = localStorage.getItem("planToPlayId");
    return localData ? JSON.parse(localData) : [];
  });

  const addToPlanToPlay = (id) => {
    if (planToPlayId.includes(id)) {
      setPlanToPlayId(planToPlayId.filter((gameId) => gameId !== id));
    } else {
      setPlanToPlayId([...planToPlayId, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem("planToPlayId", JSON.stringify(planToPlayId));
  }, [planToPlayId]);

  return (
    <PlanToPlayContext.Provider value={{ planToPlayId, addToPlanToPlay }}>
      {children}
    </PlanToPlayContext.Provider>
  );
}
