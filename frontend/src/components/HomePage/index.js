//homepage component

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllListings } from "../../store/listingsReducer";
import { thunkGetMyShop } from "../../store/shopReducer";
import ListingCard from "../ListingCard";
import "./HomePage.css";
import { categories } from "../../choices";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Category from "../Category";
export default function HomePage() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const allListingsObj = useSelector((state) => state.listings.allListings);
	const allListingsArr = Object.values(allListingsObj);
	let { path, url } = useRouteMatch();
	// console.log(allListingsArr);
	useEffect(() => {
		dispatch(thunkGetAllListings())
			.then(() => setIsLoaded(true))
			.then(() => dispatch(thunkGetMyShop()));
		// const myShop = await dispatch(thunkGetMyShop());
		// dispatch(thunkGetMyShop());
	}, [dispatch]);
	// console.log("url", url);
	// console.log("path", path);
	return isLoaded ? (
		<>
			<hr />
			<nav>
				<ul className='filter-navlinks'>
					{categories.map((category, i) => (
						<li className='each-filter-navli' key={category}>
							<Link to={`${url}/${category}`}>{category}</Link>
						</li>
					))}
				</ul>
			</nav>
			<hr />
			<div className='all-listings-container'>
				<Switch>
					<Route exact path={path}>
						{allListingsArr.map((listing) => (
							<ListingCard listing={listing} key={listing.id} />
						))}
					</Route>
					<Route path={`${path}/:category`}>
						<Category />
					</Route>
				</Switch>
			</div>
		</>
	) : (
		<div className='loader-container'>
			<div className='spinner'></div>
		</div>
	);
}
