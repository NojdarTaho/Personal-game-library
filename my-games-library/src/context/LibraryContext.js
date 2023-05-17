import { createContext, useState, useEffect } from "react";

export const LibraryContext = createContext();

export function LibraryProvider({ children }) {
  const [collection, setCollection] = useState(() => {
    const localData = localStorage.getItem("collection");
    return localData ? JSON.parse(localData) : [];
  });

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
    <LibraryContext.Provider value={{ collection, addToCollection }}>
      {children}
    </LibraryContext.Provider>
  );
}
