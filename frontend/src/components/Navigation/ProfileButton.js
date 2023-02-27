// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

function ProfileButton({ user }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const [showMenu, setShowMenu] = useState(false);
	const ulRef = useRef();
	const myShop = useSelector((state) => state.shop.myshop);

	const openMenu = () => {
		if (showMenu) return;
		setShowMenu(true);
	};

	useEffect(() => {
		if (!showMenu) return;

		const closeMenu = (e) => {
			if (!ulRef.current.contains(e.target)) {
				setShowMenu(false);
			}
		};

		document.addEventListener("click", closeMenu);

		return () => document.removeEventListener("click", closeMenu);
	}, [showMenu]);

	const logout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
		// .then(() => history.push("/"));
		history.push("/");
	};

	const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

	return (
		<>
			<button onClick={openMenu}>
				<i className='fas fa-user-circle' />
			</button>
			<ul className={ulClassName} ref={ulRef}>
				<li>{user.username}</li>
				<hr />
				{/* <li>
					{user.firstName} {user.lastName}
				</li>
				<li>{user.email}</li> */}
				<li>
					<Link to={myShop.id ? `/shop/${myShop.id}` : "/myshop/create"}>
						<button className='inside-profile-btns'>My Shop</button>
					</Link>
				</li>
				<li>
					<button className='inside-profile-btns' onClick={logout}>
						Log Out
					</button>
				</li>
			</ul>
		</>
	);
}

export default ProfileButton;
