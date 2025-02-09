import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../partials/footer/Footer";
import HomePageHeader from "../partials/headers/HomePageHeader";

const HomeLayout = () => {
  return (
    <>
      <HomePageHeader />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default HomeLayout;
