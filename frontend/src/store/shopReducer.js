import { csrfFetch } from "./csrf";

const GET_DETAILS = "/myshop";
//ACTIONS
const actionGetDetails = (shopDetails) => {
	return {
		type: GET_DETAILS,
		payload: shopDetails,
	};
};
//THUNKS
export const thunkGetDetails = (shopId) => async (dispatch) => {
	const response = await csrfFetch(`/api/shop/${shopId}`);
	if (response.ok) {
		const shopDetails = await response.json();
		// console.log("HIHIHIHIHIHIHI");
		// console.log("IN SHOP STORE", shopDetails);
		dispatch(actionGetDetails(shopDetails));
		return shopDetails;
	}
};
const initialState = {
	shop: {},
};
//REDUCER
export default function shopReducer(state = initialState, action) {
	const newState = { ...state };
	switch (action.type) {
		case GET_DETAILS:
			newState.shop = { ...action.payload };
			return newState;
		default:
			return state;
	}
}
