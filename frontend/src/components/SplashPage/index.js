//splashpage component
import "./SplashPage.css";
export default function SplashPage() {
	return (
		<>
			<div id='splash-bg'>
				<div id='splash-txt'>
					<h1 id='splash-title'>Find Your Dream Gear</h1>
					<small className='intro-txt'>
						Join small community of music lovers who use Vintage Hunters
						<br /> to find your dream gear
					</small>
					<div className='about-container'>
						<span className='about-links'>LinkedIn</span>
						<span className='about-links'>GitHub</span>
					</div>
				</div>
			</div>
			<div id='splash-bottom-half'>
				<h2>Anyone Can Sell On Vintage Hunters</h2>
				<div className='seller-steps-container'>
					<div className='step-container'>
						<span>1</span>
						<div className='step-txt'>
							<h4>Make Shop Profile</h4>
							<p>Easy to make your online shop</p>
						</div>
					</div>

					<div className='step-container'>
						<span>2</span>
						<div className='step-txt'>
							<h4>List It</h4>
							<p>
								Easy to List your gear and keep track of your other listings
							</p>
						</div>
					</div>

					<div className='step-container'>
						<span>3</span>
						<div className='step-txt'>
							<h4>Sell It</h4>
							<p>Gear heads like you search for gear on Vintage Hunters</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
