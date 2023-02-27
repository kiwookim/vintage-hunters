import ListingForm from "../ListingForm";

export default function CreateListing() {
	const newListing = {
		brandName: "",
		model: "",
		year: "",
		originCountry: "",
		category: "",
		listingTitle: "",
		condition: "",
		description: "",
		localPickUp: false,
		returnPolicy: "",
		shippingCost: "",
		listingPrice: 0,
		acceptOffers: true,
	};
	const photoUrl = ''

	return <ListingForm mainPhoto={photoUrl} listing={newListing} formType='Create Listing' />;
}
