import { useSelector } from "react-redux";
import ShopForm from "../ShopForm";

export default function EditShop() {
	// const shop = useSelector(state=>state.)
	const shop = useSelector((state) => state.shop.myshop);
	return <ShopForm shop={shop} formType='Edit Shop' />;
}
