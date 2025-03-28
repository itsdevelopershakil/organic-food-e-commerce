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
            className="custom-arrow next absolute top-1/2 -translate-y-1/2 bottom-0 right-0 lg:right-[-50px] size-[36px] md:size-[45px] bg-[#fff] flex justify-center items-center rounded-full border border-[#E6E6E6] cursor-pointer z-[99]"
            onClick={onClick}
        >
            <FaArrowRight />
        </div>
    );
};

// Custom Prev Arrow
const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <div
            className="custom-arrow prev absolute top-1/2 -translate-y-1/2 bottom-0 left-0 lg:left-[-50px] size-[36px] md:size-[45px] bg-[#fff] flex justify-center items-center rounded-full border border-[#E6E6E6] cursor-pointer z-[99]"
            onClick={onClick}
        >
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
        nextArrow: <CustomNextArrow />, // No need to pass onClick manually
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="space-x-4 mt-12">
            <Slider {...settings}>
                <div className="px-4">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-[10px]">
                        <img
                            src={image1}
                            className="object-cover w-full"
                            alt=""
                        />
                        <div className="px-5 py-4">
                            <h4 className="text-[#1a1a1a] font-medium text-lg">
                                Jenny Wilson
                            </h4>
                            <p className="text-[#808080] text-xs md:text-sm">
                                Ceo & Founder
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-[10px]">
                        <img
                            src={image2}
                            className="object-cover w-full"
                            alt=""
                        />
                        <div className="px-5 py-4">
                            <h4 className="text-[#1a1a1a] font-medium text-lg">
                                Jane Cooper
                            </h4>
                            <p className="text-[#808080] text-xs md:text-sm">
                                Worker
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-[10px]">
                        <img
                            src={image3}
                            className="object-cover w-full"
                            alt=""
                        />
                        <div className="px-5 py-4">
                            <h4 className="text-[#1a1a1a] font-medium text-lg">
                                Cody Fisher
                            </h4>
                            <p className="text-[#808080] text-xs md:text-sm">
                                Security Guard
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-[10px]">
                        <img
                            src={image4}
                            className="object-cover w-full"
                            alt=""
                        />
                        <div className="px-5 py-4">
                            <h4 className="text-[#1a1a1a] font-medium text-lg">
                                Robert Fox
                            </h4>
                            <p className="text-[#808080] text-xs md:text-sm">
                                Senior Farmer Manager
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SimpleSlider;
