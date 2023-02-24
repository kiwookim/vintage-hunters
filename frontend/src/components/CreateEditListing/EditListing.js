import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ListingForm from "../ListingForm";

export default function EditListing() {
	const { listingId } = useParams();
	const listing = useSelector(
		(state) => state.listings.allListings[Number(listingId)]
	);

	return listing ? (
		<ListingForm listing={listing} formType='Edit Listing' />
	) : (
		<h1>Loading...</h1>
	);
}
