import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../ForgotPassword/forgotPassword.scss';
import picture from '../../assests/nisumIcon.jpeg';
import { useNavigate } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Input } from './functionFile';

export const ForgotPassword = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState(null);
	const getData = (data) => {
		setEmail(data);
	};
	const submitHandler = (event) => {
		console.log(email);
		navigate('/login');
	};
	return (
		<>
			<Helmet>
				<title>Forgot Password</title>
				<meta name="Forgot Password" content="Forgot Password Page" />
			</Helmet>

			<div className="wrapper">
				<div className="logo">
					<img src={picture} alt="Nisum Icon" />
				</div>
				<div className="text-center mt-4 name">Social Wall</div>
				<div className="mt-4 m-25 forgot-heading">
					<strong>Password Recovery</strong>
				</div>
				<div className="mt-4 explain forgot-heading">
					Just enter your e-mail address. We'll send you recovery instructions!
				</div>
				<form className="p-3 mt-3" onSubmit={submitHandler}>
					<div className="form-field d-flex align-items-center">
						<span className="far fa-user"></span>
						<Input Pass={getData} />
					</div>
					<Button className="btn mb-3" type="submit">
						Reset Password
					</Button>
					<Button className="btn mt-2" onClick={() => navigate('/login')}>
						Back
					</Button>
				</form>
			</div>
		</>
	);
};
