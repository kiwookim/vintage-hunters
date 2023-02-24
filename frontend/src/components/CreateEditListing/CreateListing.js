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

	return <ListingForm listing={newListing} formType='Create Listing' />;
}
