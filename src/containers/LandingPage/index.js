import { Helmet } from 'react-helmet';
import Footer from '../Footer';
import './PublicLayout.scss';
import Carousel from '../../common/Carousel';
import TheNavBar from '../TheNavBar';
import TheCards from '../TheCards';
import SemiCarousel from '../SemiCarousel';
import InvertedCarousel from '../InvertedCarousel';
import CarouselCat3 from '../CarouselCat3';
export default function index() {
	return (
		<>
			<Helmet>
				<title>Social Wall</title>
				<meta name="description" content="landing_page" />
			</Helmet>
			<div style={{ Height: '100%', Width: '100%' }}>
				<header>
					<TheNavBar />
				</header>
				<main>
					<Carousel />
					<TheCards />
					<SemiCarousel />
					<InvertedCarousel />
					<CarouselCat3 />
				</main>
				<Footer />
			</div>
		</>
	);
}
