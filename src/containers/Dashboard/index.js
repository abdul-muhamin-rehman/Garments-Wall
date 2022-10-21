import './dashboard.scss';
import Helmet from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
	BsFillBellFill,
	BsPeopleFill,
	BsSearch,
	BsRecord2,
	BsSpeedometer2,
	BsFillPersonFill,
	BsPenFill,
	BsBoxArrowRight,
} from 'react-icons/bs';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
const Dashboard = () => {
	let userName = 'UserName';
	return (
		<>
			<Helmet>
				<style>{'body { background-color: #d5d5d5; }'}</style>
				<title>Dashboard</title>
				<meta name="description" content="Dashboard" />
			</Helmet>
			<div style={{ minHeight: '100vh', minWidth: '100vw' }}>
				<Navbar className="navbarMain  col-md-12 col-lg-12 ">
					<Container>
						<Navbar.Brand href="/dashboard">
							<strong>
								<Link className="brandAnchor" to="/dashboard">
									Social Wall
								</Link>
							</strong>
							{' | '}
							<Link className="brandAnchor" to="/users">
								Users
							</Link>
							{' | '}
							<Link className="brandAnchor" to="/blogs">
								Blogs
							</Link>
						</Navbar.Brand>
						<Navbar.Collapse className="justify-content-end">
							<Link to="/dashboard">
								<i className="bellIcon">
									<BsFillBellFill />
								</i>
							</Link>
							<Nav className="justify-content-end">
								<NavDropdown title={userName} id="navbar" className=" backgroundcolornavbar">
									<NavDropdown.Item href="/">
										<BsFillPersonFill />
										My Profile
									</NavDropdown.Item>

									<NavDropdown.Item href="/">
										<BsPenFill />
										Account Settings
									</NavDropdown.Item>
									<NavDropdown.Divider />

									<NavDropdown.Item href="/">
										<BsBoxArrowRight />
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<Navbar className="subNavbar menubar">
					<Nav>
						<ul>
							<li>
								<Link to="/dashboard" className="subNavListItems">
									<i className="customIcons">
										<BsRecord2 />
									</i>
									<p>MY SPACES</p>
								</Link>
							</li>
							<li>
								<Link to="/dashboard" className="subNavListItems">
									<i className="customIcons">
										<BsSpeedometer2 />
									</i>
									<p> DASHBOARD</p>
								</Link>
							</li>
							<li>
								<Link to="/dashboard" className="subNavListItems">
									<i className="customIcons">
										<BsPeopleFill />
									</i>
									<p> PEOPLE</p>
								</Link>
							</li>
							<li>
								<Link to="/dashboard" className="subNavListItems">
									<i className="customIcons">
										<BsRecord2 />
									</i>
									<p> SPACES</p>
								</Link>
							</li>
							<Link to="/dashboard" className="iconSearch ">
								<i>
									<BsSearch />
								</i>
							</Link>
						</ul>
					</Nav>
				</Navbar>
			</div>
		</>
	);
};
export default Dashboard;
