import React, { createContext, useContext, useReducer } from "react";

// Prepare DataLayer Context
export const DataLayerContext = createContext();

//Create DataLayer

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
