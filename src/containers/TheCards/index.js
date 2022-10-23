import './styles.scss';
import { Card, CardGroup, CardImg, Container } from 'react-bootstrap';
import grey from '../../assests/Garments/Jacket/grey.png';
import BlackSuit from '../../assests/Garments/Suit/BlackSuit.png';
import GoldenTrouser from '../../assests/Garments/Trouser/GoldenTrouser.png';
import GreyTrouser from '../../assests/Garments/Trouser/GreyTrouser.png';
export default function index() {
	const images = [grey, BlackSuit, GoldenTrouser, GreyTrouser];
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
