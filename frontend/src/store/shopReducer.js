import { csrfFetch } from "./csrf";

const GET_DETAILS = "/shop";
const GET_MYSHOP = "/myshop";
const CREATE_MYSHOP = "/myshop/create";
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
const actionCreateShop = (myShop) => {
	return {
		type: CREATE_MYSHOP,
		payload: myShop,
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
//create shop
export const thunkCreateShop = (myshop) => async (dispatch) => {
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
	}
};

const initialState = {
	shop: {},
	myshop: {},
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
			newState.myShop = { ...action.payload };
			return newState;
		default:
			return state;
	}
}
