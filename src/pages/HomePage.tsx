import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import homeImg from '../assets/images/home/BG.png';
import img1 from '../assets/images/home/img1.png';

interface ArrowProps {
    onClick?: () => void; // onClick is an optional function
}

// Custom Next Arrow
const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <div
            className="custom-arrow next absolute top-1/2 -translate-y-1/2 bottom-0 right-[-50px] size-[45px] bg-[#fff] flex justify-center items-center rounded-full border border-[#E6E6E6] cursor-pointer"
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
            className="custom-arrow prev absolute top-1/2 -translate-y-1/2 bottom-0 left-[-50px] size-[45px] bg-[#fff] flex justify-center items-center rounded-full border border-[#E6E6E6] cursor-pointer"
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
            <div className="w-3 h-3 flex items-center justify-center bg-[#B4CCB4] rounded-full cursor-pointer"></div>
        ),
        appendDots: (dots: React.ReactNode) => (
            <div>
                <ul className="mt-[-90px] flex justify-center">{dots}</ul>
            </div>
        ),
    };

    return (
        <div>
            <div
                style={divStyle}
                className="bg-no-repeat max-w-screen h-screen bg-contain"
            >
                <div className="max-width">
                    <Slider {...settings}>
                        <div>
                            <div className="flex gap-10 items-center py-20">
                                <img
                                    src={img1}
                                    alt=""
                                    className="object-contain"
                                />
                                <div>
                                    <p className="text-primary text-sm font-medium">
                                        Welcome to shopery
                                    </p>
                                    <h1 className="text-[#1a1a1a] font-semibold text-6xl leading-[120%] pt-2">
                                        Fresh & Healthy Organic Food
                                    </h1>
                                    <p className="text-3xl pt-7 text-[#1a1a1a]">
                                        Sale up to{' '}
                                        <span className="text-[#FF8A00]">
                                            30% OFF
                                        </span>
                                    </p>
                                    <p className="text-[#808080] text-sm pt-3">
                                        Free shipping on all your order. we
                                        deliver, you enjoy
                                    </p>
                                    <Link to="/shop" className="block mt-8">
                                        <button className="flex gap-1 items-center  bg-primary text-white py-3 px-10 rounded-[53px]">
                                            Shop now <FaArrowRight />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-10 items-center py-20">
                                <img
                                    src={img1}
                                    alt=""
                                    className="object-contain"
                                />
                                <div>
                                    <p className="text-primary text-sm font-medium">
                                        Welcome to shopery
                                    </p>
                                    <h1 className="text-[#1a1a1a] font-semibold text-6xl leading-[120%] pt-2">
                                        Fresh & Healthy Organic Food
                                    </h1>
                                    <p className="text-3xl pt-7 text-[#1a1a1a]">
                                        Sale up to{' '}
                                        <span className="text-[#FF8A00]">
                                            30% OFF
                                        </span>
                                    </p>
                                    <p className="text-[#808080] text-sm pt-3">
                                        Free shipping on all your order. we
                                        deliver, you enjoy
                                    </p>
                                    <Link to="/shop" className="block mt-8">
                                        <button className="flex gap-1 items-center  bg-primary text-white py-3 px-10 rounded-[53px]">
                                            Shop now <FaArrowRight />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-10 items-center py-20">
                                <img
                                    src={img1}
                                    alt=""
                                    className="object-contain"
                                />
                                <div>
                                    <p className="text-primary text-sm font-medium">
                                        Welcome to shopery
                                    </p>
                                    <h1 className="text-[#1a1a1a] font-semibold text-6xl leading-[120%] pt-2">
                                        Fresh & Healthy Organic Food
                                    </h1>
                                    <p className="text-3xl pt-7 text-[#1a1a1a]">
                                        Sale up to{' '}
                                        <span className="text-[#FF8A00]">
                                            30% OFF
                                        </span>
                                    </p>
                                    <p className="text-[#808080] text-sm pt-3">
                                        Free shipping on all your order. we
                                        deliver, you enjoy
                                    </p>
                                    <Link to="/shop" className="block mt-8">
                                        <button className="flex gap-1 items-center  bg-primary text-white py-3 px-10 rounded-[53px]">
                                            Shop now <FaArrowRight />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
