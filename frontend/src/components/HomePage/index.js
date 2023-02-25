//homepage component

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllListings } from "../../store/listingsReducer";
import { thunkGetMyShop } from "../../store/shopReducer";
import ListingCard from "../ListingCard";
import "./HomePage.css";

export default function HomePage() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const allListingsObj = useSelector((state) => state.listings.allListings);
	const allListingsArr = Object.values(allListingsObj);
	// console.log(allListingsArr);
	useEffect(() => {
		dispatch(thunkGetAllListings())
			.then(() => setIsLoaded(true))
			.then(() => dispatch(thunkGetMyShop()));
		// const myShop = await dispatch(thunkGetMyShop());
		// dispatch(thunkGetMyShop());
	}, [dispatch]);

	return isLoaded ? (
		<div className='all-listings-container'>
			{allListingsArr.map((listing) => (
				<ListingCard listing={listing} key={listing.id} />
			))}
		</div>
	) : (
		<h1>Loading...</h1>
	);
}
