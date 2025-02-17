import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import PhoneIcon from '../../assets/icons/PhoneIcon';
import Divider from '../../components/Divider';

type sidebarProps = {
    close: (value: boolean) => void;
    open: boolean;
};

const Sidebar: React.FC<sidebarProps> = ({ close, open }) => {
    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [dropdownHeight, setDropdownHeight] = useState(0);
    const dropdownRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (dropdownRef.current) {
            setDropdownHeight(dropdownRef.current.scrollHeight);
        }
    }, []);

    const handleDropdown = () => {
        setToggleDropDown(!toggleDropDown);
    };

    return (
        <div
            className={`fixed block md:hidden top-0 left-0 w-full duration-100 h-screen bg-black/50 z-[999999] ${
                open ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
            <div
                className={`h-full w-full max-w-[300px] bg-white ml-auto relative duration-300 ${
                    open ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <button
                    className="absolute top-5 right-5"
                    type="button"
                    onClick={() => close(false)}
                >
                    <IoClose className="size-6 cursor-pointer text-[#1a1a1a]" />
                </button>
                <ul className={`text-sm pt-10`}>
                    <li>
                        <Link
                            to="tel:+(219)555-0114"
                            className="flex gap-2 items-center px-4 pt-10"
                        >
                            <PhoneIcon className="size-5" />{' '}
                            <span className="">(219) 555-0114</span>
                        </Link>
                        <Divider className="w-full h-px bg-primary mt-2" />
                    </li>

                    <li>
                        <NavLink
                            className="hover:text-primary duration-300 flex items-center justify-between p-4 border-b border-gray-300"
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="hover:text-primary duration-300 flex items-center justify-between p-4 border-b border-gray-300"
                            to="/shop"
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li className="border-b border-gray-300">
                        <div
                            onClick={handleDropdown}
                            className="hover:text-primary duration-300 flex items-center justify-between p-4  cursor-pointer"
                        >
                            Pages <IoIosArrowDown className="inline" />
                        </div>
                        <ul
                            ref={dropdownRef}
                            className={`px-6 duration-300 overflow-hidden`}
                            style={{
                                height: `${
                                    toggleDropDown
                                        ? `${dropdownHeight}px`
                                        : '0px'
                                }`,
                            }}
                        >
                            <li className="border-b border-gray-200 p-2 hover:translate-x-1.5 duration-300 hover:text-primary">
                                <NavLink to="/sign-in">Sign In</NavLink>
                            </li>
                            <li className="border-b border-gray-200 p-2 hover:translate-x-1.5 duration-300 hover:text-primary">
                                <NavLink to="/sign-up">Sign Up</NavLink>
                            </li>
                            <li className="border-b border-gray-200 p-2 hover:translate-x-1.5 duration-300 hover:text-primary">
                                <NavLink to="/faq">FAQ</NavLink>
                            </li>
                            <li className="border-gray-300 p-2 hover:translate-x-1.5 duration-300 hover:text-primary">
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink
                            className="hover:text-primary duration-300 flex items-center justify-between p-4 border-b border-gray-300"
                            to="/blog"
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="hover:text-primary duration-300 flex items-center justify-between p-4 border-b border-gray-300"
                            to="/about"
                        >
                            About Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
