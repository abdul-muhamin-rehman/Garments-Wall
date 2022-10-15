import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import './auth.scss';
const SignUp = () => {
	return (
		<div className="wrapper">
			<div className="logo">
				<img src="/assets/nisumIcon.jpeg" alt="" />
			</div>
			<form>
				<div className="text-center mt-4 name">SignUp</div>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="text"
								className="form-control form-field input"
								placeholder="First Name"
								required
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="text"
								className="form-control form-field input"
								placeholder="Last Name"
								required
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="email"
								className="form-control form-field input"
								placeholder="Email"
								required
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="text"
								className="form-control form-field input"
								placeholder="Country"
								required
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="text"
								className="form-control form-field input"
								placeholder="State"
								required
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="text"
								className="form-control form-field input"
								placeholder="City"
								required
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="text"
								className="form-control form-field input"
								placeholder="Postal code"
								required
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="text"
								className="form-control form-field input"
								placeholder="Gender"
								required
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="password"
								className="form-control form-field input"
								placeholder="Password"
								required
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input
								type="password"
								className="form-control form-field input"
								placeholder="Confirm Password"
								required
							/>
						</div>
					</div>
				</div>
				<div className="row "></div>
				<div className="row">
					<div className="col-md-12">
						<div className="buttonSignup">
							<Button type="button" className="btn signupbtn">
								Sign Up
							</Button>
						</div>
						<div className="sigininContent">
							<p>
								Already have an account? <Link to="/login">Sign In</Link>
							</p>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
