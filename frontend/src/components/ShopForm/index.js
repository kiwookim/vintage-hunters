export default function ShopForm({ shop, formType }) {

  //give default banner
  //give default profile pic


	return (
		<section className='section-container'>
			<h3 className='form-title'>Set Up Shop to become a seller!</h3>
			<form className='form-container'>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='city'>
						City <small className='required-tag'>REQUIRED</small>
					</label>
					<input id='city' type='text' required />
				</div>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='state'>
						State <small className='required-tag'>REQUIRED</small>
					</label>
					<input id='state' type='text' required />
				</div>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='profile-pic'>
						Profile Pic?
					</label>
					<input placeholder='profile url here' id='profile-pic' type='url' />
				</div>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='banner'>
						Banner for your Shop?
					</label>
					<input placeholder='banner url here' id='banner' type='url' />
				</div>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='name'>
						Shop Name <small className='required-tag'>REQUIRED</small>
					</label>
					<input id='name' type='text' required />
				</div>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='desc'>
						Shop Description <small className='required-tag'>REQUIRED</small>
					</label>
					<textarea id='desc' type='text' required />
				</div>
				<input id='submit-button' type='submit' value={formType} />
			</form>
		</section>
	);
}
