//listingReducer
import { csrfFetch } from "./csrf";

const GET_ALL = "listings/getAll";
const GET_DETAILS = "listings/:listingId";
const CREATE_LISTING = "listings/new";
//ACTIONS
const actionGetAll = (allListings) => {
	return {
		type: GET_ALL,
		payload: allListings,
	};
};
const actionGetDetails = (listingDetails) => {
	return {
		type: GET_DETAILS,
		payload: listingDetails,
	};
};
// const actionCreateListing = (createdListing, createdListingImg) => {
// 	return {
// 		type: CREATE_LISTING,
// 		payload: createdListing,
// 	};
// };
//THUNKS
export const thunkGetAllListings = () => async (dispatch) => {
	const response = await csrfFetch("/api/listings");
	if (response.ok) {
		const allListings = await response.json();
		dispatch(actionGetAll(allListings));
		return allListings;
	}
};
export const thunkGetDetails = (listingId) => async (dispatch) => {
	const response = await csrfFetch(`/api/listings/${listingId}`);
	if (response.ok) {
		const listingDetails = await response.json();
		// console.log("inside thunkGetDetails", listingDetails);
		dispatch(actionGetDetails(listingDetails));
	}
};
export const thunkCreateListing = (listing, imgObj) => async (dispatch) => {
	const response = await csrfFetch("/api/listings/new", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(listing),
	});
	if (response.ok) {
		const createdListing = response.json();
		const responseAddImage = await csrfFetch(
			`/api/listings/${createdListing.id}/images`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(imgObj),
			}
		);
		if (responseAddImage.ok) {
			const createdListingImg = await responseAddImage.json();
			dispatch(actionCreateListing(createdListing, createdListingImg));
		}
	}
};

const normalize = (arr) => {
	const resultObj = {};
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};
const initialState = {
	allListings: {},
	singleListing: {},
};
// REDUCER
export default function listingsReducer(state = initialState, action) {
	const newState = { ...state };
	switch (action.type) {
		case GET_ALL:
			newState.allListings = normalize(action.payload.Listings);
			return newState;
		case GET_DETAILS:
			newState.singleListing = { ...action.payload };
			return newState;
		default:
			return state;
	}
}
