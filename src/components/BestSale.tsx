import { FaArrowRight } from 'react-icons/fa';
import { TiStar } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import FavouriteIcon from '../assets/icons/FavouriteIcon';
import ShoppingBag from '../assets/icons/ShoppingBag';
import cavvage from '../assets/images/home/chineeseCabbage.png';
import Eye from '../assets/images/home/Eye';
import Apple from '../assets/images/home/greenApple.png';

import bestSaleBg from '../assets/images/home/bestSaleBg.png';
import bestSaleBg2 from '../assets/images/home/bestSaleBg2.png';
import bestSaleBg3 from '../assets/images/home/bestSaleBg3.png';
import bestSaleBg4 from '../assets/images/home/bestSaleBg4.png';
import bestSaleBg5 from '../assets/images/home/bestSaleBg5.png';
import bestSaleBg6 from '../assets/images/home/bestSaleBg6.png';
import ladyFinger from '../assets/images/home/ladiesFiinger.png';
import Corn from '../assets/images/products/Corn.png';
import couliflower from '../assets/images/products/couliflower.png';
import eggPlant from '../assets/images/products/eggPlant.png';
import greenChilli from '../assets/images/products/greenChilli.png';
import lettus from '../assets/images/products/lettus.png';
import malta from '../assets/images/products/orange.png';
import potato from '../assets/images/products/potato.png';
import tomato from '../assets/images/products/tomato.png';
import ShopButton from './ShopButton';

