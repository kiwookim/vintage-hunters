import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetDetails } from "../../store/shopReducer";
import "./ShopDetails.css";

export default function ShopDetails() {
	const [isLoaded, setIsLoaded] = useState(false);
	const { shopId } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(thunkGetDetails(shopId)).then(() => setIsLoaded(true));
	}, [dispatch]);
	const thisShop = useSelector((state) => state.shop.shop);

	return isLoaded ? (
		<>
			{thisShop.bannerImgUrl && (
				<img id='banner-img' src={thisShop.bannerImgUrl} alt='banner image' />
			)}
			{thisShop.profileUrl ? (
				<img id='profile-img' src={thisShop.profileUrl} alt='profile-img' />
			) : (
				<img
					id='profile-img'
					src='"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cL7I__td7Nfsz5ElpVdVcgHaHa%26pid%3DApi&f=1&ipt=fc8f0453d05d40dbd320d52930877d4a227f61d0ef93f0629da0f8429394da5e&ipo=images"'
					alt='default profile-img'
				/>
			)}
			<h1>{thisShop.name}</h1>
			<span>{thisShop.city}</span>
			<span>{thisShop.state}</span>
			<p>{thisShop.description}</p>
			{/* show all of this shop's listings at the bottom???? */}
		</>
	) : (
		<h1>Loading...</h1>
	);
}
