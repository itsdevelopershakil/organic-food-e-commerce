import { MouseEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CiSearch } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavouriteIcon from '../../assets/icons/FavouriteIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import ShoppingBag from '../../assets/icons/ShoppingBag';
import logo from '../../assets/images/logos/Logo.png';
import Divider from '../../components/Divider';
import { setCartOpen } from '../../redux/features/header/cartSlice';
import { RootState } from '../../redux/store';
import BottomBar from './BottomBar';
import CartBar from './CartBar';
import Navbar from './Navbar';
import ProfileDrawer from './ProfileDrawer';
import SearchBox from './SearchBox';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const HomePageHeader = () => {
    const dispatch = useDispatch();
    const { open, cartItems } = useSelector((state: RootState) => state.cart);

    const [openSideBar, setOpentSideBar] = useState(false);
    const [openSearchBox, setOpenSearchBox] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [openProfile, setOpenProfile] = useState(false);

    const handleSearch = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (searchValue) {
            console.log(searchValue);
        } else {
            toast.error('Please enter value!');
        }
    };

    const isLoggedIn = false;

    useEffect(() => {
        if (open || openSideBar || openSearchBox) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open, openSideBar, openSearchBox]);
    return (
        <>
            <SearchBox close={setOpenSearchBox} open={openSearchBox} />
            <header>
                <Topbar theme="primary" />
                {isLoggedIn ? (
                    <nav className="py-5 shadow">
                        <div className="max-width">
                            <div className="flex justify-between items-center">
                                <Navbar className="text-[#808080]" />
                                <div className="shrink-0">
                                    <img
                                        src={logo}
                                        alt="Ecobarzar"
                                        className="w-[120px] sm:w-[183px]"
                                    />
                                </div>
                                <div className="flex gap-5 lg:gap-10 items-center justify-center">
                                    <Link
                                        to="tel:+(219)555-0114"
                                        className="gap-2 items-center hidden sm:flex"
                                    >
                                        <PhoneIcon className="size-5" />
                                        <span className="hidden lg:block">
                                            (219) 555-0114
                                        </span>
                                    </Link>

                                    <ul className="flex justify-center items-center gap-3 sm:gap-5 *:flex *:items-center">
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenSearchBox(true)
                                                }
                                            >
                                                <SearchIcon className="size-4 sm:size-5 cursor-pointer" />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <FavouriteIcon className="size-5 sm:size-6 cursor-pointer" />
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="relative"
                                                type="button"
                                                onClick={() =>
                                                    dispatch(setCartOpen(true))
                                                }
                                            >
                                                <ShoppingBag className="size-6 sm:size-7 cursor-pointer" />
                                                <div className="absolute top-0 right-0 text-xs bg-primary h-4 w-4 rounded-full flex items-center justify-center text-white">
                                                    {cartItems.length || 0}
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="relative z-[999999]">
                                                <span
                                                    onClick={() =>
                                                        setOpenProfile(
                                                            !openProfile
                                                        )
                                                    }
                                                >
                                                    <ProfileIcon className="size-5 sm:size-6 cursor-pointer" />
                                                </span>
                                                <ProfileDrawer
                                                    open={openProfile}
                                                    close={setOpenProfile}
                                                />
                                            </button>
                                        </li>
                                        <li className="block md:hidden">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpentSideBar(true)
                                                }
                                            >
                                                <FaBars className="size-5 sm:size-6 text-[#1a1a1a] cursor-pointer" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                ) : (
                    <nav className="shadow-sm">
                        <div className="border-b border-[#E5E5E5]">
                            <div className="max-width">
                                <div className="flex items-center justify-between py-5">
                                    <div>
                                        <img
                                            src={logo}
                                            alt="Ecobarzar"
                                            className="w-[120px] sm:w-[183px]"
                                        />
                                    </div>
                                    <div className="hidden lg:flex w-[498px] h-[45px] border border-[#E6E6E6] rounded-md ">
                                        <div className="relative w-[calc(100%_-_98px)]">
                                            <input
                                                className="px-10 py-2 text-sm size-full outline-none"
                                                type="text"
                                                placeholder="Search"
                                                value={searchValue}
                                                onChange={(e) =>
                                                    setSearchValue(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <CiSearch className="absolute top-1/2 left-4 text-xl text-[#1a1a1a] -translate-y-1/2" />
                                        </div>
                                        <button
                                            className="w-[98px] h-full rounded-md bg-primary border border-primary text-white text-sm font-semibold shrink-0 flex justify-center items-center"
                                            type="button"
                                            onClick={handleSearch}
                                        >
                                            Search
                                        </button>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <button
                                            className="block lg:hidden"
                                            type="button"
                                            onClick={() =>
                                                setOpenSearchBox(true)
                                            }
                                        >
                                            <SearchIcon className="size-4 sm:size-5 cursor-pointer" />
                                        </button>
                                        <button>
                                            <FavouriteIcon className="size-5 sm:size-6 cursor-pointer" />
                                        </button>
                                        <Divider className="h-6 w-px bg-black md:block hidden" />
                                        <div
                                            className="flex gap-3 cursor-pointer"
                                            onClick={() =>
                                                dispatch(setCartOpen(true))
                                            }
                                        >
                                            <button className="relative">
                                                <ShoppingBag className="size-6 sm:size-7 cursor-pointer" />
                                                <div className="absolute top-0 right-0 text-xs bg-primary h-4 w-4 rounded-full flex items-center justify-center text-white cursor-pointer">
                                                    {cartItems.length || 0}
                                                </div>
                                            </button>
                                            <div className="hidden md:block">
                                                <p className="text-[#4d4d4d] text-xs">
                                                    Shopping cart:
                                                </p>
                                                <p className="text-sm font-medium">
                                                    $ 57.00
                                                </p>
                                            </div>
                                        </div>
                                        <div className="block mt-2 md:hidden">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpentSideBar(true)
                                                }
                                            >
                                                <FaBars className="size-5 sm:size-6 text-[#1a1a1a] cursor-pointer" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <BottomBar />
                    </nav>
                )}
            </header>
            <Sidebar close={setOpentSideBar} open={openSideBar} />
            <CartBar />
        </>
    );
};

export default HomePageHeader;
