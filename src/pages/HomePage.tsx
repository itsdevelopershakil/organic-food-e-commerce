import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { TiStar } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import FavouriteIcon from '../assets/icons/FavouriteIcon';
import ShoppingBag from '../assets/icons/ShoppingBag';
import homeImg from '../assets/images/home/BG.png';
import capsicum from '../assets/images/home/Capsicum.png';
import Categorybg from '../assets/images/home/categoryBG.png';
import categoryBgObj from '../assets/images/home/categoryBgObj.png';
import categoryBgObj2 from '../assets/images/home/categoryBgObj2.png';
import cavvage from '../assets/images/home/chineeseCabbage.png';
import chooseUsImg from '../assets/images/home/chooseUs1.png';
import chooseUsImg2 from '../assets/images/home/chooseUs2.png';
import Eye from '../assets/images/home/Eye';
import Feature1 from '../assets/images/home/Feature1';
import Feature2 from '../assets/images/home/Feature2';
import Feature3 from '../assets/images/home/Feature3';
import Feature4 from '../assets/images/home/Feature4';
import FeatureBg from '../assets/images/home/FeatureBG.png';
import Apple from '../assets/images/home/greenApple.png';
import icon from '../assets/images/home/Icon.png';
import icon2 from '../assets/images/home/Icon2.png';
import img1 from '../assets/images/home/img1.png';
import ladyFinger from '../assets/images/home/ladiesFiinger.png';
import leaf from '../assets/images/home/leaf.png';
import TickMark from '../assets/images/TickMark';
import CategorySlider from '../components/CategorySlider';
import Divider from '../components/Divider';

import chooseUsBg from '../assets/images/home/chooseUsBg.png';
import chooseUsBg2 from '../assets/images/home/chooseUsBg2.png';
import chooseUsBg3 from '../assets/images/home/chooseUsBg3.png';
import chooseUsBg4 from '../assets/images/home/chooseUsBg4.png';
import chooseUsBg5 from '../assets/images/home/chooseUsBg5.png';
import experienceBGimg from '../assets/images/home/experienceBg.png';
import experienceImg2 from '../assets/images/home/experienceImg.png';
import experienceImg3 from '../assets/images/home/experienceImg2.png';
import experienceImg4 from '../assets/images/home/experienceImg3.png';
import leaf2 from '../assets/images/home/leaf2.png';
import OfferButton from '../components/ShopButton';
import CounterUpOnView from '../lib/CounterUpOnView';

import offerBG from '../assets/images/home/offerBG.png';
import offerBG2 from '../assets/images/home/offerBG2.png';
import offerBG3 from '../assets/images/home/offerBG3.png';
import offerBG4 from '../assets/images/home/offerBG4.png';
import offerBG5 from '../assets/images/home/offerBG5.png';
import BestSale from '../components/BestSale';
import Timer from '../lib/Timer';

interface ArrowProps {
    onClick?: () => void; // onClick is an optional function
}

// Custom Next Arrow
const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <div
            className="custom-arrow next absolute top-1/2 -translate-y-1/2 bottom-0 right-0 size-[30px] sm:size-[45px]  bg-[#fff] flex justify-center items-center rounded-full border border-[#E6E6E6] cursor-pointer"
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
            className="custom-arrow prev absolute top-1/2 -translate-y-1/2 bottom-0 left-0 size-[30px] sm:size-[45px]  bg-[#fff] flex justify-center items-center rounded-full border  border-[#E6E6E6] cursor-pointer z-[999]"
            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
};

const divStyle = {
    backgroundImage: `url(${homeImg})`,
};
const featureBg = {
    backgroundImage: `url(${FeatureBg})`,
};

const categoryBG = {
    backgroundImage: `url(${Categorybg})`,
};

const experienceBG = {
    backgroundImage: `url(${experienceBGimg})`,
};
const OfferBGstyle = {
    backgroundImage: `url(${offerBG})`,
};
const OfferBGstyle2 = {
    backgroundImage: `url(${offerBG2})`,
};

