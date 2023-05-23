import { createContext } from "react";
import { CollectionProvider } from "./CollectionContext";
import { CurrentlyPlayingProvider } from "./CurrentlyPlayingContext";
import { DroppedProvider } from "./DroppedContext";
import { OnHoldProvider } from "./OnHoldContext";
import { PlanToPlayProvider } from "./PlanToPlayContext";
import { FinishedPlayingProvider } from "./FinishedPlayingContext";

export const LibraryContext = createContext();

export function LibraryProvider({ children }) {
  return (
    <LibraryContext.Provider value={{}}>
      <CollectionProvider>
        <CurrentlyPlayingProvider>
          <DroppedProvider>
            <OnHoldProvider>
              <PlanToPlayProvider>
                <FinishedPlayingProvider>{children}</FinishedPlayingProvider>
              </PlanToPlayProvider>
            </OnHoldProvider>
          </DroppedProvider>
        </CurrentlyPlayingProvider>
      </CollectionProvider>
    </LibraryContext.Provider>
  );
}
