import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BookOffLogo from "../../assets/company-logos/BookOffLogo";
import FoodLogo from "../../assets/company-logos/FoodLogo";
import FoodNetWorkLogo from "../../assets/company-logos/FoodNetWorkLogo";
import GseriesLogo from "../../assets/company-logos/GseriesLogo";
import MangoLogo from "../../assets/company-logos/MangoLogo";
import StepLogo from "../../assets/company-logos/StepLogo";
import bg from "../../assets/images/footer/BG.png";
import Logo from "../../assets/images/logos/Logo-White.png";
import ApplePay from "../../assets/images/payment-cards/ApplePay.png";
import CartPayment from "../../assets/images/payment-cards/Cart-Payment.png";
import Discover from "../../assets/images/payment-cards/Discover.png";
import MasterCard from "../../assets/images/payment-cards/Mastercard.png";
import Visa from "../../assets/images/payment-cards/Visa.png";
import Divider from "../../components/Divider";
import SubcriptionForm from "./SubcriptionForm";

import CallIcon from "../../assets/images/footer/Call-Icon.png";
import LocationIcon from "../../assets/images/footer/Location-Icon.png";
import MashroomShape from "../../assets/images/footer/mashroom-shape.png";
import MessageIcon from "../../assets/images/footer/Message-Icon.png";

type FooterProps = {
  home?: boolean;
};

