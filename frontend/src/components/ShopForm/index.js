import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateShop, thunkEditShop } from "../../store/shopReducer";
import "./ShopForm.css";
export default function ShopForm({ shop, formType }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const [city, setCity] = useState(shop.city);
	const [state, setState] = useState(shop.state);
	// const [profileUrl, setProfileUrl] = useState(shop.profileUrl);
	// console.log("PROFILE URL", shop.profileUrl);
	const [profileUrl, setProfileUrl] = useState(shop.profileUrl);
	const [previewProfile, setPreviewProfile] = useState(shop.profileUrl);
	const [previewBanner, setPreviewBanner] = useState(shop.bannerImgUrl);
	const [bannerImgUrl, setBannerImgUrl] = useState(shop.bannerImgUrl);
	const [name, setName] = useState(shop.name);
	const [description, setDescription] = useState(shop.description);
	const [validationErrors, setValidationErrors] = useState([]);

	// const currUserId = useSelector((state) => state.session.user.id);
	// console.log("CURRENT PROFILE URL", shop.profileUrl);
	const updateFile = (e) => {
		const file = e.target.files[0];
		// console.log("files", e.target.files);
		if (file) {
			setProfileUrl(file);
			setPreviewProfile(URL.createObjectURL(file));
		} else {
			setProfileUrl(shop.profileUrl);
			setPreviewProfile(shop.profileUrl);
		}
	};
	const updateBannerUrl = (e) => {
		const file = e.target.files[0];
		if (file) setBannerImgUrl(file);
		if (file) {
			setBannerImgUrl(file);
			setPreviewBanner(URL.createObjectURL(file));
		} else {
			setBannerImgUrl(shop.bannerImgUrl);
			setPreviewBanner(shop.bannerImgUrl);
		}
	};

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
						{formType === "Create Shop"
							? "Have Profile Pic?"
							: "Edit Profile Pic?"}
					</label>
					{/* <input
						value={profileUrl}
						onChange={(e) => setProfileUrl(e.target.value)}
						placeholder='profile url here'
						id='profile-pic'
						type='url'
					/> */}
					{/* AWS tryout */}
					{/* <div class="container">
      <div class="button-wrap">
        <label class="button" for="upload">Upload File</label>
        <input id="upload" type="file">
      </div>
    </div> */}
					<div className='img-btn-container'>
						<div clasName='btn-wrap'>
							<label className='button' htmlFor='profile-pic'></label>
							<input
								name='hi'
								onChange={updateFile}
								id='profile-pic'
								type='file'
							/>
						</div>
					</div>

					{previewProfile !== "" && (
						<img
							id='preview-shop-img'
							style={{ width: "100px", height: "100px", marginTop: "5px" }}
							src={previewProfile}
							alt='preview image'
						/>
					)}
				</div>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='banner'>
						Have Banner for your Shop?
					</label>
					{/* <input
						value={bannerImgUrl}
						onChange={(e) => setBannerImgUrl(e.target.value)}
						placeholder='banner url here'
						id='banner'
						type='url'
					/> */}
					<input type='file' onChange={updateBannerUrl} id='banner' />
					{previewBanner !== "" && (
						<img
							id='preview-banner-img'
							src={previewBanner}
							alt='previewBannerImg'
						/>
					)}
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
