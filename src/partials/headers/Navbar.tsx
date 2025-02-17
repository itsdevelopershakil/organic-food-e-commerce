import { IoIosArrowDown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

type NavbarProps = {
    className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <ul className={`hidden md:flex gap-2 lg:gap-8 text-sm ${className}`}>
            <li>
                <NavLink className="hover:text-primary duration-300" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className="hover:text-primary duration-300" to="/shop">
                    Shop
                </NavLink>
            </li>
            <li>
                <div className="group duration-300 cursor-pointer relative">
                    <div className="hover:text-primary">
                        Pages <IoIosArrowDown className="inline" />
                    </div>
                    <ul className="group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 invisible opacity-0 absolute top-full left-0 bg-white z-[9999] py-4 shadow-lg w-50 space-y-2 px-2 duration-300 origin-top scale-y-0">
                        <li className="border-b border-gray-300 p-2 hover:translate-x-1.5 duration-300 hover:text-primary">
                            <NavLink to="/sign-in">Sign In</NavLink>
                        </li>
                        <li className="border-b border-gray-300 p-2 hover:translate-x-1.5 duration-300 hover:text-primary">
                            <NavLink to="/sign-up">Sign Up</NavLink>
                        </li>
                        <li className="border-b border-gray-300 p-2 hover:translate-x-1.5 duration-300 hover:text-primary">
                            <NavLink to="/faq">FAQ</NavLink>
                        </li>
                        <li className="border-gray-300 p-2 hover:translate-x-1.5 duration-300 hover:text-primary">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <NavLink className="hover:text-primary duration-300" to="/blog">
                    Blog
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="hover:text-primary duration-300"
                    to="/about"
                >
                    About Us
                </NavLink>
            </li>
        </ul>
    );
};

export default Navbar;
