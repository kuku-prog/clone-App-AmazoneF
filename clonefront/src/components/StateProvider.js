import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //prepares the data layer! is a built in f()

//StateProvider wraps the app and grants access each child to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
); // its just created here not wrapping yet!

export const useStateValue = () => useContext(StateContext); // pull and push data from the data layer
