import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Navbar className="col-md-12 col-lg-12">
				<Container>
					<Navbar.Brand>Social Wall</Navbar.Brand>
				</Container>
			</Navbar>
		</footer>
	);
}
