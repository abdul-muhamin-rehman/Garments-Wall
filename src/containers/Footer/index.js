import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Footer.module.scss';
import { NavbarBrand } from 'react-bootstrap';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Navbar className="col-md-12 col-lg-12">
				<Container>
					<NavbarBrand>Social Wall</NavbarBrand>
				</Container>
			</Navbar>
		</footer>
	);
}
