import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateShop, thunkEditShop } from "../../store/shopReducer";
export default function ShopForm({ shop, formType }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const [city, setCity] = useState(shop.city);
	const [state, setState] = useState(shop.state);
	const [profileUrl, setProfileUrl] = useState(shop.profileUrl);
	const [bannerImgUrl, setBannerImgUrl] = useState(shop.bannerImgUrl);
	const [name, setName] = useState(shop.name);
	const [description, setDescription] = useState(shop.description);
	const [validationErrors, setValidationErrors] = useState([]);
	// const currUserId = useSelector((state) => state.session.user.id);
	const handleSubmit = async (e) => {
		e.preventDefault();
		shop = {
			...shop,
			city,
			state,
			profileUrl,
			bannerImgUrl,
			name,
			description,
		};
		//Create Shop
		if (formType === "Create Shop") {
			// dispatch(thunkCreateShop(shop)).then((res) => {
			// 	history.push(`/shop/${res.id}`);
			// });
			const createdShop = await dispatch(thunkCreateShop(shop));
			if (createdShop.id) {
				history.push(`/shop/${createdShop.id}`);
			} else {
				setValidationErrors(Object.values(createdShop));
			}
		}
		// Edit Shop
		if (formType === "Edit Shop") {
			const editedShop = await dispatch(thunkEditShop(shop));
			if (editedShop.id) {
				history.push(`/shop/${editedShop.id}`);
			} else {
				setValidationErrors(Object.values(editedShop));
			}
		}
	};
	return (
		<section className='section-container'>
			{formType === "Create Shop" ? (
				<h3 className='form-title'>Set Up Shop to become a seller!</h3>
			) : (
				<h3 className='form-title'>Edit Shop</h3>
			)}
			{validationErrors &&
				validationErrors.map((err) => (
					<ul>
						<li key={err} style={{ color: "red" }}>
							{err}
						</li>
					</ul>
				))}
			<form className='form-container' onSubmit={handleSubmit}>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='city'>
						City <small className='required-tag'>REQUIRED</small>
					</label>
					<input
						value={city}
						maxLength={30}
						onChange={(e) => setCity(e.target.value)}
						id='city'
						type='text'
						required
					/>
				</div>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='state'>
						State <small className='required-tag'>REQUIRED</small>
					</label>
					<input
						value={state}
						maxLength={30}
						onChange={(e) => setState(e.target.value)}
						id='state'
						type='text'
						required
					/>
				</div>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='profile-pic'>
						Have Profile Pic?
					</label>
					<input
						value={profileUrl}
						onChange={(e) => setProfileUrl(e.target.value)}
						placeholder='profile url here'
						id='profile-pic'
						type='url'
					/>
				</div>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='banner'>
						Have Banner for your Shop?
					</label>
					<input
						value={bannerImgUrl}
						onChange={(e) => setBannerImgUrl(e.target.value)}
						placeholder='banner url here'
						id='banner'
						type='url'
					/>
				</div>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='name'>
						Shop Name <small className='required-tag'>REQUIRED</small>
					</label>
					<input
						minLength={4}
						value={name}
						onChange={(e) => setName(e.target.value)}
						id='name'
						type='text'
						required
					/>
				</div>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='desc'>
						Shop Description <small className='required-tag'>REQUIRED</small>
					</label>
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						id='desc'
						type='text'
						required
					/>
				</div>
				<input id='submit-button' type='submit' value={formType} />
			</form>
		</section>
	);
}
