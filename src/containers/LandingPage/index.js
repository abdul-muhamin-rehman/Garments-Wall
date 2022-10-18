import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand } from 'react-bootstrap';
import Footer from '../Footer';
import './PublicLayout.scss';
import Carousel from '../../common/Carousel';
export default function PublicLayout() {
	return (
		<>
			<Helmet>
				<title>Social Wall</title>
				<meta name="description" content="landing_page" />
			</Helmet>
			<div style={{ Height: '100%', Width: '100%' }}>
				<Navbar className="navbarLandPage  col-md-12 col-lg-12 ">
					<Container>
						<Navbar.Brand>Social Wall</Navbar.Brand>
						<div className="linkSpacing">
							<Link to="/blogs">Blogs</Link>
							<Link to="/login">Login</Link>
							<Link to="/signup">SignUp</Link>
						</div>
					</Container>
				</Navbar>
				<Carousel />
				<Footer />
			</div>
		</>
	);
}
