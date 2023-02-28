// frontend/src/components/LoginFormModal/index.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
	const dispatch = useDispatch();
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password }))
			.then(closeModal)
			.catch(async (res) => {
				const data = await res.json();
				if (data && data.errors) setErrors(Object.values(data.errors));
			});
	};
	const demoLogin = () => {
		setCredential("demo@aa.io");
		setPassword("password");
		dispatch(sessionActions.login({ credential, password }));
	};

	return (
		<div className='login-signup-modal'>
			<h1 id='login-txt'>Log In to Vintage Hunters</h1>
			<form className='login-signup-form-container' onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li style={{ color: "red" }} key={idx}>
							{error}
						</li>
					))}
				</ul>
				<div className='each-input-field'>
					<label className='input-label-container' htmlFor='usernameemail'>
						Username or Email
					</label>
					<input
						id='usernameemail'
						type='text'
						value={credential}
						onChange={(e) => setCredential(e.target.value)}
						required
					/>
				</div>
				<div className='each-input-field'>
					<label htmlFor='password' className='input-label-container'>
						Password
					</label>
					<input
						id='password'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button id='login-btn' type='submit'>
					Log In
				</button>
				<button onClick={demoLogin}>Demo User</button>
			</form>
		</div>
	);
}

export default LoginFormModal;
