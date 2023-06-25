import React from "react";
import { MediaContextProvider } from "./MediaContext";

type GlobalContextWrapperProps = {
  children: React.ReactNode;
};

/**
 *
 * For global contexts that is available throughout the app. Ideally they are broken up by functionality.
 */
const GlobalContextWrapper = ({ children }: GlobalContextWrapperProps) => (
  <MediaContextProvider>{children}</MediaContextProvider>
);

export { GlobalContextWrapper };
