import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { thunkFilterListings } from "../../store/listingsReducer";
import ListingCard from "../ListingCard";

export default function Category() {
	const { category } = useParams();
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const [isLoaded, setIsLoaded] = useState(false);
	const filteredListingsObj = useSelector(
		(state) => state.listings.filteredListings
	);
	const filteredListingsArr = Object.values(filteredListingsObj);
	useEffect(() => {
		dispatch(thunkFilterListings(category)).then(() => setIsLoaded(true));
	}, [dispatch, category]);
	console.log(filteredListingsArr);
	// ReUse ListingCard component to render listings based on category....
	return isLoaded ? (
		<div className='all-listings-container'>
			{filteredListingsArr.map((listing) => (
				<ListingCard listing={listing} key={listing.id} />
			))}
		</div>
	) : (
		<div className='loader-container'>
			<div className='spinner'></div>
		</div>
	);
}
