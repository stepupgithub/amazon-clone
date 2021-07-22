import { createContext, useContext, useReducer } from "react";

// Prepares the Data Layer
export const StateContext = createContext();


// Wraps the entire app and provide the Data Layer to all the components
export const StateProvider = ({reducer, initialState, children}) => (
     <StateContext.Provider value={useReducer(reducer, initialState)}>
          {children}
     </StateContext.Provider>
);

// Pull information from the data layer by any of the component
export const useStateValue = () => useContext(StateContext);