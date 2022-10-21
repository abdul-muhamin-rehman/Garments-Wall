import './styles.scss';
import { Card, CardGroup, CardImg, Container } from 'react-bootstrap';
import green from '../../assests/colors/green.png';

export default function index() {
	const images = [green, green, green, green];
	return (
		<Container fluid className={'Cards_outerDiv '}>
			{images.map((imgs) => (
				<Card.Link href="" key={imgs.toString()} style={{ borderRadius: '0', padding: '0' }}>
					<CardImg className="card_Images" src={imgs} />
				</Card.Link>
			))}
		</Container>
	);
}
