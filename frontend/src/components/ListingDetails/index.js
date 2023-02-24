import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetDetails } from "../../store/listingsReducer";

export default function ListingDetails() {
	const { listingId } = useParams();
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(thunkGetDetails(listingId)).then(() => setIsLoaded(true));
	}, [dispatch]);
	const thisListing = useSelector((state) => state.listings.singleListing);
	const currUserId = useSelector((state) => state.session.user.id);
	const buttonContent = (
		<>
			<button>Edit Listing</button>
			<button>Delete Listing</button>
		</>
	);
	return isLoaded ? (
		<div>
			{/* display multiple images would be good here(carousel or something) */}
			<img
				onError={(ev) =>
					(ev.target.src =
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jr_ZltLCrkS1ZmAB3-B_IgHaGZ%26pid%3DApi&f=1&ipt=976e27ed4e4601b5fc08f5fc9b8f07ef671de7909421e65a56d3997ada849a9e&ipo=images")
				}
				src={thisListing.ListingImages[0]?.url}
				alt={thisListing.listingTitle}
			/>
			<p>{thisListing.Shop.name}</p>
			<p>{thisListing.Shop.city}</p>
			<p>{thisListing.Shop.state}</p>
			<h1>{thisListing.listingTitle}</h1>
			<p>{thisListing.condition}</p>
			<h2>${thisListing.listingPrice}</h2>
			<p>{thisListing.shippingCost === 0 ? "Free Shipping" : null}</p>
			{currUserId === thisListing.Shop.userId ? buttonContent : null}
		</div>
	) : (
		<h1>Loading...</h1>
	);
}
