//cartPage Component
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
import { thunkGetCart } from "../../store/cartReducer";
export default function CartPage() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	const currCart = useSelector((state) => state.cart.currCart);
	console.log("currCart", currCart);
	//dispatch again when deleting Item.
	useEffect(() => {
		dispatch(thunkGetCart()).then(() => setIsLoaded(true));
	}, [dispatch]);
	return (
		<div id='cart-container'>
			<header id='cart-header-container'>
				<div id='cartheader-left-container'>
					<i class='fa-solid fa-cart-shopping'></i>
					<h1>'X' items in Your Cart</h1>
				</div>
				<Link to='/listings/categories'>
					<div id='cartheader-right-container'>
						<span>Keep Shopping </span>
						<i class='fa-solid fa-arrow-right'></i>
					</div>
				</Link>
			</header>
			<hr id='cartheader-divider' />
			<div id='cart-items-container'>
				<div className='each-cart-item-container'>
					<div className='cart-item-left-container'>
						<div className='cart-item-img-container'>
							<img src='https://images.reverb.com/image/upload/s--48XY5XdC--/a_0/t_card-square/v1677133348/eajfemmt4tefwen9iknr.jpg'></img>
						</div>

						<div className='cart-item-detail-container'>
							<h4>Marshall MK II 50 watt 1976 - Black (listingTitle)</h4>
							<small>SOLD BY</small>
							<p>PMM4259 GUITARS AND AMPS</p>
							<p>Woodland Hills, CA</p>
							<i class='fa-solid fa-trash'></i>
						</div>
					</div>
					<div className='cart-item-price-container'>
						<p>$2350</p>
						<small>+ $175 Shipping</small>
						<small>+ applicable tax</small>
					</div>
				</div>

				<div className='each-cart-item-container'>
					<div className='cart-item-left-container'>
						<div className='cart-item-img-container'>
							<img src='https://images.reverb.com/image/upload/s--48XY5XdC--/a_0/t_card-square/v1677133348/eajfemmt4tefwen9iknr.jpg'></img>
						</div>

						<div className='cart-item-detail-container'>
							<h4>Marshall MK II 50 watt 1976 - Black (listingTitle)</h4>
							<small>SOLD BY</small>
							<p>PMM4259 GUITARS AND AMPS</p>
							<p>Woodland Hills, CA</p>
							<i class='fa-solid fa-trash'></i>
						</div>
					</div>
					<div className='cart-item-price-container'>
						<p>$2350</p>
						<small>+ $175 Shipping</small>
						<small>+ applicable tax</small>
					</div>
				</div>

				<div className='each-cart-item-container'>
					<div className='cart-item-left-container'>
						<div className='cart-item-img-container'>
							<img src='https://images.reverb.com/image/upload/s--48XY5XdC--/a_0/t_card-square/v1677133348/eajfemmt4tefwen9iknr.jpg'></img>
						</div>

						<div className='cart-item-detail-container'>
							<h4>Marshall MK II 50 watt 1976 - Black (listingTitle)</h4>
							<small>SOLD BY</small>
							<p>PMM4259 GUITARS AND AMPS</p>
							<p>Woodland Hills, CA</p>
							<i class='fa-solid fa-trash'></i>
						</div>
					</div>
					<div className='cart-item-price-container'>
						<p>$2350</p>
						<small>+ $175 Shipping</small>
						<small>+ applicable tax</small>
					</div>
				</div>

				{/* purchase container */}
				<div className='checkout-container'>
					<div className='checkout-details-container'>
						<span>Item + Shipping SubTotal</span>
						<span>$20220</span>
						<small>usd</small>
					</div>
					<div className='purchase-btn-container'>
						<button id='purchase-btn'>Purchase</button>
					</div>
				</div>
			</div>
		</div>
	);
}
