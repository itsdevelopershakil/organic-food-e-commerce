import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { TiStar } from 'react-icons/ti';
import Slider from 'react-slick';
import img3 from '../assets/images/about/about10.png';
import img1 from '../assets/images/about/about8.png';
import img2 from '../assets/images/about/about9.png';
import QuoteIcon from '../assets/images/about/QuoteIcon';

interface ArrowProps {
    onClick?: () => void; // onClick is an optional function
}

// Custom Next Arrow
const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <div
            className="custom-arrow next absolute top-[-55px] md:top-[-95px] right-0 size-8 md:size-[45px] bg-white hover:bg-primary text-[#1a1a1a] hover:text-white flex justify-center items-center rounded-full border border-[#E6E6E6] cursor-pointer"
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
            className="custom-arrow prev absolute top-[-55px] md:top-[-95px] right-[40px] md:right-[60px] size-8 md:size-[45px] bg-white hover:bg-primary text-[#1a1a1a] hover:text-white flex justify-center items-center rounded-full border border-[#E6E6E6] cursor-pointer"
            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
};

const TestimonialSlider: React.FC = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomNextArrow />, // No need to pass onClick manually
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                },
            },
            // {
            //     breakpoint: 360,
            //     settings: {
            //         slidesToShow: 3,
            //         infinite: true,
            //     },
            // },
        ],
    };

    return (
        <div className="space-x-4 mt-6 md:mt-12">
            <Slider {...settings}>
                <div className="px-2 md:px-4">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-lg bg-white">
                        <div className="px-5 py-4">
                            <QuoteIcon />
                            <p className="text-[#4D4D4D] text-sm pt-4">
                                Pellentesque eu nibh eget mauris congue mattis
                                mattis nec tellus. Phasellus imperdiet elit eu
                                magna dictum, bibendum cursus velit sodales.
                                Donec sed neque eget
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3 pt-6 pb-2">
                                    <img src={img1} alt="" />
                                    <div>
                                        <p className="text-[#1a1a1a] font-medium text-sm md:text-base">
                                            Robert Fox
                                        </p>
                                        <p className="text-xs md:text-sm text-[#999999]">
                                            Customer
                                        </p>
                                    </div>
                                </div>
                                <div className="flex *:text-[#FF8A00] *:size-4">
                                    <TiStar />
                                    <TiStar />
                                    <TiStar />
                                    <TiStar />
                                    <TiStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 md:px-4">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-lg bg-white">
                        <div className="px-5 py-4">
                            <QuoteIcon />
                            <p className="text-[#4D4D4D] text-sm pt-4">
                                Pellentesque eu nibh eget mauris congue mattis
                                mattis nec tellus. Phasellus imperdiet elit eu
                                magna dictum, bibendum cursus velit sodales.
                                Donec sed neque eget
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3 pt-6 pb-2">
                                    <img src={img2} alt="" />
                                    <div>
                                        <p className="text-[#1a1a1a] font-medium text-sm md:text-base">
                                            Dianne Russell
                                        </p>
                                        <p className="text-xs md:text-sm text-[#999999]">
                                            Customer
                                        </p>
                                    </div>
                                </div>
                                <div className="flex *:text-[#FF8A00] *:size-4">
                                    <TiStar />
                                    <TiStar />
                                    <TiStar />
                                    <TiStar />
                                    <TiStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 md:px-4">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-lg bg-white">
                        <div className="px-5 py-4">
                            <QuoteIcon />
                            <p className="text-[#4D4D4D] text-sm pt-4">
                                Pellentesque eu nibh eget mauris congue mattis
                                mattis nec tellus. Phasellus imperdiet elit eu
                                magna dictum, bibendum cursus velit sodales.
                                Donec sed neque eget
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3 pt-6 pb-2">
                                    <img src={img3} alt="" />
                                    <div>
                                        <p className="text-[#1a1a1a] font-medium text-sm md:text-base">
                                            Eleanor Pena
                                        </p>
                                        <p className="text-xs md:text-sm text-[#999999]">
                                            Customer
                                        </p>
                                    </div>
                                </div>
                                <div className="flex *:text-[#FF8A00] *:size-4">
                                    <TiStar />
                                    <TiStar />
                                    <TiStar />
                                    <TiStar />
                                    <TiStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default TestimonialSlider;
