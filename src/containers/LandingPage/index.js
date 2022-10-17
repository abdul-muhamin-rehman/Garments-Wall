import Footer from '../Footer';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './PublicLayout.scss';
import { NavbarBrand } from 'react-bootstrap';
import Carousel from '../../common/Carousel';
export default function PublicLayout() {
	return (
		<>
			<Helmet>
				<title>Social Wall</title>
				<meta name="description" content="landing_page" />
			</Helmet>
			<div style={{ minHeight: '100vh', minWidth: '100vw' }}>
				{/* <Container> */}
				<Navbar className="navbarLandPage  col-md-12 col-lg-12 ">
					<Container>
						<NavbarBrand>Social Wall</NavbarBrand>
						<div></div>
						{/* <NavbarBrand>Social Wall</NavbarBrand> */}
						<Link to="/blogs">Blogs</Link>
						<Link to="/login">Login</Link>
						<Link to="/signup">SignUp</Link>
					</Container>
				</Navbar>
				<main>
					<section>
						<Carousel />
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
}
