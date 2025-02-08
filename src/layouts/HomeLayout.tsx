import { Outlet, ScrollRestoration } from "react-router-dom";
import HomePageFooter from "../partials/footers/HomePageFooter";
import HomePageHeader from "../partials/headers/HomePageHeader";

const HomeLayout = () => {
  return (
    <>
      <HomePageHeader />
      <Outlet />
      <ScrollRestoration />
      <HomePageFooter />
    </>
  );
};

export default HomeLayout;
