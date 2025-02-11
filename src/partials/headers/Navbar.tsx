import { IoIosArrowDown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

type NavbarProps = {
    className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <ul className={`hidden md:flex gap-2 text-sm ${className}`}>
            <li>
                <NavLink className="hover:text-primary duration-300" to="/">
                    Home <IoIosArrowDown className="inline" />
                </NavLink>
            </li>
            <li>
                <NavLink className="hover:text-primary duration-300" to="/shop">
                    Shop <IoIosArrowDown className="inline" />
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="hover:text-primary duration-300"
                    to="/pages"
                >
                    Pages <IoIosArrowDown className="inline" />
                </NavLink>
            </li>
            <li>
                <NavLink className="hover:text-primary duration-300" to="/blog">
                    Blog <IoIosArrowDown className="inline" />
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