const Footer: React.FC<FooterProps> = ({ home }) => {
  return (
    <>
      {home ? (
        <div className="bg-white py-20 relative overflow-clip">
          <img
            src={MashroomShape}
            alt="Mashroom Shape"
            className="absolute -top-5 right-3 md:right-5 w-[80px] lg:w-[150px] object-contain z-0"
          />
          <div className="max-width">
            <div className="flex md:flex-nowrap flex-wrap md:gap-0 gap-5 items-center justify-center md:justify-between relative z-10">
              <StepLogo />
              <Divider className="bg-[#e6e6e6] h-[32px] w-px" />
              <MangoLogo />
              <Divider className="bg-[#e6e6e6] h-[32px] w-px" />
              <FoodNetWorkLogo />
              <Divider className="bg-[#e6e6e6] h-[32px] w-px" />
              <FoodLogo />
              <Divider className="bg-[#e6e6e6] h-[32px] w-px" />
              <BookOffLogo />
              <Divider className="bg-[#e6e6e6] h-[32px] w-px" />
              <GseriesLogo />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-6 mt-20 justify-between">
              <div className="w-full sm:w-[48%] lg:w-[25%] rounded-lg border border-primary text-sm p-5">
                <img src={LocationIcon} alt="Location Icon" />
                <h1 className="mt-4 mb-[10px] font-medium">Our Location</h1>
                <p className="text-[#666]">
                  1901 Thornridge Cir. Shiloh, Washington DC 20020, United
                  States
                </p>
              </div>
              <div className="w-full sm:w-[48%] lg:w-[25%] rounded-lg border border-primary text-sm p-5">
                <img src={CallIcon} alt="Call Icon" />
                <h1 className="mt-4 mb-[10px] font-medium">Call Us 24/7</h1>
                <Link
                  to={"tel:+(303)555-0105"}
                  className="text-2xl text-primary"
                >
                  (303) 555-0105
                </Link>
              </div>
              <div className="w-full lg:w-1/2 rounded-lg border border-primary text-sm p-5">
                <img src={MessageIcon} alt="Message Icon" />
                <h1 className="mt-4 mb-[10px] font-medium">
                  Subscribe Newsletter
                </h1>
                <div className="flex rounded-[500px] border border-[#e6e6e6]">
                  <input
                    type="text"
                    className="h-full outline-none bg-transparent px-5 w-[calc(100%_-_100px)] sm:w-auto sm:grow text-sm py-3 sm:py-[14px] shrink placeholder:text-xs sm:placeholder:text-sm"
                    placeholder="Your email address"
                  />
                  <button
                    type="button"
                    className="h-full shrink-0 rounded-[500px] bg-primary text-white text-sm px-5 sm:px-10 cursor-pointer py-3 sm:py-[14px] border border-primary"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#f7f7f7] py-10">
          <div className="max-width">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-5">
              <div className="w-full lg:w-1/3 flex flex-col gap-1">
                <h1 className="text-lg sm:text-2xl font-semibold">
                  Subcribe our Newsletter
                </h1>
                <p className="text-[#999] text-sm">
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna.
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap w-full lg:w-[60%] items-center gap-y-5 gap-x-10">
                <SubcriptionForm />
                <div className="flex items-center gap-2">
                  <Link
                    to={""}
                    className="size-10 rounded-full text-[#4d4d4d] duration-300 hover:text-white hover:bg-primary flex items-center justify-center text-lg"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to={""}
                    className="size-10 rounded-full text-[#4d4d4d] duration-300 hover:text-white hover:bg-primary flex items-center justify-center text-lg"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    to={""}
                    className="size-10 rounded-full text-[#4d4d4d] duration-300 hover:text-white hover:bg-primary flex items-center justify-center text-lg"
                  >
                    <FaPinterestP />
                  </Link>
                  <Link
                    to={""}
                    className="size-10 rounded-full text-[#4d4d4d] duration-300 hover:text-white hover:bg-primary flex items-center justify-center text-lg"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(26, 26, 26, 0.95), rgba(26, 26, 26, 0.95)), url(${bg})`,
        }}
        className="bg-cover text-[#999]"
      >
        <div className="pt-20 pb-[120px] max-width">
          <div className="flex md:flex-nowrap flex-wrap gap-y-5 md:gap-5">
            <div className="w-full sm:w-2/3 md:w-[25%] flex flex-col gap-4">
              <img src={Logo} alt="Ecobazar Logo" className="w-[183px]" />
              <p className="text-sm pr-10">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magn.
              </p>
              {home ? (
                <div className="flex items-center gap-5">
                  <Link
                    to={""}
                    className="size-10 rounded-full text-[#B3B3B3] duration-300 hover:text-white hover:bg-primary flex items-center justify-center text-lg"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to={""}
                    className="size-10 rounded-full text-[#B3B3B3] duration-300 hover:text-white hover:bg-primary flex items-center justify-center text-lg"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    to={""}
                    className="size-10 rounded-full text-[#B3B3B3] duration-300 hover:text-white hover:bg-primary flex items-center justify-center text-lg"
                  >
                    <FaPinterestP />
                  </Link>
                  <Link
                    to={""}
                    className="size-10 rounded-full text-[#B3B3B3] duration-300 hover:text-white hover:bg-primary flex items-center justify-center text-lg"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              ) : (
                <div className="flex xl:flex-row flex-col items-start xl:items-center gap-2 xl:gap-4 text-white">
                  <Link
                    to={"tel:+(219)555-0114"}
                    className="text-sm pb-2 border-b-2 border-primary"
                  >
                    (219) 555-0114
                  </Link>
                  <span className="text-[#808080] xl:-mt-2">or</span>
                  <Link
                    to={"mailto:proxy@gmail.com"}
                    className="text-sm pb-2 border-b-2 border-primary"
                  >
                    Proxy@gmail.com
                  </Link>
                </div>
              )}
            </div>
            <div className="w-full sm:w-1/3 md:w-auto md:grow">
              <h1 className="text-white text-lg font-medium">My Account</h1>
              <Divider className="w-6 h-[2px] rounded-lg bg-primary my-3" />
              <ul className="flex flex-col gap-3 mt-6">
                <li>
                  <Link to={""} className="duration-300 hover:text-white">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to={""} className="duration-300 hover:text-white">
                    Order History
                  </Link>
                </li>
                <li>
                  <Link to={""} className="duration-300 hover:text-white">
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <Link to={""} className="duration-300 hover:text-white">
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-[25%] md:w-auto md:grow">
              <h1 className="text-white text-lg font-medium">Helps</h1>
              <Divider className="w-6 h-[2px] rounded-lg bg-primary my-3" />
              <ul className="flex flex-col gap-3 mt-6">
                <li>
                  <Link to={""} className="duration-300 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to={""} className="duration-300 hover:text-white">
                    Faqs
                  </Link>
                </li>
                <li>
                  <Link to={""} className="duration-300 hover:text-white">
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link to={""} className="duration-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-[25%] md:w-auto md:grow">
              <h1 className="text-white text-lg font-medium">Proxy</h1>
              <Divider className="w-6 h-[2px] rounded-lg bg-primary my-3" />
              <ul className="flex flex-col gap-3 mt-6">
                <li>
                  <Link to={""} className="duration-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to={""} className="duration-300 hover:text-white">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to={""} className="duration-300 hover:text-white">
                    Product
                  </Link>
                </li>
                <li>
                  <Link to={""} className="duration-300 hover:text-white">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-[25%]">
              <h1 className="text-white text-lg font-medium">
                Download Mobile App
              </h1>
              <Divider className="w-6 h-[2px] rounded-lg bg-primary my-3" />
              <div className="flex xl:flex-row flex-col gap-2 mt-6">
                <Link
                  to={""}
                  className="w-[250px] sm:w-full lg:w-[65%] justify-center xl:w-1/2 flex items-center gap-[6px] p-[10px] rounded-md bg-[#333] text-white"
                >
                  <FaApple className="text-3xl" />
                  <div>
                    <p className="text-[11px] text-[#b3b3b3]">
                      Download on the
                    </p>
                    <h1 className="font-medium text-sm sm:text-base">
                      App Store
                    </h1>
                  </div>
                </Link>
                <Link
                  to={""}
                  className="w-[250px] sm:w-full lg:w-[65%] justify-center xl:w-1/2 flex items-center gap-[6px] p-[10px] rounded-md bg-[#333] text-white"
                >
                  <FaGooglePlay className="text-2xl" />
                  <div>
                    <p className="text-[11px] text-[#b3b3b3]">
                      Download on the
                    </p>
                    <h1 className="font-medium text-sm sm:text-base">
                      Google Play
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <Divider className="h-px w-full bg-[#333]" />
        <div className="py-6">
          <div className="max-width">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-y-3">
              <p className="text-center sm:text-left text-sm sm:text-base">
                Ecobazar eCommerce &copy; 2025. All Rights Reserved
              </p>
              <div className="flex gap-2">
                <img src={ApplePay} alt="ApplePay Card" />
                <img src={Visa} alt="Visa Card" />
                <img src={Discover} alt="Discover Card" />
                <img src={MasterCard} alt="MasterCard Card" />
                <img src={CartPayment} alt="Cart Payment Card" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
