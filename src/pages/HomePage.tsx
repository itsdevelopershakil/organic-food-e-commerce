import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import homeImg from '../assets/images/home/BG.png';
import img1 from '../assets/images/home/img1.png';
import leaf from '../assets/images/home/leaf.png';

interface ArrowProps {
    onClick?: () => void; // onClick is an optional function
}

// Custom Next Arrow
const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <div
            className="custom-arrow next absolute top-1/2 -translate-y-1/2 bottom-0 right-0 size-[30px] sm:size-[45px]  sm:bg-[#fff] flex justify-center items-center rounded-full border border-[#E6E6E6] cursor-pointer"
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
            className="custom-arrow prev absolute top-1/2 -translate-y-1/2 bottom-0 left-0 size-[30px] sm:size-[45px]  sm:bg-[#fff] flex justify-center items-center rounded-full border  border-[#E6E6E6] cursor-pointer z-[999]"
            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
};

const divStyle = {
    backgroundImage: `url(${homeImg})`,
};

const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />, // No need to pass onClick manually
        prevArrow: <CustomPrevArrow />,
        customPaging: () => (
            <div className="h-2 w-2 sm:w-3 sm:h-3 flex items-center justify-center bg-[#B4CCB4] rounded-full cursor-pointer"></div>
        ),
        appendDots: (dots: React.ReactNode) => (
            <div>
                <ul className="mt-[-40px] sm:mt-[-50px] flex justify-center">
                    {dots}
                </ul>
            </div>
        ),
    };

    return (
        <div>
            <div style={divStyle} className="bg-no-repeat bg-cover">
                <div className="max-width relative">
                    <Slider {...settings}>
                        <div>
                            <div className="flex gap-2 sm:gap-7 lg:gap-10 items-center justify-center py-6 sm:py-10 lg:py-20">
                                <div className="w-[45%] lg:w-[55%] max-h-[480px]">
                                    <img
                                        src={img1}
                                        alt=""
                                        className="object-contain"
                                    />
                                </div>
                                <div className="w-[55%] sm:w-[45%]">
                                    <p className="text-primary text-xs sm:text-sm font-medium">
                                        Welcome to shopery
                                    </p>
                                    <h1 className="text-[#1a1a1a] font-semibold text-md sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[120%] pt-2">
                                        Fresh & Healthy Organic Food
                                    </h1>
                                    <p className="text-sm sm:text-xl md:text-3xl pt-1 md:pt-3 lg:pt-7 text-[#1a1a1a]">
                                        Sale up to{' '}
                                        <span className="text-[#FF8A00]">
                                            30% OFF
                                        </span>
                                    </p>
                                    <p className="text-[#808080] text-xs sm:text-sm pt-1 md:pt-3">
                                        Free shipping on all your order. we
                                        deliver, you enjoy
                                    </p>
                                    <Link
                                        to="/shop"
                                        className="block mt-2 sm:mt-4 lg:mt-8"
                                    >
                                        <button className="flex gap-1 items-center  bg-primary text-white py-2 lg:py-3 px-5 sm:px-10 text-xs sm:text-base rounded-[53px]">
                                            Shop now <FaArrowRight />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 sm:gap-7 lg:gap-10 items-center justify-center py-6 sm:py-10 lg:py-20">
                                <div className="w-[45%] lg:w-[55%] max-h-[480px]">
                                    <img
                                        src={img1}
                                        alt=""
                                        className="object-contain"
                                    />
                                </div>
                                <div className="w-[55%] sm:w-[45%]">
                                    <p className="text-primary text-xs sm:text-sm font-medium">
                                        Welcome to shopery
                                    </p>
                                    <h1 className="text-[#1a1a1a] font-semibold text-md sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[120%] pt-2">
                                        Fresh & Healthy Organic Food
                                    </h1>
                                    <p className="text-sm sm:text-xl md:text-3xl pt-1 md:pt-3 lg:pt-7 text-[#1a1a1a]">
                                        Sale up to{' '}
                                        <span className="text-[#FF8A00]">
                                            30% OFF
                                        </span>
                                    </p>
                                    <p className="text-[#808080] text-xs sm:text-sm pt-1 md:pt-3">
                                        Free shipping on all your order. we
                                        deliver, you enjoy
                                    </p>
                                    <Link
                                        to="/shop"
                                        className="block mt-2 sm:mt-4 lg:mt-8"
                                    >
                                        <button className="flex gap-1 items-center  bg-primary text-white py-2 lg:py-3 px-5 sm:px-10 text-xs sm:text-base rounded-[53px]">
                                            Shop now <FaArrowRight />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 sm:gap-7 lg:gap-10 items-center justify-center py-6 sm:py-10 lg:py-20">
                                <div className="w-[45%] lg:w-[55%] max-h-[480px]">
                                    <img
                                        src={img1}
                                        alt=""
                                        className="object-contain"
                                    />
                                </div>
                                <div className="w-[55%] sm:w-[45%]">
                                    <p className="text-primary text-xs sm:text-sm font-medium">
                                        Welcome to shopery
                                    </p>
                                    <h1 className="text-[#1a1a1a] font-semibold text-md sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[120%] pt-2">
                                        Fresh & Healthy Organic Food
                                    </h1>
                                    <p className="text-sm sm:text-xl md:text-3xl pt-1 md:pt-3 lg:pt-7 text-[#1a1a1a]">
                                        Sale up to{' '}
                                        <span className="text-[#FF8A00]">
                                            30% OFF
                                        </span>
                                    </p>
                                    <p className="text-[#808080] text-xs sm:text-sm pt-1 md:pt-3">
                                        Free shipping on all your order. we
                                        deliver, you enjoy
                                    </p>
                                    <Link
                                        to="/shop"
                                        className="block mt-2 sm:mt-4 lg:mt-8"
                                    >
                                        <button className="flex gap-1 items-center  bg-primary text-white py-2 lg:py-3 px-5 sm:px-10 text-xs sm:text-base rounded-[53px]">
                                            Shop now <FaArrowRight />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <img
                        src={leaf}
                        alt=""
                        className="absolute bottom-[-30px] sm:bottom-[-40px] md:bottom-[-50px] lg:[-60px] right-0 object-contain size-16 sm:size-20 md:size-24"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
