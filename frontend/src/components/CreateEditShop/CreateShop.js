import ShopForm from "../ShopForm";

export default function CreateShop() {
	const newShop = {
		city: "",
		state: "",
		profileUrl: "",
		bannerImgUrl: "",
		name: "",
		description: "",
	};
	return <ShopForm shop={newShop} formType='Create Shop' />;
}
