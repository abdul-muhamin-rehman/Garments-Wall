import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Helmet from 'react-helmet';
import { useAuth } from '../../Auth';
const Users = () => {
	const auth = useAuth();
	let link = '';
	!auth.email ? (link = '/') : (link = '/dashboard');

	return (
		<>
			<Helmet>
				<title>Users</title>
				<meta name="description" content="User Page" />
			</Helmet>

			<div className={styles.usersContainer}>
				<p>
					<Link to={link}>Switch to main</Link>
				</p>
				<h1>Users</h1>
			</div>
		</>
	);
};
export default Users;