const BestSale = () => {
    return (
        <div className="relative">
            <div className="absolute top-[-150px]">
                <img src={bestSaleBg2} alt="" className="object-contain" />
            </div>
            <div className="absolute top-[50%]">
                <img src={bestSaleBg3} alt="" />
            </div>

            <div className="absolute right-0 top-[45%]">
                <img src={bestSaleBg5} alt="" />
            </div>

            <div className="max-width">
                <div className="pb-20">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg sm:text-3xl md:text-[40px] font-semibold text-[#1A1A1A] z-[99]">
                            Best Seller Products
                        </h3>
                        <Link
                            to="/shop"
                            className="flex items-center gap-3 text-primary text-xs sm:text-base"
                        >
                            View All <FaArrowRight />
                        </Link>
                    </div>

                    <div className="md:mx-5 lg:mx-0 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-6">
                        <div className="border border-[#E6E6E6] hover:border-[#2C742F] hover:shadow-box-md shadow-[#20B526] pt-8 p-2 sm:p-4 rounded-lg cursor-pointer duration-300 group bg-white">
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
                                        Chanise Cabbage
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
                                src={lettus}
                                alt=""
                                className="object-contain"
                            />
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-xs sm:text-sm text-[#4D4D4D]">
                                        Green Lettuce
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
                                src={greenChilli}
                                alt=""
                                className="object-contain"
                            />
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-xs sm:text-sm text-[#4D4D4D]">
                                        Green Chili
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
                            <img src={Corn} alt="" className="object-contain" />
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-xs sm:text-sm text-[#4D4D4D]">
                                        Corn
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

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 pt-10 gap-6 relative">
                        <div className="hidden lg:block absolute lg:right-0 2xl:right-[-40px] bottom-[-15px]">
                            <img
                                src={bestSaleBg6}
                                alt=""
                                className="object-contain"
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute top-[10px] left-[-80px]">
                                <img src={bestSaleBg4} alt="" />
                            </div>
                            <h4 className="text-2xl font-medium text-[#1a1a1a]">
                                Hot Deals
                            </h4>
                            <div className="pt-4 space-y-4">
                                <div className="flex items-center gap-3 border border-[#E6E6E6] rounded-md cursor-pointer   hover:shadow-box-sm shadow-[#20B526] duration-300 group relative">
                                    <div className="absolute left-[100px] top-[42px] hidden group-hover:flex items-center bg-white gap-1.5">
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <ShoppingBag className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <Eye className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <FavouriteIcon className="size-5 hover:stroke-white" />
                                        </div>
                                    </div>
                                    <img
                                        src={Apple}
                                        alt=""
                                        className="size-25"
                                    />
                                    <div>
                                        <p className="text-sm text-[#4d4d4d] group-hover:text-[#2C742F]">
                                            Green Apple
                                        </p>
                                        <p className="font-medium text-[#1a1a1a]">
                                            $14.99
                                        </p>
                                        <div className="flex gap-0.1 pt-1 *:text-[#FF8A00] *:size-4">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 border border-[#E6E6E6] rounded-md cursor-pointer   hover:shadow-box-sm shadow-[#20B526] duration-300 group relative">
                                    <div className="absolute left-[100px] top-[42px] hidden group-hover:flex items-center bg-white gap-1.5">
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <ShoppingBag className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <Eye className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <FavouriteIcon className="size-5 hover:stroke-white" />
                                        </div>
                                    </div>
                                    <img
                                        src={malta}
                                        alt=""
                                        className="size-25 object-contain"
                                    />
                                    <div>
                                        <p className="text-sm text-[#4d4d4d] group-hover:text-[#2C742F]">
                                            Indian Malta
                                        </p>
                                        <p className="font-medium text-[#1a1a1a]">
                                            $14.99
                                        </p>
                                        <div className="flex gap-0.1 pt-1 *:text-[#FF8A00] *:size-4">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 border border-[#E6E6E6] rounded-md cursor-pointer   hover:shadow-box-sm shadow-[#20B526] duration-300 group relative">
                                    <div className="absolute left-[100px] top-[42px] hidden group-hover:flex items-center bg-white gap-1.5">
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <ShoppingBag className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <Eye className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <FavouriteIcon className="size-5 hover:stroke-white" />
                                        </div>
                                    </div>
                                    <img
                                        src={lettus}
                                        alt=""
                                        className="size-25 object-contain"
                                    />
                                    <div>
                                        <p className="text-sm text-[#4d4d4d] group-hover:text-[#2C742F]">
                                            Green Lettuce
                                        </p>
                                        <p className="font-medium text-[#1a1a1a]">
                                            $14.99
                                        </p>
                                        <div className="flex gap-0.1 pt-1 *:text-[#FF8A00] *:size-4">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-2xl font-medium text-[#1a1a1a]">
                                Best Seller
                            </h4>
                            <div className="pt-4 space-y-4">
                                <div className="flex items-center gap-3 border border-[#E6E6E6] rounded-md cursor-pointer   hover:shadow-box-sm shadow-[#20B526] duration-300 group relative">
                                    <div className="absolute left-[100px] top-[42px] hidden group-hover:flex items-center bg-white gap-1.5">
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <ShoppingBag className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <Eye className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <FavouriteIcon className="size-5 hover:stroke-white" />
                                        </div>
                                    </div>
                                    <img
                                        src={eggPlant}
                                        alt=""
                                        className="size-25 object-contain"
                                    />
                                    <div>
                                        <p className="text-sm text-[#4d4d4d] group-hover:text-[#2C742F]">
                                            Eggplant
                                        </p>
                                        <p className="font-medium text-[#1a1a1a]">
                                            $14.99
                                        </p>
                                        <div className="flex gap-0.1 pt-1 *:text-[#FF8A00] *:size-4">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 border border-[#E6E6E6] rounded-md cursor-pointer   hover:shadow-box-sm shadow-[#20B526] duration-300 group relative">
                                    <div className="absolute left-[100px] top-[42px] hidden group-hover:flex items-center bg-white gap-1.5">
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <ShoppingBag className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <Eye className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <FavouriteIcon className="size-5 hover:stroke-white" />
                                        </div>
                                    </div>
                                    <img
                                        src={ladyFinger}
                                        alt=""
                                        className="size-25 object-contain"
                                    />
                                    <div>
                                        <p className="text-sm text-[#4d4d4d] group-hover:text-[#2C742F]">
                                            Red capsicum
                                        </p>
                                        <p className="font-medium text-[#1a1a1a]">
                                            $14.99
                                        </p>
                                        <div className="flex gap-0.1 pt-1 *:text-[#FF8A00] *:size-4">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 border border-[#E6E6E6] rounded-md cursor-pointer hover:shadow-box-sm shadow-[#20B526] duration-300 group relative">
                                    <div className="absolute left-[100px] top-[42px] hidden group-hover:flex items-center bg-white gap-1.5">
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <ShoppingBag className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <Eye className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <FavouriteIcon className="size-5 hover:stroke-white" />
                                        </div>
                                    </div>
                                    <img
                                        src={tomato}
                                        alt=""
                                        className="size-25"
                                    />
                                    <div>
                                        <p className="text-sm text-[#4d4d4d] group-hover:text-[#2C742F]">
                                            Red Tomato
                                        </p>
                                        <p className="font-medium text-[#1a1a1a]">
                                            $14.99
                                        </p>
                                        <div className="flex gap-0.1 pt-1 *:text-[#FF8A00] *:size-4">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-2xl font-medium text-[#1a1a1a]">
                                Top Rated
                            </h4>
                            <div className="pt-4 space-y-4">
                                <div className="flex items-center gap-3 border border-[#E6E6E6] rounded-md cursor-pointer   hover:shadow-box-sm shadow-[#20B526] duration-300 group relative">
                                    <div className="absolute left-[100px] top-[42px] hidden group-hover:flex items-center bg-white gap-1.5">
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <ShoppingBag className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <Eye className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <FavouriteIcon className="size-5 hover:stroke-white" />
                                        </div>
                                    </div>
                                    <img
                                        src={potato}
                                        alt=""
                                        className="size-25 object-contain"
                                    />
                                    <div>
                                        <p className="text-sm text-[#4d4d4d] group-hover:text-[#2C742F]">
                                            Big Potatos
                                        </p>
                                        <p className="font-medium text-[#1a1a1a]">
                                            $14.99
                                        </p>
                                        <div className="flex gap-0.1 pt-1 *:text-[#FF8A00] *:size-4">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 border border-[#E6E6E6] rounded-md cursor-pointer   hover:shadow-box-sm shadow-[#20B526] duration-300 group relative">
                                    <div className="absolute left-[100px] top-[42px] hidden group-hover:flex items-center bg-white gap-1.5">
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <ShoppingBag className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <Eye className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <FavouriteIcon className="size-5 hover:stroke-white" />
                                        </div>
                                    </div>
                                    <img
                                        src={Corn}
                                        alt=""
                                        className="size-25"
                                    />
                                    <div>
                                        <p className="text-sm text-[#4d4d4d] group-hover:text-[#2C742F]">
                                            Corn
                                        </p>
                                        <p className="flex gap-0.5 pt-0.5 text-sm sm:text-base">
                                            <span>$14.99</span>
                                            <span className="text-[#999999]">
                                                $20.99
                                            </span>
                                        </p>
                                        <div className="flex gap-0.1 pt-1 *:text-[#FF8A00] *:size-4">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 border border-[#E6E6E6] rounded-md cursor-pointer   hover:shadow-box-sm shadow-[#20B526] duration-300 group relative">
                                    <div className="absolute left-[100px] top-[42px] hidden group-hover:flex items-center bg-white gap-1.5">
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <ShoppingBag className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <Eye className="size-5 hover:stroke-white" />
                                        </div>
                                        <div className="size-10 bg-white hover:bg-primary rounded-full border border-[#f2f2f2] flex justify-center items-center">
                                            <FavouriteIcon className="size-5 hover:stroke-white" />
                                        </div>
                                    </div>
                                    <img
                                        src={couliflower}
                                        alt=""
                                        className="size-25 object-contain"
                                    />
                                    <div>
                                        <p className="text-sm text-[#4d4d4d] group-hover:text-[#2C742F]">
                                            Fresh cauliflower
                                        </p>
                                        <p className="font-medium text-[#1a1a1a]">
                                            $14.99
                                        </p>
                                        <div className="flex gap-0.1 pt-1 *:text-[#FF8A00] *:size-4">
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar />
                                            <TiStar className="!text-[#CCCCCC]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-cover bg-no-repeat rounded-lg py-8 z-[99]"
                            style={{ backgroundImage: `url(${bestSaleBg})` }}
                        >
                            <p className="text-center text-sm">Hot Sale</p>
                            <h4 className="text-center text-3xl px-4 text-[#1a1a1a] pt-3">
                                <span className="font-semibold">Save 37%</span>{' '}
                                on Every Order
                            </h4>

                            <ShopButton className="text-sm bg-white mx-auto text-primary mt-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSale;
