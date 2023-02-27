import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ListingForm from "../ListingForm";

export default function EditListing() {
	const { listingId } = useParams();
	// const listing = useSelector(
	// 	(state) => state.listings.allListings[Number(listingId)]
	// );
	const listing = useSelector((state) => state.listings.singleListing);
	const mainPhoto = listing.ListingImages[listing.ListingImages.length - 1].url;
	console.log(mainPhoto);
	console.log(listing);
	return listing ? (
		<ListingForm
			mainPhoto={mainPhoto}
			listing={listing}
			formType='Edit Listing'
		/>
	) : (
		<h1>Loading...</h1>
	);
}


//CHECK IF EMPTY
