import { useState } from "react";
import { countries, categories } from "../../choices";
export default function ListingForm() {
	const [brandName, setBrandName] = useState("");
	const [model, setModel] = useState("");
	const [year, setYear] = useState("");
	const [originCountry, setOriginCountry] = useState("");
	const [category, setCategory] = useState("");
	const [listingTitle, setListingTitle] = useState("");
	const [photoUrl, setPhotoUrl] = useState("");

	return (
		<section>
			<h3>Tell us about your gear</h3>
			<form>
				<label className='input-label-container'>
					Brand<span className='required-tag'>REQUIRED</span>
					<input
						type='text'
						value={brandName}
						onChange={(e) => setBrandName(e.target.value)}
					/>
				</label>
				<label className='input-label-container'>
					Model<span className='required-tag'>REQUIRED</span>
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
					Manufacturer's Country <span className='required-tag'>REQUIRED</span>
					<select
						onChange={(e) => setOriginCountry(e.target.value)}
						value={originCountry}
					>
						{countries.map((country) => (
							<option key={country}>{country}</option>
						))}
					</select>
				</label>
				<label className='input-label-container'>
					Categories <span className='required-tag'>REQUIRED</span>
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
					Listing Title <span className='required-tag'>REQUIRED</span>
					<input
						type='text'
						value={listingTitle}
						onChange={(e) => setListingTitle(e.target.value)}
					/>
				</label>
				<label className='input-label-container'>
					Upload Photo <span className='required-tag'>REQUIRED</span>
					<input
						type='text'
						value={photoUrl}
						onChange={(e) => setPhotoUrl(e.target.value)}
						placeholder='put photo url here'
					/>
				</label>
			</form>
		</section>
	);
}
