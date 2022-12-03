import React, { useState, useEffect, createContext } from "react";

import { gamesRequest } from "./games.service";

export const GamesContext = createContext();

export const GamesContextProvider = ({ children }) => {
  return <GamesContext.Provider>{children}</GamesContext.Provider>;
};
