import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { delToken } from '../../Store/Actions/TokenActions';
import ReduxStore from '../../Store/ReduxStore';
import styles from './styles.module.scss';
const Layout = () => {
	const user = useSelector(() => ReduxStore.getState().user);
	return (
		<>
			{user.id !== undefined && <h1>{user?.display_name} is Logged In</h1>}
			<div className={styles.layoutContainer}>
				<Link to="/users">Users</Link>
				{' | '}
				<Link to="/blogs">Blogs</Link>
				{' | '}
				<Link to="/dashboard">Dashboard</Link>

				{user.id !== undefined && (
					<>
						<Link to="/edit">Edit Username /</Link>
						<Link to="/dashboard">Dashboard</Link>

						<button onClick={() => delToken()}>Logout</button>
					</>
				)}
				<h1>Main Layout</h1>
			</div>
		</>
	);
};

export default Layout;
