import { Link } from 'react-router-dom';
import './PublicLayout.css';
export default function PublicLayout() {
	return (
		<>
			<h2>Public Layout</h2>
			<div className="">
				<Link to="/blogs">Blogs</Link>
				{' | '}
				<Link to="/login">Login</Link>
				{' | '}
				<Link to="/signup">SignUp</Link>
			</div>
		</>
	);
}
