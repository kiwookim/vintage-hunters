import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import "./Navigation.css";
import { thunkGetMyShop } from "../../store/shopReducer";

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);
	//if currUser don't have shop created, Link to  '/myshop/create'
	//if currUser have shop created already, Link to '/sell'
	const currUserShop = useSelector((state) => state.shop.myshop);
	const isShopThere = currUserShop.id ? true : false;

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = (
			<div className='top-right-navigation'>
				<button id='sell-btn'>
					<Link
						exact
						to={isShopThere ? "/sell/listings/new" : "/myshop/create"}
					>
						Sell Your Gear
					</Link>
				</button>
				<Link to={`/mycart`}>
					<i id='cart-icon' class='fa-solid fa-cart-shopping'></i>
				</Link>

				<li>
					<ProfileButton user={sessionUser} />
				</li>
			</div>
		);
	} else {
		sessionLinks = (
			<li id='navlogin'>
				<OpenModalButton
					buttonText='Log In'
					modalComponent={<LoginFormModal />}
				/>
				<OpenModalButton
					buttonText='Sign Up'
					modalComponent={<SignUpFormModal />}
				/>
			</li>
		);
	}

	return (
		<ul className='navigation'>
			<li id='logo'>
				<NavLink exact to='/'>
					<h3 id='logo-text'>Vintage Hunters</h3>
				</NavLink>
			</li>
			{isLoaded && sessionLinks}
		</ul>
	);
}

export default Navigation;
