import { createContext, useReducer } from "react";

export const StateContext = createContextontext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducerr(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
