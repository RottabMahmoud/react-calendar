import React, { createContext, useContext, useReducer } from "react";

//Prepare the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data Layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// Pull Information from the Data Layer
export const useStateValue = () => useContext(StateContext);
