import "./ListingCard.css";
import { Link } from "react-router-dom";

export default function ListingCard({ listing }) {
	return (
		<Link to={`/listings/${listing.id}`}>
			<div className='listing-card'>
				<img src={listing.PreviewImage} alt={listing.listingTitle} />
				<div className='listing-card-bottom'>
					<h4 className='listing-card-title-h4'>
						{listing.listingTitle.length > 60
							? listing.listingTitle.slice(0, 60) + "..."
							: listing.listingTitle}
					</h4>
					<h2>${listing.listingPrice}</h2>
					<p>Used-{listing.condition}</p>
					{listing.shippingCost === 0 ? <p>Free Shipping</p> : null}
					<p>{listing.returnPolicy} Return Policy</p>
				</div>
			</div>
		</Link>
	);
}
