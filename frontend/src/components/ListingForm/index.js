import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { countries, categories, conditions } from "../../choices";
import {
	thunkCreateListing,
	thunkEditListing,
} from "../../store/listingsReducer";
import "./ListingForm.css";
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
	const [validationErr, setValidationErr] = useState([]);

	const handleSubmit = async (e) => {
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
			const returnedListing = await dispatch(
				thunkCreateListing(listing, imgObj)
			);
			if (returnedListing.id) {
				history.push(`/listings/${returnedListing.id}`);
			} else {
				//if there is error
				setValidationErr(Object.values(returnedListing));
			}
		}
		// Edit Listing
		if (formType === "Edit Listing") {
			const editedListing = await dispatch(thunkEditListing(listing));
			if (editedListing.id) {
				history.push(`/listings/${editedListing.id}`);
			} else {
				//if there is error
				console.log("error message from backend", editedListing);
				setValidationErr(Object.values(editedListing));
			}
		}
	};
	return (
		<section className='section-container'>
			<h3 className='form-title'>Tell us about your gear</h3>
			{validationErr &&
				validationErr.map((err) => (
					<ul>
						<li style={{ color: "red" }} key={err}>
							{err}
						</li>
					</ul>
				))}
			<form className='form-container' onSubmit={handleSubmit}>
				<div className='each-input-field'>
					<label htmlFor='brand' className='input-label-container'>
						Brand<small className='required-tag'>REQUIRED</small>
					</label>
					<input
						id='brand'
						required
						type='text'
						value={brandName}
						onChange={(e) => setBrandName(e.target.value)}
					/>
				</div>
				<div className='each-input-field'>
					<label htmlFor='id' className='input-label-container'>
						Model<small className='required-tag'>REQUIRED</small>
					</label>
					<input
						id='model'
						required
						type='text'
						value={model}
						onChange={(e) => setModel(e.target.value)}
					/>
				</div>
				<div className='each-input-field'>
					<label htmlFor='year' className='input-label-container'>
						Year
					</label>
					<input
						id='year'
						type='text'
						value={year}
						onChange={(e) => setYear(e.target.value)}
					/>
					<p>
						If you don't know the exact year, use a fuzzy date like "mid-90s" or
						"1953-1957."
					</p>
				</div>
				<div className='each-input-field'>
					<label htmlFor='origin' className='input-label-container'>
						Manufacturer's Country
					</label>
					<select
						id='origin'
						onChange={(e) => setOriginCountry(e.target.value)}
						value={originCountry}
					>
						<option>Please choose an option if available</option>
						{countries.map((country) => (
							<option key={country}>{country}</option>
						))}
					</select>
				</div>
				<div className='each-input-field'>
					<label htmlFor='category' className='input-label-container'>
						Categories <small className='required-tag'>REQUIRED</small>
					</label>
					<select
						id='category'
						required
						onChange={(e) => setCategory(e.target.value)}
						value={category}
					>
						<option>{}</option>
						{categories.map((category) => (
							<option key={category}>{category}</option>
						))}
					</select>
				</div>
				<div className='each-input-field'>
					<label htmlFor='title' className='input-label-container'>
						Listing Title <small className='required-tag'>REQUIRED</small>
					</label>
					<input
						id='title'
						required
						type='text'
						value={listingTitle}
						onChange={(e) => setListingTitle(e.target.value)}
					/>
				</div>
				{formType === "Create Listing" && (
					<div className='each-input-field'>
						<label htmlFor='image' className='input-label-container'>
							Upload Photo <small className='required-tag'>REQUIRED</small>
						</label>
						<input
							id='image'
							required
							type='url'
							value={photoUrl}
							onChange={(e) => setPhotoUrl(e.target.value)}
							placeholder='put photo url here'
						/>
					</div>
				)}
				<div className='each-input-field'>
					<label htmlFor='condition' className='input-label-container'>
						Condition <small className='required-tag'>REQUIRED</small>
					</label>
					<select
						id='condition'
						required
						onChange={(e) => setCondition(e.target.value)}
						value={condition}
					>
						<option>Please choose an option</option>
						{conditions.map((category) => (
							<option key={category}>{category}</option>
						))}
					</select>
				</div>
				<div className='each-input-field'>
					<label htmlFor='textarea' className='input-label-container'>
						Describe this item and its condition
						<small className='required-tag'>REQUIRED</small>
					</label>
					<textarea
						id='textarea'
						required
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className='each-input-field'>
					<label htmlFor='local' className='input-label-container'>
						local pickup?
					</label>
					<select
						id='local'
						onChange={(e) => setLocalPickUp(e.target.value)}
						value={localPickUp}
					>
						<option>Yes</option>
						<option>No</option>
					</select>
				</div>
				<div className='each-input-field'>
					<label htmlFor='return' className='input-label-container'>
						Return Policy <small className='required-tag'>REQUIRED</small>
					</label>
					<select
						id='return'
						required
						onChange={(e) => setReturnPolicy(e.target.value)}
						value={returnPolicy}
					>
						<option>{}</option>
						<option>14 days</option>
						<option>30 days</option>
					</select>
				</div>
				<div className='each-input-field'>
					<label htmlFor='shipping' className='input-label-container'>
						Shipping Costs<small className='required-tag'>REQUIRED</small>
					</label>
					<input
						id='shipping'
						required
						type='number'
						value={shippingCost}
						onChange={(e) => setShippingCost(e.target.value)}
						placeholder='For free shipping put 0'
					/>
				</div>
				<div className='each-input-field'>
					<label htmlFor='price' className='input-label-container'>
						Listing Price<small className='required-tag'>REQUIRED</small>
					</label>
					<input
						id='price'
						required
						type='number'
						value={listingPrice}
						onChange={(e) => setListingPrice(e.target.value)}
					/>
				</div>
				<div className='each-input-field'>
					<label htmlFor='offers' className='input-label-container'>
						Accept Offers?
					</label>
					<select
						id='offers'
						onChange={(e) => setAcceptOffers(e.target.value)}
						value={acceptOffers}
					>
						<option>Yes</option>
						<option>No</option>
					</select>
				</div>
				<input id='submit-button' type='submit' value={formType} />
			</form>
		</section>
	);
}
