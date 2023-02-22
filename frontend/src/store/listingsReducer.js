//listingReducer
import { csrfFetch } from "./csrf";

const GET_ALL = "listings/getAll";
//ACTIONS
const actionGetAll = (allListings) => {
	return {
		type: GET_ALL,
		payload: allListings,
	};
};
//THUNKS
export const thunkGetAllListings = () => async (dispatch) => {
	const response = await csrfFetch("/api/listings");
	if (response.ok) {
		const allListings = await response.json();
		dispatch(actionGetAll(allListings));
		return allListings;
	}
};

const normalize = (arr) => {
	const resultObj = {};
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};
const initialState = {
	allListings: {},
};
// REDUCER
export default function listingsReducer(state = initialState, action) {
	const newState = { ...state };
	switch (action.type) {
		case GET_ALL:
			newState.allListings = normalize(action.payload.Listings);
			return newState;
		default:
			return state;
	}
}
