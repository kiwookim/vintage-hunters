import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { countries, categories, conditions } from "../../choices";
import { thunkCreateListing } from "../../store/listingsReducer";
export default function ListingForm({ listing, formType }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const [brandName, setBrandName] = useState(listing.brandName);
	const [model, setModel] = useState(listing.model);
	const [year, setYear] = useState(listing.year);
	const [originCountry, setOriginCountry] = useState(listing.originCountry);
	const [category, setCategory] = useState(listing.category);
	const [listingTitle, setListingTitle] = useState(listing.listingTitle);
	const [photoUrl, setPhotoUrl] = useState("");
	const [condition, setCondition] = useState(listing.condition);
	const [description, setDescription] = useState(listing.description);
	const [localPickUp, setLocalPickUp] = useState(
		listing.localPickUp ? "Yes" : "No"
	);
	const [returnPolicy, setReturnPolicy] = useState(listing.returnPolicy);
	const [shippingCost, setShippingCost] = useState(listing.shippingCost);
	const [listingPrice, setListingPrice] = useState(listing.listingPrice);
	const [acceptOffers, setAcceptOffers] = useState(
		listing.acceptOffers ? "Yes" : "No"
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		listing = {
			...listing,
			brandName,
			model,
			year,
			originCountry,
			category,
			listingTitle,
			condition,
			description,
			localPickUp: localPickUp === "Yes",
			returnPolicy,
			shippingCost,
			listingPrice,
			acceptOffers: acceptOffers === "Yes",
		};
		const imgObj = {
			url: photoUrl,
			preview: true,
		};
		// dispatch based on TYPE (Create Listing or Edit Listing)
		if (formType === "Create Listing") {
			dispatch(thunkCreateListing(listing, imgObj));
		}
	};
	return (
		<section>
			<h3>Tell us about your gear</h3>
			<form onSubmit={handleSubmit}>
				<label className='input-label-container'>
					Brand<small className='required-tag'>REQUIRED</small>
					<input
						type='text'
						value={brandName}
						onChange={(e) => setBrandName(e.target.value)}
					/>
				</label>
				<label className='input-label-container'>
					Model<small className='required-tag'>REQUIRED</small>
					<input
						type='text'
						value={model}
						onChange={(e) => setModel(e.target.value)}
					/>
				</label>
				<div className='year-input'>
					<label className='input-label-container'>
						Year
						<input
							type='text'
							value={year}
							onChange={(e) => setYear(e.target.value)}
						/>
					</label>
					<p>
						If you don't know the exact year, use a fuzzy date like "mid-90s" or
						"1953-1957."
					</p>
				</div>
				<label className='input-label-container'>
					Manufacturer's Country
					<select
						onChange={(e) => setOriginCountry(e.target.value)}
						value={originCountry}
					>
						<option>Please choose an option if available</option>
						{countries.map((country) => (
							<option key={country}>{country}</option>
						))}
					</select>
				</label>
				<label className='input-label-container'>
					Categories <small className='required-tag'>REQUIRED</small>
					<select
						onChange={(e) => setCategory(e.target.value)}
						value={category}
					>
						{categories.map((category) => (
							<option key={category}>{category}</option>
						))}
					</select>
				</label>
				<label className='input-label-container'>
					Listing Title <small className='required-tag'>REQUIRED</small>
					<input
						type='text'
						value={listingTitle}
						onChange={(e) => setListingTitle(e.target.value)}
					/>
				</label>
				<label className='input-label-container'>
					Upload Photo <small className='required-tag'>REQUIRED</small>
					<input
						type='text'
						value={photoUrl}
						onChange={(e) => setPhotoUrl(e.target.value)}
						placeholder='put photo url here'
					/>
				</label>
				<label className='input-label-container'>
					Condition <small className='required-tag'>REQUIRED</small>
					<select
						onChange={(e) => setCondition(e.target.value)}
						value={condition}
					>
						<option>Please choose an option</option>
						{conditions.map((category) => (
							<option key={category}>{category}</option>
						))}
					</select>
				</label>
				<label className='input-label-container'>
					Describe this item and its condition
					<small className='required-tag'>REQUIRED</small>
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<label className='input-label-container'>
					local pickup?
					<select
						onChange={(e) => setLocalPickUp(e.target.value)}
						value={localPickUp}
					>
						<option>Yes</option>
						<option>No</option>
					</select>
				</label>
				<label className='input-label-container'>
					Return Policy
					<select
						onChange={(e) => setReturnPolicy(e.target.value)}
						value={returnPolicy}
					>
						<option>14 days</option>
						<option>30 days</option>
					</select>
				</label>
				<label className='input-label-container'>
					Shipping Costs<small className='required-tag'>REQUIRED</small>
					<input
						type='number'
						value={shippingCost}
						onChange={(e) => setShippingCost(e.target.value)}
					/>
				</label>
				<label className='input-label-container'>
					Listing Price<small className='required-tag'>REQUIRED</small>
					<input
						type='number'
						value={listingPrice}
						onChange={(e) => setListingPrice(e.target.value)}
					/>
				</label>
				<label className='input-label-container'>
					Accept Offers?
					<select
						onChange={(e) => setAcceptOffers(e.target.value)}
						value={acceptOffers}
					>
						<option>Yes</option>
						<option>No</option>
					</select>
				</label>
				<input id='submit-button' type='submit' value={formType} />
			</form>
		</section>
	);
}
