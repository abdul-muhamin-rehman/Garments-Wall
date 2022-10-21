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

export default function index() {
	const booksArray = [books, books1, books2, books3];
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
					<img className="InvertCarousel_Image" src={BigBook} />
					{/* <CardImg  */}
				</Card.Link>
			</div>
			<Container className="col-lg-6">
				<div className={'InvertCarousel_outerDiv'}>
					<Slider {...settings}>
						{booksArray.map((booksImage) => (
							<div className="InvertCarousel" key={booksImage.toString()}>
								<img className="InvertCarousel_Image" src={booksImage} />
							</div>
						))}
					</Slider>
				</div>
			</Container>
		</Container>
	);
}
