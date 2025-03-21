import { FaArrowRight } from 'react-icons/fa';
import { FiTag } from 'react-icons/fi';
import { GoComment } from 'react-icons/go';
import { Link } from 'react-router-dom';
import blog from '../assets/images/home/Blog.png';
import news1 from '../assets/images/home/news1.png';
import news2 from '../assets/images/home/news2.png';
import news3 from '../assets/images/home/news3.png';
import newsBg from '../assets/images/home/newsbg.png';
import UserIcon from '../assets/images/UserIcon';

const newsBG = {
    backgroundImage: `url(${newsBg})`,
};

const NewsSection = () => {
    return (
        <div style={newsBG} className="bg-no-repeat bg-cover">
            <div className="max-width">
                <div className="py-10 md:py-20">
                    <img src={blog} alt="" className="mx-auto" />
                    <h1 className="text-center text-[#1a1a1a] text-[40px] font-semibold">
                        Latest News
                    </h1>

                    <div className="pt-10 flex flex-col md:flex-row gap-4 lg:gap-6">
                        <div className="w-full md:w-1/3 shadow-box rounded-lg bg-white">
                            <div className="relative">
                                <img
                                    src={news1}
                                    alt=""
                                    className="w-full object-cover md:object-contain"
                                />
                                <div className="absolute bottom-[16px] left-[16px] lg:bottom-[24px] lg:left-[24px] bg-white opacity-[85%] text-center size-[50px] lg:size-[58px] rounded-sm">
                                    <p className="text-[#1a1a1a] text-xl font-medium">
                                        18
                                    </p>
                                    <p className="text-sm font-medium text-[#808080]">
                                        NOV
                                    </p>
                                </div>
                            </div>
                            <div className="py-6 p-2 lg:p-4 xl:p-6 group">
                                <ul className="flex gap-2 md:gap-1 lg:gap-4 text-sm *:md:text-xs *:lg:text-sm">
                                    <li className="flex gap-0.5 lg:gap-1 items-center text-[#B3B3B3]">
                                        <FiTag className="" />{' '}
                                        <span className="text-[#666]">
                                            Food
                                        </span>
                                    </li>
                                    <li className="flex gap-0.5 lg:gap-1 items-center text-[#B3B3B3]">
                                        <UserIcon className="size-3 lg:size-4" />{' '}
                                        <span className="text-[#666]">
                                            By Admin
                                        </span>
                                    </li>
                                    <li className="flex gap-0.5 lg:gap-1 items-center text-[#B3B3B3]">
                                        <GoComment />{' '}
                                        <span className="text-[#666666]">
                                            65 Comments
                                        </span>
                                    </li>
                                </ul>
                                <p className="pt-2 text-sm lg:text-lg text-[#1a1a1a] font-medium group-hover:text-[#2C742F] duration-150 cursor-pointer">
                                    Curabitur porttitor orci eget neque accumsan
                                    venenatis. Nunc fermentum.
                                </p>
                                <Link
                                    to={'#'}
                                    className="flex items-center gap-3 font-semibold text-primary mt-3 lg:mt-5 text-sm lg:text-base"
                                >
                                    Read More <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 shadow-box rounded-lg bg-white">
                            <div className="relative">
                                <img
                                    src={news2}
                                    alt=""
                                    className="w-full object-cover md:object-contain"
                                />
                                <div className="absolute bottom-[16px] left-[16px] lg:bottom-[24px] lg:left-[24px] bg-white opacity-[85%] text-center size-[50px] lg:size-[58px] rounded-sm">
                                    <p className="text-[#1a1a1a] text-xl font-medium">
                                        23
                                    </p>
                                    <p className="text-sm font-medium text-[#808080]">
                                        JAN
                                    </p>
                                </div>
                            </div>
                            <div className="py-6 p-2 lg:p-4 xl:p-6 group">
                                <ul className="flex gap-2 md:gap-1 lg:gap-4 text-sm *:md:text-xs *:lg:text-sm">
                                    <li className="flex gap-0.5 lg:gap-1 items-center text-[#B3B3B3]">
                                        <FiTag className="" />{' '}
                                        <span className="text-[#666]">
                                            Food
                                        </span>
                                    </li>
                                    <li className="flex gap-0.5 lg:gap-1 items-center text-[#B3B3B3]">
                                        <UserIcon className="size-3 lg:size-4" />{' '}
                                        <span className="text-[#666]">
                                            By Admin
                                        </span>
                                    </li>
                                    <li className="flex gap-0.5 lg:gap-1 items-center text-[#B3B3B3]">
                                        <GoComment />{' '}
                                        <span className="text-[#666666]">
                                            65 Comments
                                        </span>
                                    </li>
                                </ul>
                                <p className="pt-2 text-sm lg:text-lg text-[#1a1a1a] font-medium group-hover:text-[#2C742F] duration-150 cursor-pointer">
                                    Curabitur porttitor orci eget neque accumsan
                                    venenatis. Nunc fermentum.
                                </p>
                                <Link
                                    to={'#'}
                                    className="flex items-center gap-3 font-semibold text-primary mt-3 lg:mt-5 text-sm lg:text-base"
                                >
                                    Read More <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 shadow-box rounded-lg bg-white">
                            <div className="relative">
                                <img
                                    src={news3}
                                    alt=""
                                    className="w-full object-cover md:object-contain"
                                />
                                <div className="absolute bottom-[16px] left-[16px] lg:bottom-[24px] lg:left-[24px] bg-white opacity-[85%] text-center size-[50px] lg:size-[58px] rounded-sm">
                                    <p className="text-[#1a1a1a] text-xl font-medium">
                                        18
                                    </p>
                                    <p className="text-sm font-medium text-[#808080]">
                                        NOV
                                    </p>
                                </div>
                            </div>
                            <div className="py-6 p-2 lg:p-4 xl:p-6 group">
                                <ul className="flex gap-2 md:gap-1 lg:gap-4 text-sm *:md:text-xs *:lg:text-sm">
                                    <li className="flex gap-0.5 lg:gap-1 items-center text-[#B3B3B3]">
                                        <FiTag className="" />{' '}
                                        <span className="text-[#666]">
                                            Food
                                        </span>
                                    </li>
                                    <li className="flex gap-0.5 lg:gap-1 items-center text-[#B3B3B3]">
                                        <UserIcon className="size-3 lg:size-4" />{' '}
                                        <span className="text-[#666]">
                                            By Admin
                                        </span>
                                    </li>
                                    <li className="flex gap-0.5 lg:gap-1 items-center text-[#B3B3B3]">
                                        <GoComment />{' '}
                                        <span className="text-[#666666]">
                                            65 Comments
                                        </span>
                                    </li>
                                </ul>
                                <p className="pt-2 text-sm lg:text-lg text-[#1a1a1a] font-medium group-hover:text-[#2C742F] duration-150 cursor-pointer">
                                    Curabitur porttitor orci eget neque accumsan
                                    venenatis. Nunc fermentum.
                                </p>
                                <Link
                                    to={'#'}
                                    className="flex items-center gap-3 font-semibold text-primary mt-3 lg:mt-5 text-sm lg:text-base"
                                >
                                    Read More <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
