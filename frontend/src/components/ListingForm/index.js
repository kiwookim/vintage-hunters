import { useState } from "react";

export default function ListingForm() {
	const [brandName, setBrandName] = useState("");
	const [model, setModel] = useState("");
	const [year, setYear] = useState("");
	const [origin, setOrigin] = useState("");
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
			</form>
		</section>
	);
}
