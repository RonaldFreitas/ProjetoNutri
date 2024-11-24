import Carousel from 'react-bootstrap/Carousel';
import TalvezBanner from '../../assets/talvez banner.jpg';
import PossivelBanner from '../../assets/possivel banner.jpg';
import MuitoBanner from '../../assets/muito banner.jpg';
import Banner04 from '../../assets/banner 04.jpeg';

function Carrossel() {
  return (
    <Carousel fade>
      <Carousel.Item interval={5000}>
        <img
          src={TalvezBanner}
          alt="Banner 1"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          src={PossivelBanner}
          alt="Banner 2"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          src={MuitoBanner}
          alt="Banner 3"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          src={Banner04}
          alt="Banner 4"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;