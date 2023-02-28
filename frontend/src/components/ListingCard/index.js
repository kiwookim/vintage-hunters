import "./ListingCard.css";
import { Link } from "react-router-dom";

export default function ListingCard({ listing }) {
	return (
		<Link to={`/listings/${listing.id}`}>
			<div className='listing-card'>
				<img
					className='card-img-container'
					onError={(ev) =>
						(ev.target.src =
							"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jr_ZltLCrkS1ZmAB3-B_IgHaGZ%26pid%3DApi&f=1&ipt=976e27ed4e4601b5fc08f5fc9b8f07ef671de7909421e65a56d3997ada849a9e&ipo=images")
					}
					src={listing.PreviewImage}
					alt={listing.listingTitle}
				/>
				<div className='listing-card-bottom'>
					<h4 className='listing-card-title-h4'>
						{listing.listingTitle.length > 60
							? listing.listingTitle.slice(0, 60) + "..."
							: listing.listingTitle}
					</h4>
					<h2>${listing.listingPrice}</h2>
					<p>Used-{listing.condition}</p>
					{listing.shippingCost === 0 ? (
						<p>
							{" "}
							<i id='icon-img' className='fa-solid fa-truck'></i>Free Shipping
						</p>
					) : null}
					<p>
						<i id='icon-img' className='fa-solid fa-box-open'></i>
						{listing.returnPolicy} Return Policy
					</p>
				</div>
			</div>
		</Link>
	);
}
