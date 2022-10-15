import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Helmet from 'react-helmet';
import { useAuth } from '../../Auth';

const Index = () => {
	const auth = useAuth();
	let link = '';
	!auth.email ? (link = '/') : (link = '/dashboard');
	return (
		<>
			<Helmet>
				<title>Blogs</title>
				<meta name="description" content="Blogs Page" />
			</Helmet>
			<div className={styles.blogsContainer}>
				<p>
					<Link to={link}>Switch to main</Link>
				</p>
				<h1>Blogs</h1>
			</div>
		</>
	);
};

export default Index;
