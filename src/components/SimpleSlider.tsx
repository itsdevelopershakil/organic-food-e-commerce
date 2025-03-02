import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import image1 from '../assets/images/about/about4.png';
import image2 from '../assets/images/about/about5.png';
import image3 from '../assets/images/about/about6.png';
import image4 from '../assets/images/about/about7.png';

interface ArrowProps {
    onClick?: () => void; // onClick is an optional function
}

// Custom Next Arrow
const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <div
            className="custom-arrow next absolute top-1/2 bottom-0 right-[-50px]"
            onClick={onClick}
        >
            <FaArrowRight />
        </div>
    );
};

// Custom Prev Arrow
const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <div className="custom-arrow prev" onClick={onClick}>
            <FaArrowLeft />
        </div>
    );
};

const SimpleSlider: React.FC = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        nextArrow: <CustomNextArrow />, // No need to pass onClick manually
        prevArrow: <CustomPrevArrow />,
    };
    return (
        <div className="space-x-4">
            <Slider {...settings}>
                <div className="">
                    <img src={image1} className="object-contain" alt="" />
                    <h4>Jenny Wilson</h4>
                    <p>Ceo & Founder</p>
                </div>
                <div className="">
                    <img src={image2} className="object-contain" alt="" />
                    <h4>Jenny Wilson</h4>
                    <p>Ceo & Founder</p>
                </div>
                <div className="">
                    <img src={image3} className="object-contain" alt="" />
                    <h4>Jenny Wilson</h4>
                    <p>Ceo & Founder</p>
                </div>
                <div className="">
                    <img src={image4} className="object-contain" alt="" />
                    <h4>Jenny Wilson</h4>
                    <p>Ceo & Founder</p>
                </div>
            </Slider>
        </div>
    );
};

export default SimpleSlider;
