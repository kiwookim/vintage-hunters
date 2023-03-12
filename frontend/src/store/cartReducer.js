import { csrfFetch } from "./csrf";
const GET_CART = "/cart/:cartId";
const actionGetCart = (myCart) => {
	return {
		type: GET_CART,
		payload: myCart,
	};
};
export const thunkGetCart = () => async (dispatch) => {
	const response = await csrfFetch("/api/cart");
	if (response.ok) {
		const myCart = await response.json();
		// console.log("CART REDUCER-- MY CART INFO", myCart);
		dispatch(actionGetCart(myCart));
		return myCart;
	}
};

const initialState = {
	currCart: [],
};
export default function cartReducer(state = initialState, action) {
	const newState = { ...state };
	switch (action.type) {
		case GET_CART:
			newState.currCart = [...action.payload];
			return newState;
		default:
			return state;
	}
}
