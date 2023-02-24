//listingReducer
import { csrfFetch } from "./csrf";

const GET_ALL = "listings/getAll";
const GET_DETAILS = "listings/:listingId";
const CREATE_LISTING = "listings/new";
const DELETE_LISTING = "listings/:listingId/delete";
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
const actionCreateListing = (createdListing, createdListingImg) => {
	return {
		type: CREATE_LISTING,
		payload: createdListing,
	};
};
const actionDeleteListing = (listingId) => {
	return {
		type: DELETE_LISTING,
		payload: listingId,
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
		const createdListing = await response.json();
		// console.log("INSIDE CREATE LISTING THUNK", createdListing);
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
			// console.log("INSIDE CREATE LISTING THUNK", createdListingImg);
			dispatch(actionCreateListing(createdListing, createdListingImg));
			return createdListing;
		}
	}
};
export const thunkDeleteListing = (listingId) => async (dispatch) => {
	const response = await csrfFetch(`/api/listings/${listingId}/delete`, {
		method: "DELETE",
	});
	if (response.ok) {
		const data = await response.json();
		dispatch(actionDeleteListing(listingId));
		return data;
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
		case CREATE_LISTING:
			newState.allListings = {
				...newState.allListings,
				[action.payload.id]: action.payload,
			};
			return newState;
		default:
			return state;
	}
}
