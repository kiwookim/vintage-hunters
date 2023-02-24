// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import SplashPage from "./components/SplashPage";
import CreateListing from "./components/CreateEditListing/CreateListing";
import EditListing from "./components/CreateEditListing/EditListing";
import ListingDetails from "./components/ListingDetails";
import CreateShop from "./components/CreateEditShop/CreateShop";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const sessionUser = useSelector((state) => state.session.user);
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<Switch>
					<Route path='/' exact>
						{sessionUser ? <Redirect to='/listings' /> : <SplashPage />}
					</Route>
					<Route exact path='/listings'>
						{sessionUser ? <HomePage /> : <Redirect to='/' />}
					</Route>
					<Route path='/listings/:listingId'>
						<ListingDetails />
					</Route>
					<Route path='/sell/listings/new'>
						<CreateListing />
					</Route>
					<Route path='/sell/:listingId/edit'>
						<EditListing />
					</Route>
					<Route path='/myshop/create'>
						<CreateShop />
					</Route>
				</Switch>
			)}
		</>
	);
}

export default App;
