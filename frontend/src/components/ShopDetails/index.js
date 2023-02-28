import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	Link,
	Route,
	Switch,
	useLocation,
	useParams,
	useRouteMatch,
} from "react-router-dom";
import ListingCard from "../ListingCard";
import {
	thunkAllListingsByShop,
	thunkGetDetails,
	thunkGetMyShop,
} from "../../store/shopReducer";
import ShopForm from "../ShopForm";
import "./ShopDetails.css";

export default function ShopDetails() {
	const { pathname } = useLocation();
	const [isLoaded, setIsLoaded] = useState(false);
	const { shopId } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(thunkGetMyShop());
		dispatch(thunkGetDetails(shopId))
			.then(() => dispatch(thunkAllListingsByShop(shopId)))
			.then(() => setIsLoaded(true));
	}, [dispatch, shopId]);
	const thisShop = useSelector((state) => state.shop.shop);
	const currUserId = useSelector((state) => state.session.user.id);
	const allListingsByShop = useSelector((state) => state.shop.shoplistings);
	const myShop = useSelector((state) => state.shop.myshop);
	let { path, url } = useRouteMatch();
	console.log("allListingsByShop", Object.values(allListingsByShop));
	return isLoaded ? (
		<div className='shop-profile-container'>
			{thisShop.bannerImgUrl && (
				<img id='banner-img' src={thisShop.bannerImgUrl} alt='banner image' />
			)}
			<div className='profile-top-container'>
				<img
					id='profile-img'
					src={thisShop.profileUrl}
					alt='profile-img'
					onError={(e) =>
						(e.target.src =
							"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Cl56H6WgxJ8npVqyhefTdQHaHa%26pid%3DApi&f=1&ipt=11e91deec8c46277a423de237d3e38748d21acf60fd2cbb378f9ea8b944f1363&ipo=images")
					}
				/>
				<div className='shop-info-container'>
					<h1>{thisShop.name}</h1>
					<div className='shop-location-container'>
						<i className='fa-solid fa-location-dot'></i>
						<span>{thisShop.city},</span>
						<span>{thisShop.state}</span>
					</div>
					{/* Show Edit Shop if authorized */}
					{thisShop.userId === currUserId && (
						<Link to='/myshop/edit'>
							<button>Edit Shop</button>
						</Link>
					)}
					<p>{thisShop.description}</p>
				</div>
			</div>
			{/* show all of this shop's listings at the bottom???? */}

			<div className='shop-bottom-profile'>
				<nav id='nested-navlink'>
					<Link className={path ? "select-border-bottom" : ""} to={`${url}`}>
						Listings <span>({thisShop.Listings.length})</span>
					</Link>

					<Link>Reviews</Link>
				</nav>
				<h2 id='results-tag'>{thisShop.Listings.length} Results</h2>
				{thisShop.Listings.length === 0 && (
					<div className='shop-empty-container'>
						<h2>Your shop is empty right now. Why not list some gear?</h2>
						<Link to='/sell/listings/new'>
							<button>List an Item</button>
						</Link>
					</div>
				)}
				<Switch>
					<Route>
						<div className='all-listings-by-shop-container'>
							{Object.values(allListingsByShop).map((listing) => (
								<ListingCard key={listing.id} listing={listing} />
							))}
						</div>
					</Route>
				</Switch>
			</div>
		</div>
	) : (
		<h1>Loading...</h1>
	);
}
