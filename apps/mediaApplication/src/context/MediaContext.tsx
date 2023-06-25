import React, { createContext } from "react";
import { MediaStore } from "../stores/MediaStore";

type MediaContextProviderProps = {
  children: React.ReactNode;
};

const MediaContext = createContext<MediaStore | null>(null);

const MediaContextProvider = ({ children }: MediaContextProviderProps) => {
  const mediaStore = new MediaStore();
  return (
    <MediaContext.Provider value={mediaStore}>{children}</MediaContext.Provider>
  );
};

export { MediaContext, MediaContextProvider };
