import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);
	//if currUser don't have shop created, Link to  '/myshop/create'
	//if currUser have shop created already, Link to '/sell'

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = (
			<div className='top-right-navigation'>
				<button id='sell-btn'>
					<Link exact to='/sell/listings/new'>
						Sell Your Gear
					</Link>
				</button>
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			</div>
		);
	} else {
		sessionLinks = (
			<li>
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
					Vintage Hunters
				</NavLink>
			</li>
			{isLoaded && sessionLinks}
		</ul>
	);
}

export default Navigation;
