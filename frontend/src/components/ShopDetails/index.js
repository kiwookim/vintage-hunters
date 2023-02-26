import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { thunkGetDetails, thunkGetMyShop } from "../../store/shopReducer";
import "./ShopDetails.css";

export default function ShopDetails() {
	const [isLoaded, setIsLoaded] = useState(false);
	const { shopId } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(thunkGetMyShop());
		dispatch(thunkGetDetails(shopId)).then(() => setIsLoaded(true));
	}, [dispatch, shopId]);
	const thisShop = useSelector((state) => state.shop.shop);
	const currUserId = useSelector((state) => state.session.user.id);
	return isLoaded ? (
		<>
			{thisShop.bannerImgUrl && (
				<img id='banner-img' src={thisShop.bannerImgUrl} alt='banner image' />
			)}
			<img
				id='profile-img'
				src={thisShop.profileUrl}
				alt='profile-img'
				onError={(e) =>
					(e.target.src =
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Cl56H6WgxJ8npVqyhefTdQHaHa%26pid%3DApi&f=1&ipt=11e91deec8c46277a423de237d3e38748d21acf60fd2cbb378f9ea8b944f1363&ipo=images")
				}
			/>
			<h1>{thisShop.name}</h1>
			<span>{thisShop.city}</span>
			<span>{thisShop.state}</span>
			{/* Show Edit Shop if authorized */}
			{thisShop.userId === currUserId && (
				<Link to='/myshop/edit'>
					<button>Edit Shop</button>
				</Link>
			)}
			<p>{thisShop.description}</p>
			{/* show all of this shop's listings at the bottom???? */}
			{thisShop.Listings.length === 0 && (
				<>
					<p>Your shop is empty right now. Why not list some gear?</p>
					<Link to='/sell/listings/new'>
						<button>List an Item</button>
					</Link>
				</>
			)}
		</>
	) : (
		<h1>Loading...</h1>
	);
}
