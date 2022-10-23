import './styles.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Container } from 'react-bootstrap';
import books from '../../assests/Books/books.png';
import books1 from '../../assests/Books/books1.png';
import books2 from '../../assests/Books/books2.png';
import books3 from '../../assests/Books/books3.png';
import BigBook from '../../assests/Books/BigBook.png';
import BlackTrouser from '../../assests/Garments/Trouser/BlackTrouser.png';
import GoldenTrouser from '../../assests/Garments/Trouser/GoldenTrouser.png';
import GreyTrouser from '../../assests/Garments/Trouser/GreyTrouser.png';
import NavyTrouser from '../../assests/Garments/Trouser/NavyTrouser.png';
export default function index() {
	const Trousers = [BlackTrouser, GoldenTrouser, GreyTrouser, NavyTrouser];
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
					<img className="InvertCarousel_Image" src={NavyTrouser} />
					{/* <CardImg  */}
				</Card.Link>
			</div>
			<Container className="col-lg-6">
				<div className={'InvertCarousel_outerDiv'}>
					<Slider {...settings}>
						{Trousers.map((trouser) => (
							<div className="InvertCarousel" key={trouser.toString()}>
								<img className="InvertCarousel_Image" src={trouser} />
							</div>
						))}
					</Slider>
				</div>
			</Container>
		</Container>
	);
}
