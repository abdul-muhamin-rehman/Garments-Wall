import './styles.scss';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export default function index() {
	return (
		<Navbar className="navbarLandPage  col-md-12 col-lg-12 ">
			<Container>
				<Navbar.Brand>Garments Wall</Navbar.Brand>
				<div>
					<Link to="/blogs">Blogs</Link>
					<Link to="/login">Login</Link>
					<Link to="/signup">SignUp</Link>
				</div>
			</Container>
		</Navbar>
	);
}
