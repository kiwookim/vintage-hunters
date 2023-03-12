//cartPage Component
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
import { thunkGetCart } from "../../store/cartReducer";
import { thunkGetMyShop } from "../../store/shopReducer";
export default function CartPage() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	const currCart = useSelector((state) => state.cart.currCart);
	let totalBfTx = 0;
	for (let item of currCart) {
		// console.log("currITEM", item);
		// console.log(item.shippingCost);
		totalBfTx += item.shippingCost;
		totalBfTx += item.listingPrice;
	}
	// console.log(totalBfTx);
	// console.log("currCart --useSELECTOR", currCart);
	//dispatch again when deleting Item.
	useEffect(() => {
		dispatch(thunkGetCart()).then(() => setIsLoaded(true));
		dispatch(thunkGetMyShop());
	}, [dispatch]);
	return isLoaded ? (
		currCart.length > 0 ? (
			<div id='cart-container'>
				<header id='cart-header-container'>
					<div id='cartheader-left-container'>
						<i class='fa-solid fa-cart-shopping'></i>
						<h1>{`${currCart.length} ${
							currCart.length === 1 ? "item" : "items"
						} in Your Cart`}</h1>
					</div>
					<Link to='/listings/categories'>
						<div id='cartheader-right-container'>
							<span>Keep Shopping </span>
							<i class='fa-solid fa-arrow-right'></i>
						</div>
					</Link>
				</header>
				<hr id='cartheader-divider' />
				{/* cart items container begins here */}
				<div id='cart-items-container'>
					{currCart.map((item) => (
						<div className='each-cart-item-container'>
							<div className='cart-item-left-container'>
								<div className='cart-item-img-container'>
									<Link to={`/listings/${item.id}`}>
										<img src={item.ListingImages[0].url} alt='item-image'></img>
									</Link>
								</div>
								<div className='cart-item-detail-container'>
									<Link to={`/listings/${item.id}`}>
										<h4 className='cart-listingTitle'>{item.listingTitle}</h4>
									</Link>
									<small>SOLD BY</small>
									<Link to={`/shop/${item.Shop.id}`}>
										<p id='cart-shop-name'>{item.Shop.name}</p>
									</Link>
									<p>{`${item.Shop.city}, ${item.Shop.state}`}</p>
									<i class='fa-solid fa-trash'></i>
								</div>
							</div>
							<div className='cart-item-price-container'>
								<p>{`$${item.listingPrice}`}</p>
								<small>{`+ ${item.shippingCost} Shipping`}</small>
								<small>+ applicable tax</small>
							</div>
						</div>
					))}
					{/* purchase container */}
					<div className='checkout-container'>
						<div className='checkout-details-container'>
							<span>Item + Shipping SubTotal</span>
							<span id='total-price'>{`$${totalBfTx}`}</span>
							<small>usd</small>
						</div>
						<div className='purchase-btn-container'>
							<button id='purchase-btn'>Purchase</button>
						</div>
					</div>
				</div>
			</div>
		) : (
			<h1>empty</h1>
		)
	) : (
		<div className='loader-container'>
			<div className='spinner'></div>
		</div>
	);
}
