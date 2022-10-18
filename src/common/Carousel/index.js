import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.scss';
import dogs from '../../assests/Carousel_List/dogs.jpg';
import Landscape from '../../assests/Carousel_List/Landscape.jpg';
import olympics from '../../assests/Carousel_List/olympics.jpg';
import space from '../../assests/Carousel_List/space.jpg';
import Windows from '../../assests/Carousel_List/Windows.jpg';

export default function Carousel() {
	const settings = {
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		pauseOnFocus: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const carouselContent = [dogs, Landscape, olympics, space, Windows];
	return (
		<div className={styles.Carousel}>
			<Slider {...settings}>
				{carouselContent.map((imgs) => (
					<div className={styles.Carousel_Image} key={imgs.toString()}>
						<img src={imgs} />
					</div>
				))}
			</Slider>
		</div>
	);
}
