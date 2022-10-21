import styles from './carousel.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clothesStand1 from '../../assests/Carousel_List/Garments/clothesStand1.jpg';
import clothesStand2 from '../../assests/Carousel_List/Garments/clothesStand2.jpg';
import outfit from '../../assests/Carousel_List/Garments/outfit.jpg';

export default function Carousel() {
	const settings = {
		arrows: false,
		accessibility: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		swipe: true,
		swipeToSlide: true,
		pauseOnHover: true,
		pauseOnFocus: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const carouselContent = [outfit, clothesStand1, clothesStand2];
	return (
		<div className={styles.Carousel_outerDiv}>
			<Slider {...settings}>
				{carouselContent.map((imgs) => (
					<div className={styles.Carousel} key={imgs.toString()}>
						<img className={styles.Carousel_Image} src={imgs} />
					</div>
				))}
			</Slider>
		</div>
	);
}
