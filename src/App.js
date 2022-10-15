import React, { useState } from 'react';
import './App.css';
import { Users, Blogs, Dashboard } from './containers';
import { Layout } from './common';
import { Route, Routes } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Login } from './containers/Auth/login';
import { EditUser } from './containers/Auth/editUser';
import { ForgotPassword } from './containers/ForgotPassword/forgotPassword';
import SignUp from './containers/Auth/signup';
import Feed from '../src/feed/Feed';
import PublicLayout from './containers/PublicLayout';
import { AuthProvider } from './Auth';
import { RequireAuth } from './RequireAuth';

function App() {
	const [logged, setLogged] = useState(true);
	return (
		<AuthProvider>
			<Helmet>
				<title>Login</title>
				<meta name="description" content="Home Page" />
			</Helmet>
			<main>
				<Routes>
					<Route path="/" element={<PublicLayout />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/forgotpassword" element={<ForgotPassword />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					{/* <Route path="/dashboard" element={<Dashboard />} /> */}
					<Route
						path="/dashboard"
						element={
							<RequireAuth>
								<Dashboard />
							</RequireAuth>
						}
					/>
					{/* <Route
						path="/dasboard"
						element={
							<RequireAuth>
								<Dashboard />
							</RequireAuth>
						}
					/> */}

					<Route path="/users" element={<Users />} />
					<Route path="/edit" element={<EditUser />} />
				</Routes>
			</main>
		</AuthProvider>
	);
}

export default App;
