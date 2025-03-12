import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import category1 from '../assets/images/home/category1.png';
import category2 from '../assets/images/home/category2.png';
import category3 from '../assets/images/home/category3.png';
import category4 from '../assets/images/home/category4.png';
import category5 from '../assets/images/home/category5.png';
import category6 from '../assets/images/home/category6.png';

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

const CategorySlider: React.FC = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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
            // {
            //     breakpoint: 600,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //         initialSlide: 2,
            //     },
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //     },
            // },
        ],
    };
    return (
        <div className="space-x-4 mt-12">
            <Slider {...settings}>
                <div className="px-3">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-md flex flex-col justify-center items-center py-6 hover:border border-[#2C742F] shadow-[#20B526]">
                        <img
                            src={category1}
                            className="object-contain"
                            alt=""
                        />
                        <div className="text-centter">
                            <h4 className="text-[#1a1a1a] font-medium text-lg">
                                Vegetables
                            </h4>
                            <p className="text-[#808080] text-sm">
                                165 Products
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-md flex flex-col justify-center items-center py-6">
                        <img
                            src={category2}
                            className="object-contain"
                            alt=""
                        />
                        <div className="text-center">
                            <h4 className="text-[#1a1a1a] font-medium text-lg">
                                Fresh Fruit
                            </h4>
                            <p className="text-[#808080] text-sm">
                                137 Products
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-md flex flex-col justify-center items-center py-6">
                        <img
                            src={category3}
                            className="object-contain"
                            alt=""
                        />
                        <div className="text-center">
                            <h4 className="text-[#1a1a1a] font-medium text-lg">
                                Fish
                            </h4>
                            <p className="text-[#808080] text-sm">
                                34 Products
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-md flex flex-col justify-center items-center py-6">
                        <img
                            src={category4}
                            className="object-contain"
                            alt=""
                        />
                        <div className="text-center">
                            <h4 className="text-[#1a1a1a] font-medium text-lg">
                                Meat
                            </h4>
                            <p className="text-[#808080] text-sm">
                                165 Products
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-md flex flex-col justify-center items-center py-6">
                        <img
                            src={category5}
                            className="object-contain"
                            alt=""
                        />
                        <div className="text-center">
                            <h4 className="text-[#1a1a1a] font-medium text-lg">
                                Water and Drinks
                            </h4>
                            <p className="text-[#808080] text-sm">
                                48 Products
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <div className="hover:shadow-box-sm-hover shadow-box-sm duration-300 cursor-pointer my-2 rounded-md flex flex-col justify-center items-center py-6">
                        <img
                            src={category6}
                            className="object-contain"
                            alt=""
                        />
                        <div className="text-center">
                            <h4 className="text-[#1a1a1a] font-medium text-lg hover:text-[#2C742F] duration-300">
                                Snacks
                            </h4>
                            <p className="text-[#808080] text-sm">
                                165 Products
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default CategorySlider;