const HomePage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const featureStyle = (index: number): React.CSSProperties => ({
        backgroundImage:
            activeIndex === index ? `url(${icon2})` : `url(${icon})`,
    });

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

            {/* Feature section start  */}
            <div className="max-width">
                <div className="flex flex-wrap text-center w-full">
                    <div className="w-full sm:w-1/2 lg:w-1/4 pt-8 pb-5 sm:py-10 border-b-4 border-white hover:border-primary duration-300 shrink-0">
                        <div
                            className="bg-no-repeat bg-contain size-18 flex items-center justify-center group cursor-pointer mx-auto"
                            style={featureStyle(1)}
                            onMouseEnter={() => setActiveIndex(1)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <Feature1 className="fill-primary group-hover:fill-white duration-300" />
                        </div>
                        <h3 className="pt-4 text-lg font-semibold">
                            Free Shipping
                        </h3>
                        <p className="pt-2 text-[#999]">
                            Free shipping with discount
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 pt-8 pb-5 sm:py-10 border-b-4 border-white hover:border-primary duration-300 shrink-0">
                        <div
                            className="bg-no-repeat bg-contain size-18 flex items-center justify-center group cursor-pointer mx-auto"
                            style={featureStyle(2)}
                            onMouseEnter={() => setActiveIndex(2)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <Feature2 className="fill-primary group-hover:fill-white duration-300" />
                        </div>
                        <h3 className="pt-4 text-lg font-semibold">
                            Great Support 24/7
                        </h3>
                        <p className="pt-2 text-[#999]">
                            Instant access to Contact
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 pt-8 pb-5 sm:py-10  border-b-4 border-white hover:border-primary duration-300 shrink-0">
                        <div
                            className="bg-no-repeat bg-contain size-18 flex items-center justify-center group cursor-pointer mx-auto"
                            style={featureStyle(3)}
                            onMouseEnter={() => setActiveIndex(3)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <Feature3 className="fill-primary group-hover:text-white duration-300" />
                        </div>
                        <h3 className="pt-4 text-lg font-semibold">
                            100% Sucure Payment
                        </h3>
                        <p className="pt-2 text-[#999]">
                            We ensure your money is save
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 pt-8 pb-5 sm:py-10 border-b-4 border-white hover:border-primary duration-300 shrink-0">
                        <div
                            className="bg-no-repeat bg-contain size-18 flex items-center justify-center group cursor-pointer mx-auto"
                            style={featureStyle(4)}
                            onMouseEnter={() => setActiveIndex(4)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <Feature4 className="fill-primary group-hover:fill-white duration-300" />
                        </div>
                        <h3 className="pt-4 text-lg font-semibold">
                            Money-Back Guarantee
                        </h3>
                        <p className="pt-2 text-[#999]">30 days money-back</p>
                    </div>
                </div>
                <Divider className="h-px w-full bg-[#CCCCCC]" />
            </div>
            {/* Feature section end  */}

            {/* Product Section Start  */}
            <div style={featureBg} className="bg-no-repeat bg-[left_90%]">
                <div className="max-width">
                    <div className="py-20">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl sm:text-3xl md:text-[40px] font-semibold text-[#1A1A1A]">
                                Featured Products
                            </h3>
                            <Link
                                to="/shop"
                                className="flex items-center gap-3 text-primary text-sm sm:text-base"
                            >
                                View All <FaArrowRight />
                            </Link>
                        </div>

                        <div className="md:mx-5 lg:mx-0 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:gap-6">
                            <div className="border border-[#E6E6E6] hover:border-[#2C742F] hover:shadow-box-md shadow-[#20B526] pt-8 p-2 sm:p-4 rounded-lg cursor-pointer duration-300 relative group bg-white">
                                <div className="absolute top-[16px] bg-[#EA4B48] rounded-sm p-1 px-2 text-white text-sm sm:text-base">
                                    Sale 50%
                                </div>
                                <div className="absolute right-[10px] sm:right-[20px] top-[20px] *:size-8 *:sm:size-10 *:border *:rounded-full *:border-[#F2F2F2] *:bg-white">
                                    <div className="group-hover:flex items-center justify-center hidden">
                                        <FavouriteIcon className="size-5" />
                                    </div>
                                    <div className="group-hover:flex items-center justify-center hidden mt-1.5">
                                        <Eye className="size-5" />
                                    </div>
                                </div>
                                <img
                                    src={Apple}
                                    alt=""
                                    className="object-contain"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs sm:text-sm text-[#4D4D4D]">
                                            Green Apple
                                        </p>
                                        <p className="flex gap-0.5 pt-0.5 text-sm sm:text-base">
                                            <span>$14.99</span>
                                            <span className="text-[#999999]">
                                                $20.99
                                            </span>
                                        </p>
                                        <div className="flex gap-1 pt-0.5 *:text-[#FF8A00] *:size-3">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                    <div className="size-8 sm:size-10 bg-[#F2F2F2] group-hover:bg-primary rounded-full flex justify-center items-center shrink-0">
                                        <ShoppingBag className="size-4 sm:size-6 group-hover:stroke-[#fff]" />
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#E6E6E6] hover:border-[#2C742F] hover:shadow-box-md shadow-[#20B526] pt-8 p-4 rounded-lg cursor-pointer duration-300 relative group bg-white">
                                <div className="absolute right-[10px] sm:right-[20px] top-[20px] *:size-8 *:sm:size-10 *:border *:rounded-full *:border-[#F2F2F2] *:bg-white">
                                    <div className="group-hover:flex items-center justify-center hidden">
                                        <FavouriteIcon className="size-5" />
                                    </div>
                                    <div className="group-hover:flex items-center justify-center hidden mt-1.5">
                                        <Eye className="size-5" />
                                    </div>
                                </div>
                                <img
                                    src={cavvage}
                                    alt=""
                                    className="object-contain"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs sm:text-sm text-[#4D4D4D]">
                                            Green Apple
                                        </p>
                                        <p className="flex gap-0.5 pt-0.5 text-sm sm:text-base">
                                            <span>$14.99</span>
                                        </p>
                                        <div className="flex gap-1 pt-0.5 *:text-[#FF8A00] *:size-3">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                    <div className="size-8 sm:size-10 bg-[#F2F2F2] group-hover:bg-primary rounded-full flex justify-center items-center shrink-0">
                                        <ShoppingBag className="size-4 sm:size-6 group-hover:stroke-[#fff]" />
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#E6E6E6] hover:border-[#2C742F] hover:shadow-box-md shadow-[#20B526] pt-8 p-4 rounded-lg cursor-pointer duration-300 relative group bg-white">
                                <div className="absolute right-[10px] sm:right-[20px] top-[20px] *:size-8 *:sm:size-10 *:border *:rounded-full *:border-[#F2F2F2] *:bg-white">
                                    <div className="group-hover:flex items-center justify-center hidden">
                                        <FavouriteIcon className="size-5" />
                                    </div>
                                    <div className="group-hover:flex items-center justify-center hidden mt-1.5">
                                        <Eye className="size-5" />
                                    </div>
                                </div>
                                <img
                                    src={capsicum}
                                    alt=""
                                    className="object-contain"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs sm:text-sm text-[#4D4D4D]">
                                            Green Apple
                                        </p>
                                        <p className="flex gap-0.5 pt-0.5 text-sm sm:text-base">
                                            <span>$14.99</span>
                                        </p>
                                        <div className="flex gap-1 pt-0.5 *:text-[#FF8A00] *:size-3">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                    <div className="size-8 sm:size-10 bg-[#F2F2F2] group-hover:bg-primary rounded-full flex justify-center items-center shrink-0">
                                        <ShoppingBag className="size-4 sm:size-6 group-hover:stroke-[#fff]" />
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#E6E6E6] hover:border-[#2C742F] hover:shadow-box-md shadow-[#20B526] pt-8 p-4 rounded-lg cursor-pointer duration-300 relative group bg-white">
                                <div className="absolute right-[10px] sm:right-[20px] top-[20px] *:size-8 *:sm:size-10 *:border *:rounded-full *:border-[#F2F2F2] *:bg-white">
                                    <div className="group-hover:flex items-center justify-center hidden">
                                        <FavouriteIcon className="size-5" />
                                    </div>
                                    <div className="group-hover:flex items-center justify-center hidden mt-1.5">
                                        <Eye className="size-5" />
                                    </div>
                                </div>
                                <img
                                    src={ladyFinger}
                                    alt=""
                                    className="object-contain"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs sm:text-sm text-[#4D4D4D]">
                                            Green Apple
                                        </p>
                                        <p className="flex gap-0.5 pt-0.5 text-sm sm:text-base">
                                            <span>$14.99</span>
                                        </p>
                                        <div className="flex gap-1 pt-0.5 *:text-[#FF8A00] *:size-3">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                    <div className="size-8 sm:size-10 bg-[#F2F2F2] group-hover:bg-primary rounded-full flex justify-center items-center shrink-0">
                                        <ShoppingBag className="size-4 sm:size-6 group-hover:stroke-[#fff]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Section end  */}

            {/* Category Section start  */}
            <div style={categoryBG} className="bg-no-repeat bg-cover relative">
                <div className="absolute bottom-[10%] right-0">
                    <img
                        src={categoryBgObj}
                        alt=""
                        className="object-contain"
                    />
                </div>
                <div className="absolute bottom-[10px] right-[14%]">
                    <img
                        src={categoryBgObj2}
                        alt=""
                        className="object-contain"
                    />
                </div>
                <div className="max-width">
                    <div className="py-10 md:py-20">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg sm:text-3xl md:text-[40px] font-semibold text-[#1A1A1A]">
                                Shop by Top Categories
                            </h3>
                            <Link
                                to="/shop"
                                className="flex items-center gap-3 text-primary text-xs sm:text-base"
                            >
                                View All <FaArrowRight />
                            </Link>
                        </div>
                        <div>
                            <CategorySlider />
                        </div>
                    </div>
                </div>
            </div>
            {/* Category Section end  */}

            {/* Choose Us Section start  */}
            <div className="py-10 sm:py-20 relative overflow-hidden">
                <div className="absolute top-0 left-0">
                    <img src={chooseUsBg} alt="" />
                </div>
                <div className="absolute left-[50px] bottom-[10%]">
                    <img src={chooseUsBg2} alt="" />
                </div>
                <div className="absolute right-[30px] top-[20%]">
                    <img src={chooseUsBg5} alt="" />
                </div>
                <div className="absolute right-[10%] bottom-[-50px]">
                    <img src={leaf2} alt="" />
                </div>

                <div className="max-width">
                    <div className="flex flex-col lg:flex-row lg:gap-10 lg:items-center">
                        <div className="w-full lg:w-[60%]">
                            <div className="flex gap-3 md:gap-6 relative">
                                <div className="z-[99] relative">
                                    <img
                                        src={chooseUsImg}
                                        alt=""
                                        className="object-contain"
                                    />
                                    <div className="absolute left-[-15px] xl:left-[-50px] bottom-[5px] sm:bottom-[20px] lg:bottom-0 xl:bottom-[30px]">
                                        <img
                                            src={chooseUsBg3}
                                            alt=""
                                            className="object-contain w-16 sm:w-20"
                                        />
                                    </div>
                                </div>
                                <div className="z-[99]">
                                    <img
                                        src={chooseUsImg2}
                                        alt=""
                                        className="object-contain"
                                    />
                                </div>
                                <div className="absolute top-[-60px] left-[20%]">
                                    <img src={chooseUsBg4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[40%] shrink-0 z-[99]">
                            <h3 className="text-2xl sm:text-4xl md:text-[40px] font-semibold leading-[1.2] pt-4 xl:w-[85%] ]">
                                100% Trusted Organic Food Store
                            </h3>
                            <div className="flex gap-3 pt-6">
                                <div className="size-6 bg-primary rounded-full flex justify-center items-center shrink-0">
                                    <TickMark className="size-4" />
                                </div>
                                <div>
                                    <h5 className="text-lg font-semibold text-[#1a1a1a]">
                                        Healthy & natural food for lovers of
                                        healthy food.
                                    </h5>
                                    <p className="text-[#808080] pt-2.5">
                                        Ut quis tempus erat. Phasellus euismod
                                        bibendum magna non tristique.
                                        Pellentesque semper vestibulum elit sed
                                        condimentum. Nunc pretium fermentum
                                        interdum.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3 pt-6">
                                <div className="size-6 bg-primary rounded-full flex justify-center items-center shrink-0">
                                    <TickMark className="size-4" />
                                </div>
                                <div>
                                    <h5 className="text-lg font-semibold text-[#1a1a1a]">
                                        Every day fresh and quality products for
                                        you.
                                    </h5>
                                    <p className="text-[#808080] pt-2.5">
                                        Maecenas vehicula a justo quis laoreet.
                                        Sed in placerat nibh, a posuere ex.
                                        Morbi sem neque, aliquam sed orci et,
                                        rhoncus lobortis felis. Sed vestibulum
                                        nisl sit amet sapien.
                                    </p>
                                </div>
                            </div>
                            <Link
                                to="/shop"
                                className="w-[130px] sm:w-[192px] mt-6 md:mt-2 sm:mt-4 lg:mt-6 flex gap-4 items-center  bg-primary text-white py-2 lg:py-3 px-5 sm:px-10 text-xs sm:text-base rounded-[53px]"
                            >
                                <p>Shop now</p> <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Choose us Section end  */}

            {/* Experience Section Start  */}
            <div
                style={experienceBG}
                className="bg-no-repeat bg-cover relative"
            >
                <div className="absolute top-[10%] left-[-20px]">
                    <img src={experienceImg2} alt="" />
                </div>
                <div className="absolute right-[10%] bottom-[-16px] opacity-30">
                    <img src={experienceImg3} alt="" />
                </div>
                <div className="absolute right-0 top-[10%]">
                    <img src={experienceImg4} alt="" />
                </div>
                <div className="max-width py-10 sm:py-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                        <div className="text-center bg-white/7 py-5 sm:py-10 rounded-lg z-[999]">
                            <div className="text-primary text-4xl sm:text-5xl lg:text-[56px] flex gap-1 font-light justify-center">
                                <CounterUpOnView end={37} />
                                <p>+</p>
                            </div>
                            <p className="text-white text-sm sm:text-base lg:text-lg pt-1">
                                Years of Hard Work
                            </p>
                        </div>
                        <div className="text-center bg-white/7 py-5 sm:py-10 rounded-lg z-[999]">
                            <div className="text-primary text-4xl sm:text-5xl lg:text-[56px] flex gap-1 font-light justify-center">
                                <CounterUpOnView end={500} />
                                k+
                            </div>
                            <p className="text-white text-sm sm:text-base lg:text-lg pt-1">
                                Happy Customer
                            </p>
                        </div>
                        <div className="text-center bg-white/7 py-5 sm:py-10 rounded-lg z-[999]">
                            <CounterUpOnView
                                end={28}
                                className="text-primary text-4xl sm:text-5xl lg:text-[56px] font-light"
                            />
                            <p className="text-white text-sm sm:text-base lg:text-lg pt-1">
                                Qualified Team Member
                            </p>
                        </div>
                        <div className="text-center bg-white/7 py-5 sm:py-10 rounded-lg z-[999]">
                            <div className="text-primary flex gap-1 text-4xl sm:text-5xl lg:text-[56px] font-light justify-center">
                                <CounterUpOnView end={750} />
                                k+
                            </div>
                            <p className="text-white text-sm sm:text-base lg:text-lg pt-1">
                                Monthly Orders
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Experience Section End  */}

            {/* Offer Section Start  */}
            <div className="relative overflow-hidden">
                <div className="absolute top-[10%] left-[50px]">
                    <img src={offerBG3} alt="" />
                </div>
                <div className="absolute right-0 top-[-30%]">
                    <img src={offerBG4} alt="" />
                </div>
                <div className="absolute right-0 lg:right-[50px] bottom-0">
                    <img src={offerBG5} alt="" />
                </div>
                <div className="max-width">
                    <div className="flex flex-col sm:flex-row md:px-4 lg:px-0 gap-3 lg:gap-6 py-10 lg:py-20">
                        <div
                            className="py-10 lg:py-20 sm:w-1/2 bg-cover bg-no-repeat text-white px-10 flex flex-col justify-center rounded-lg z-[999]"
                            style={OfferBGstyle}
                        >
                            <p className="text-sm">100% ORGANIC</p>
                            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold pt-2">
                                Fruit & Vegetable
                            </h4>
                            <div className="pt-3 lg:pt-6 flex gap-2 items-center">
                                Starting at:
                                <p className="p-1 bg-[#FF8A00] rounded-sm text-sm sm:text-base">
                                    $11.99
                                </p>
                            </div>
                            <OfferButton className="mt-4 lg:mt-6 text-sm bg-primary" />
                        </div>
                        <div
                            className="py-10 lg:py-20 sm:w-1/2 bg-cover bg-no-repeat text-white px-10 flex flex-col justify-center rounded-lg z-[999]"
                            style={OfferBGstyle2}
                        >
                            <p className="text-sm">sale off the week</p>
                            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold sm:pt-2">
                                Sales of the Year
                            </h4>

                            <Timer targetDate="2025-05-31T23:59:59" />

                            <OfferButton className="mt-4 lg:mt-6 bg-primary text-sm" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Offer Section end  */}

            {/* best seller section start  */}
            <BestSale />
            {/* best seller section end */}
        </div>
    );
};

export default HomePage;
