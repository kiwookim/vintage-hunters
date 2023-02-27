import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetMyShop } from "../../store/shopReducer";
import ShopForm from "../ShopForm";

export default function EditShop() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(thunkGetMyShop()).then(() => setIsLoaded(true));
	}, []);
	const shop = useSelector((state) => state.shop.myshop);
	return isLoaded ? (
		<ShopForm shop={shop} formType='Edit Shop' />
	) : (
		<h1>Loading....</h1>
	);
}
