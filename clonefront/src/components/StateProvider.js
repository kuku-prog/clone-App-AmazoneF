import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //prepares the data layer! is a built in f()
//  It's used to hold and provide the global state to all components that need it

//StateProvider wraps the app and grants access each child to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
	// initialState: The initial state of your application.

	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
); // its just created here not wrapping yet!

export const useStateValue = () => useContext(StateContext); // pull and push data from the data layer
