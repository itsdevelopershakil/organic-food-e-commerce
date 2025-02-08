import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import bg from "../../assets/images/footer/BG.png";
import Logo from "../../assets/images/logos/Logo-White.png";

const HomePageFooter = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(26, 26, 26, 0.95), rgba(26, 26, 26, 0.95)), url(${bg})`,
      }}
      className="bg-cover"
    >
      <div className="pt-20 pb-[120px] max-width">
        <div className="flex gap-5">
          <div className="">
            <img src={Logo} alt="Ecobazar Logo" />
            <p>
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magn.
            </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFooter;
