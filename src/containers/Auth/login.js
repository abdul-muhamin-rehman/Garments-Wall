import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './Auth.css';
import nisumIcon from '../../assests/nisumIcon.jpeg';
import { setToken } from '../../Store/Actions/TokenActions';
import { Button } from '../../common';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Auth';

export const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const auth = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isError, setIsError] = useState(false);

	// const redirectPath = location.state?.path || '/';

	const submitHandler = (event) => {
		event.preventDefault();
		console.log(email, password);
		localStorage.setItem('Email', email);
		localStorage.setItem('loggedIn', true);
		auth.login(email);
		navigate('/dashboard');
		// axios
		// 	.post('https://nisum.humhub.com/api/v1/auth/login', {
		// 		username: email,
		// 		password: password,
		// 	})
		// 	.then(
		// 		(res) => {
		// 			setToken(res.data.auth_token);
		// 		},
		// 		(err) => {
		// 			setIsError(true);
		// 		}
		// 	);
	};
	const inputHandler = (e) => {
		e.target.type == 'email' ? setEmail(e.target.value) : setPassword(e.target.value);
	};
	return (
		<div className="wrapper">
			<div className="logo">
				<img src={nisumIcon} alt="" />
			</div>
			<div className="text-center mt-4 name">Login Page</div>
			<form className="p-3 mt-3" onSubmit={submitHandler}>
				<div className="form-field d-flex align-items-center">
					<span className="far fa-user"></span>
					<input type="email" placeholder="E-Mail" onChange={inputHandler} />
				</div>
				<div className="form-field d-flex align-items-center">
					<span className="fas fa-key"></span>
					<input type="password" placeholder="Password" onChange={inputHandler} />
				</div>
				{isError && <p className="text-danger">Email or Password is invalid</p>}
				<Button className="btn mt-3" type="submit">
					Login
				</Button>
			</form>
			<div className="text-center fs-6">
				<a href="#">Forget password?</a> or <a href="#">Sign up</a>
			</div>
		</div>
	);
};
