//homepage component

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllListings } from "../../store/listingsReducer";

export default function HomePage() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const allListingsObj = useSelector((state) => state.listings.allListings);
	const allListingsArr = Object.values(allListingsObj);
	console.log(allListingsArr);
	useEffect(() => {
		dispatch(thunkGetAllListings()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return isLoaded ? (
		<div className='all-listings-container'>
			<h1>Render ListingCards here</h1>
		</div>
	) : (
		<h1>Loading...</h1>
	);
}
