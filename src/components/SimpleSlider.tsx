import Slider from 'react-slick';
import image1 from '../assets/images/about/about4.png';
import image2 from '../assets/images/about/about5.png';
import image3 from '../assets/images/about/about6.png';
import image4 from '../assets/images/about/about7.png';
import SliderLeftBtn from './SliderLeftBtn';
import SliderRightBtn from './SliderRightBtn';

const SimpleSlider = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        // nextArrow: <SliderRightBtn onClick={onclick} />,
        // prevArrow: <SliderLeftBtn onClick={onclick} />,
    };
    return (
        <Slider
            nextArrow={<SliderLeftBtn />}
            prevArrow={<SliderRightBtn />}
            {...settings}
        >
            <div>
                <img src={image1} alt="" />
                <h4>Jenny Wilson</h4>
                <p>Ceo & Founder</p>
            </div>
            <div>
                <img src={image2} alt="" />
                <h4>Jenny Wilson</h4>
                <p>Ceo & Founder</p>
            </div>
            <div>
                <img src={image3} alt="" />
                <h4>Jenny Wilson</h4>
                <p>Ceo & Founder</p>
            </div>
            <div>
                <img src={image4} alt="" />
                <h4>Jenny Wilson</h4>
                <p>Ceo & Founder</p>
            </div>
        </Slider>
    );
};

export default SimpleSlider;
