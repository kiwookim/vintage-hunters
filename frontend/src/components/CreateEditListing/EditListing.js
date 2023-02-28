import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetDetails } from "../../store/listingsReducer";
import ListingForm from "../ListingForm";

export default function EditListing() {
	const { listingId } = useParams();
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(thunkGetDetails(listingId)).then(() => setIsLoaded(true));
	}, []);
	const listing = useSelector((state) => state.listings.singleListing);

	return isLoaded ? (
		<ListingForm
			mainPhoto={listing.ListingImages[listing.ListingImages.length - 1].url}
			listing={listing}
			formType='Edit Listing'
		/>
	) : (
		<h1>Loading...</h1>
	);
}
