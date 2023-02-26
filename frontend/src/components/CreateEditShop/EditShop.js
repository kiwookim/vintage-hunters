import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetMyShop } from "../../store/shopReducer";
import ShopForm from "../ShopForm";

export default function EditShop() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(thunkGetMyShop());
	}, []);
	const shop = useSelector((state) => state.shop.myshop);
	return <ShopForm shop={shop} formType='Edit Shop' />;
}
