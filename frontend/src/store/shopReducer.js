import { csrfFetch } from "./csrf";

const GET_DETAILS = "/shop";
const GET_MYSHOP = "/myshop";
const CREATE_MYSHOP = "/myshop/create";
const EDIT_SHOP = "/myshop/edit";
const GET_LISTINGS_BYSHOP = "/shop/:shopId/listings";
//ACTIONS
const actionGetDetails = (shopDetails) => {
	return {
		type: GET_DETAILS,
		payload: shopDetails,
	};
};
const actionGetMyShop = (myShop) => {
	return {
		type: GET_MYSHOP,
		payload: myShop,
	};
};
const actionGetListingsByShop = (allListings) => {
	return {
		type: GET_LISTINGS_BYSHOP,
		payload: allListings,
	};
};
const actionCreateShop = (myShop) => {
	return {
		type: CREATE_MYSHOP,
		payload: myShop,
	};
};
const actionEditShop = (editedShop) => {
	return {
		type: EDIT_SHOP,
		payload: editedShop,
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
//get My Shop
export const thunkGetMyShop = () => async (dispatch) => {
	const response = await csrfFetch("/api/shop/my");
	if (response.ok) {
		const myShop = await response.json();
		dispatch(actionGetMyShop(myShop));
		return myShop;
	}
};
//get All Listings by SHOP
export const thunkAllListingsByShop = (shopId) => async (dispatch) => {
	const response = await csrfFetch(`/api/shop/${shopId}/listings`);
	if (response.ok) {
		const allListingsByShop = await response.json();
		console.log("REDUCER", allListingsByShop);
		dispatch(actionGetListingsByShop(allListingsByShop));
		return allListingsByShop;
	}
};

//create shop
export const thunkCreateShop = (myshop) => async (dispatch) => {
	try {
		const response = await csrfFetch("/api/shop", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(myshop),
		});
		if (response.ok) {
			const myShop = await response.json();
			dispatch(actionCreateShop(myShop));
			return myShop;
		}
	} catch (e) {
		const error = await e.json();
		const validationError = error.errors;
		return validationError;
	}
};
//edit shop
export const thunkEditShop = (shop) => async (dispatch) => {
	try {
		const response = await csrfFetch("/api/shop/my/edit", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(shop),
		});
		console.log("IN EDIT SHOP REDUCER");
		if (response.ok) {
			console.log("RESPONSE OK?????");
			const editedShop = await response.json();
			console.log("editedShop, REDUCER", editedShop);
			dispatch(actionEditShop(editedShop));
			return editedShop;
		} else {
			console.log("wtf");
		}
	} catch (e) {
		const error = await e.json();
		const validationError = error.errors;
		return validationError;
	}
};
const normalize = (arr) => {
	const resultObj = {};
	console.log("REDUCER NORMALIZE", arr);
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};
const initialState = {
	shop: {},
	myshop: {},
	shoplistings: {},
};
//REDUCER
export default function shopReducer(state = initialState, action) {
	const newState = { ...state };
	switch (action.type) {
		case GET_DETAILS:
			newState.shop = { ...action.payload };
			return newState;
		case GET_MYSHOP:
			newState.myshop = { ...action.payload };
			return newState;
		case CREATE_MYSHOP:
			newState.myshop = { ...action.payload };
			newState.shop = { ...action.payload };
			return newState;
		case EDIT_SHOP:
			newState.myshop = { ...action.payload };
			newState.shop = { ...action.payload };
			return newState;
		case GET_LISTINGS_BYSHOP:
			newState.shoplistings = normalize(action.payload.Listings);
			return newState;
		default:
			return state;
	}
}
