import styles from './Footer.module.scss';
import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsInstagram, BsFacebook, BsDiscord, BsYoutube, BsTwitter } from 'react-icons/bs';
import payment from '../../assests/extras/payment.png';
import encrypt from '../../assests/extras/encrypt.png';
export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Navbar className="col-md-12 col-lg-12">
				<Container>
					<Navbar.Brand>
						<h2>Social Wall</h2>
					</Navbar.Brand>
				</Container>
			</Navbar>
			<Container>
				<Row className={styles.socials}>
					<Col>
						<a href="https://www.instagram.com/" target={'_blank'}>
							<BsInstagram className={styles.icons} />
						</a>
						<a href="#">
							<BsFacebook className={styles.icons} />
						</a>
						<a href="#">
							<BsDiscord className={styles.icons} />
						</a>
						<a href="#">
							<BsYoutube className={styles.icons} />
						</a>
						<a href="#">
							<BsTwitter className={styles.icons} />
						</a>
					</Col>
				</Row>
				<Row>
					<Col>
						<h6>Get In touch</h6>
						<div>
							<h6>Phone</h6>
							<p>+92-100-123-456-7</p>
							<h6>Email</h6>
							<p>email@domain.com</p>
						</div>
					</Col>
					<Col>
						<h6>Our Company</h6>
						<p>About Us</p>
						<p>Contact Us</p>
						<p>Gallery</p>
					</Col>
					<Col>
						<h6>Customer Support</h6>
						<Row>
							<Col styles={{ marginRight: '5px' }}>
								<p>Customer Service</p>
								<p>Disclaimer</p>
							</Col>
							<Col>
								<p>Shipping & Handling</p>
								<p>Returns & Exchange</p>
								<p>FAQs</p>
							</Col>
						</Row>
					</Col>
					<Col>
						<h6>Help</h6>
						<p>Track Order</p>
						<p>Terms & Conditions</p>
						<p>Privacy Policy</p>
					</Col>
				</Row>
			</Container>
			<Container fluid className={styles.CopyRightsBar}>
				<Row>
					<Col>
						<p>100% Safe Checkout</p>
						<Image src={payment} />
					</Col>
					<Col>
						<p>Secured by</p>
						<Image src={encrypt} width="100px" height="auto" />
					</Col>
					<Col>
						<p>Copyright © 2022 Khaadi SMC Pvt. & Weaves UAE Trading LLC. All Rights Reserved.</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
