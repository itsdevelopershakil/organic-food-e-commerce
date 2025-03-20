import { FaArrowRight } from 'react-icons/fa';
import { FiTag } from 'react-icons/fi';
import { GoComment } from 'react-icons/go';
import { Link } from 'react-router-dom';
import blog from '../assets/images/home/Blog.png';
import news1 from '../assets/images/home/news1.png';
import news2 from '../assets/images/home/news2.png';
import news3 from '../assets/images/home/news3.png';
import UserIcon from '../assets/images/UserIcon';

const NewsSection = () => {
    return (
        <div>
            <div className="max-width">
                <div className="py-20">
                    <img src={blog} alt="" className="mx-auto" />
                    <h1 className="text-center text-[#1a1a1a] text-[40px] font-semibold">
                        Latest News
                    </h1>

                    <div className="pt-10 flex gap-3">
                        <div className="w-1/3">
                            <div>
                                <img src={news1} alt="" />
                            </div>
                            <ul>
                                <li>
                                    <FiTag /> Food
                                </li>
                                <li>
                                    <UserIcon /> By Admin
                                </li>
                                <li>
                                    <GoComment /> 65 Comments
                                </li>
                            </ul>
                            <p>
                                Curabitur porttitor orci eget neque accumsan
                                venenatis. Nunc fermentum.
                            </p>
                            <Link to={'#'}>
                                Read More <FaArrowRight />
                            </Link>
                        </div>
                        <div>
                            <div>
                                <img src={news2} alt="" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={news3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
