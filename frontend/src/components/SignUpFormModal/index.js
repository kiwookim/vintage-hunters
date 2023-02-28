import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
// import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);
			return dispatch(
				sessionActions.signup({
					email,
					username,
					firstName,
					lastName,
					password,
				})
			)
				.then(closeModal)
				.catch(async (res) => {
					const data = await res.json();
					console.log(data);
					if (data && data.errors) setErrors(Object.values(data.errors));
				});
		}
		return setErrors([
			"Confirm Password field must be the same as the Password field",
		]);
	};

	return (
		<div className='login-signup-modal'>
			<h1 id='signuptext'>Sign Up</h1>
			<form className='login-signup-form-container' onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li style={{ color: "red" }} key={idx}>
							{error}
						</li>
					))}
				</ul>
				<div className='each-input-field'>
					<label htmlFor='emailsignup'>Email</label>
					<input
						id='emailsignup'
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className='each-input-field'>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className='each-input-field'>
					<label htmlFor='firstname'>First Name</label>
					<input
						id='firstname'
						type='text'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</div>
				<div className='each-input-field'>
					<label htmlFor='lastname'>Last Name</label>
					<input
						id='lastname'
						type='text'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</div>
				<div className='each-input-field'>
					<label htmlFor='signuppassword'>Password</label>
					<input
						id='signuppassword'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className='each-input-field'>
					<label htmlFor='confirmpassword'>Confirm Password</label>
					<input
						id='confirmpassword'
						type='password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</div>
				<button id='signup-btn' type='submit'>
					Sign Up
				</button>
			</form>
		</div>
	);
}

export default SignupFormModal;
