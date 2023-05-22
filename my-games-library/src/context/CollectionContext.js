import { createContext, useState, useEffect } from "react";

export const CollectionContext = createContext();

export function CollectionProvider({ children }) {
  const [collectionIds, setCollection] = useState(() => {
    const localData = localStorage.getItem("collection");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(collectionIds));
  }, [collectionIds]);

  const addToCollection = (id) => {
    if (collectionIds.includes(id)) {
      setCollection(collectionIds.filter((gameId) => gameId !== id));
    } else {
      setCollection([...collectionIds, id]);
    }
  };

  return (
    <CollectionContext.Provider value={{ collectionIds, addToCollection }}>
      {children}
    </CollectionContext.Provider>
  );
}
