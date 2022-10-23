import './styles.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Container, Nav } from 'react-bootstrap';
import books from '../../assests/Books/books.png';
import books1 from '../../assests/Books/books1.png';
import books2 from '../../assests/Books/books2.png';
import books3 from '../../assests/Books/books3.png';
import BigBook from '../../assests/Books/BigBook.png';
import black from '../../assests/Garments/Jacket/black.png';
import BlackLeather from '../../assests/Garments/Jacket/BlackLeather.png';
import BrownLeather from '../../assests/Garments/Jacket/BrownLeather.png';
import charcoal from '../../assests/Garments/Jacket/charcoal.png';
import grey from '../../assests/Garments/Jacket/grey.png';
import Navy from '../../assests/Garments/Jacket/Navy.png';

export default function index() {
	const Jackets = [black, BlackLeather, BrownLeather, charcoal, grey, Navy];
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
		<Container fluid className="col-lg-12 InvertMainOuterDiv">
			<div>
				<Card.Link href="#" style={{ borderRadius: '0', padding: '0' }}>
					<img className="InvertCarousel_Image" src={grey} />
				</Card.Link>
			</div>
			<Container className="col-lg-6">
				<div className={'InvertCarousel_outerDiv'}>
					<Slider {...settings}>
						{Jackets.map((imgs) => (
							<div className="InvertCarousel" key={imgs.toString()}>
								<img className="InvertCarousel_Image" src={imgs} />
							</div>
						))}
					</Slider>
				</div>
			</Container>
		</Container>
	);
}
