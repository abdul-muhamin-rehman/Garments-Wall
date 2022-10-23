import './styles.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Container } from 'react-bootstrap';
import BlackSuit from '../../assests/Garments/Suit/BlackSuit.png';
import BurgundySuit from '../../assests/Garments/Suit/BurgundySuit.png';
import charcoalSuit from '../../assests/Garments/Suit/charcoalSuit.png';
import GreySuit from '../../assests/Garments/Suit/GreySuit.png';
import TealSuit from '../../assests/Garments/Suit/TealSuit.png';
export default function index() {
	const Suits = [BlackSuit, BurgundySuit, charcoalSuit, GreySuit, TealSuit];
	const settings = {
		arrows: false,
		accessibility: true,
		autoplay: true,
		autoplaySpeed: 2000,
		swipe: true,
		swipeToSlide: true,
		pauseOnHover: true,
		pauseOnFocus: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 2,
	};
	return (
		<Container fluid className="col-lg-12 mainOuterDiv">
			<div>
				<Card.Link href="#" style={{ borderRadius: '0', padding: '0' }}>
					<img className="SemiCarousel_Image" src={BlackSuit} />
					{/* <CardImg  */}
				</Card.Link>
			</div>
			<Container className="col-lg-6">
				<div className={'SemiCarousel_outerDiv'}>
					<Slider {...settings}>
						{Suits.map((suits) => (
							<div className="SemiCarousel" key={suits.toString()}>
								<img className="SemiCarousel_Image" src={suits} />
							</div>
						))}
					</Slider>
				</div>
			</Container>
		</Container>
	);
}
