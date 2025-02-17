import { useRef } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiListSettingsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Divider from "../../components/Divider";
import useOutsideClick from "../../hooks/useOutsideClick";

type ProfileDrawerProps = {
  open: boolean;
  close: (value: boolean) => void;
};

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ open, close }) => {
  const profileRef = useRef(null);

  useOutsideClick(profileRef, () => close(false));
  return (
    <div
      ref={profileRef}
      className={`absolute bg-white w-[240px] shadow-lg rounded-lg right-0 top-[110%] duration-300 origin-center ${
        open ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-0"
      }`}
    >
      <h1 className="font-medium px-4 pt-4 pb-2 text-left">My Account</h1>
      <Divider className="w-full h-[1px] bg-gray-300" />
      <ul className="space-y-2 p-4">
        <li className="flex justify-between cursor-pointer hover:text-primary duration-300">
          dashboard
          <MdOutlineDashboardCustomize />
        </li>
        <li className="flex justify-between cursor-pointer hover:text-primary duration-300">
          settings
          <RiListSettingsLine />
        </li>
        <li className="flex justify-between cursor-pointer hover:text-primary duration-300">
          order history
          <GoHistory />
        </li>
        <li className="flex justify-between cursor-pointer hover:text-primary duration-300">
          order details <CgDetailsMore />
        </li>
      </ul>
      <Divider className="w-full h-[1px] bg-gray-300" />
      <Link
        className="flex justify-between p-4 hover:text-primary duration-300"
        to="/logout"
      >
        logout
        <IoLogOutOutline />
      </Link>
    </div>
  );
};

export default ProfileDrawer;
