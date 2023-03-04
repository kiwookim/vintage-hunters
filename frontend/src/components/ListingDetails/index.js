import { useEffect, useRef, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	thunkGetDetails,
	thunkDeleteListing,
} from "../../store/listingsReducer";
import "./ListingDetails.css";
export default function ListingDetails() {
	const { listingId } = useParams();
	const history = useHistory();
	const [isLoaded, setIsLoaded] = useState(false);
	const [imgIdx, setImgIdx] = useState(0);
	// const [mainImg, setMainImg] = useState("");
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(thunkGetDetails(listingId)).then(() => setIsLoaded(true));
		// .then(() => setMainImg(thisListing.ListingImagesges[0].url));
	}, [dispatch]);
	const thisListing = useSelector((state) => state.listings.singleListing);
	// console.log(thisListing);
	const allImages = thisListing.ListingImages;
	const currUserId = useSelector((state) => state.session.user.id);
	const handleDelete = () => {
		dispatch(thunkDeleteListing(listingId)).then(() =>
			//can also redirect to Shop Profile
			history.push("/listings/categories")
		);
	};
	const updateMainImgRight = () => {
		if (imgIdx === allImages.length - 1) setImgIdx(0);
		else setImgIdx((prev) => prev + 1);
	};
	const updateMainImgLEFT = () => {
		if (imgIdx === 0) setImgIdx(allImages.length - 1);
		else setImgIdx((prev) => prev - 1);
	};

	const buttonContent = (
		<div className='ld-edit-button-container'>
			<Link to={`/sell/${listingId}/edit`}>
				<button>Edit Listing</button>
			</Link>
			<button onClick={handleDelete}>Delete Listing</button>
		</div>
	);
	const createAt = new Date(thisListing.createdAt);
	const dateNow = new Date();
	const diffInDays = (dateNow - createAt) / (1000 * 3600 * 24);
	let listedTime;
	if (diffInDays <= 1) {
		listedTime = "today";
	} else if (diffInDays > 1 && diffInDays < 2) {
		listedTime = "1 day ago";
	} else {
		listedTime = `${Math.floor(diffInDays)} days ago`;
	}

	return isLoaded ? (
		<section id='listing-details-section-container'>
			{/* display multiple images would be good here(carousel or something) */}
			<div className='ld-top-container'>
				<div className='ld-img-container'>
					<img
						id='listing-details-page-img'
						onError={(ev) =>
							(ev.target.src =
								"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jr_ZltLCrkS1ZmAB3-B_IgHaGZ%26pid%3DApi&f=1&ipt=976e27ed4e4601b5fc08f5fc9b8f07ef671de7909421e65a56d3997ada849a9e&ipo=images")
						}
						src={allImages[imgIdx]?.url}
						alt={thisListing.listingTitle}
					/>
					{allImages.length > 1 && (
						<div className='arrow-container'>
							<button onClick={updateMainImgLEFT}>
								<i className='fa-solid fa-chevron-left'></i>
							</button>
							<button onClick={updateMainImgRight}>
								<i className='fa-solid fa-chevron-right'></i>
							</button>
						</div>
					)}
				</div>
				<div className='ld-top-right'>
					<div>
						<Link to={`/shop/${thisListing.Shop.id}`}>
							<h4 id='ld-shop-name'>{thisListing.Shop.name}</h4>
						</Link>
						<div className='city-state'>
							<small>{thisListing.Shop.city},</small>
							<small>{thisListing.Shop.state}</small>
						</div>
					</div>
					<div>
						<h1 id='listing-title'>{thisListing.listingTitle}</h1>
						<p>
							<span className='listing-condition'>
								Used-{thisListing.condition}
							</span>
						</p>
					</div>
					<div>
						<h2>${thisListing.listingPrice}</h2>
						{thisListing.shippingCost > 0 ? (
							<small>{`+${thisListing.shippingCost} Shipping`}</small>
						) : (
							<small>Free Shipping</small>
						)}
					</div>

					<p>
						{thisListing.shippingCost === 0 ? (
							<>
								<i id='icon-img' className='fa-solid fa-truck'></i>
								<span>Free Shipping</span>
							</>
						) : null}
					</p>
					{currUserId === thisListing.Shop.userId ? buttonContent : null}
					<hr />
					<div className='ld-returnPolicy'>
						<i id='icon-img' className='fa-solid fa-box-open'></i>
						<span>{`${thisListing.returnPolicy} Return Poliicy`}</span>
					</div>
				</div>
			</div>
			<div className='ld-bottom-container'>
				<div className='ld-description-container'>
					<h1>About This Listing </h1>
					<p>{thisListing.description}</p>
				</div>
				<div className='ld-product-specs'>
					<h1>Product Specs</h1>
					<ul className='specs-list'>
						<div className='each-spec-container'>
							<h5 className='each-spec-name'>Listed</h5>
							<span>{listedTime}</span>
						</div>
						<div className='each-spec-container'>
							<h5 className='each-spec-name'>Condition</h5>
							<span>{thisListing.condition}</span>
						</div>
						<div className='each-spec-container'>
							<h5 className='each-spec-name'>Brand</h5>
							<span>{thisListing.brandName}</span>
						</div>
						<div className='each-spec-container'>
							<h5 className='each-spec-name'>Model</h5>
							<span>{thisListing.model}</span>
						</div>
						<div className='each-spec-container'>
							<h5 className='each-spec-name'>Categories</h5>
							<span>{thisListing.category}</span>
						</div>
						{thisListing.year !== "" && (
							<div className='each-spec-container'>
								<h5 className='each-spec-name'>Year</h5>
								<span>{thisListing.year && thisListing.year}</span>
							</div>
						)}
						{thisListing.originCountry !== "" && (
							<div className='each-spec-container'>
								<h5 className='each-spec-name'>Made In</h5>
								<span>
									{thisListing.originCountry && thisListing.originCountry}
								</span>
							</div>
						)}
					</ul>
				</div>
			</div>
		</section>
	) : (
		<div className='loader-container'>
			<div className='spinner'></div>
		</div>
	);
}
