export const initialState = {
	basket: [],
	user: null,
};

//reducer is the listener
//state here is the state of the App

const reducer = (state, action) => {
	console.log(action);
	// console.log(action.id);

	// Redux is a predictable state container
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item], // keep the state also update the action as received
			};
		case "EMPTY_BASKET":
			return {
				...state,
				basket: [],
			};
		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);

			let newBasket = [...state.basket];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`can't remove product(id:${action.id}) as its not in the basket`
				);
			}

			// it also is being removed form the data layer
			//after all the index identification and removal is done, retun this
			return {
				...state,
				basket: newBasket,
			};
		//returns what is left in the check out basket or data layer

		case "SET_USER":
			return {
				...state,
				user: action.user, //would be 'dispach.user' being called form App.js
			};

		default:
			return state;
	}
};

export default reducer;
