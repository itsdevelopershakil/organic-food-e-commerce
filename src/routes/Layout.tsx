import { Outlet, ScrollRestoration } from "react-router-dom";
import HomePageHeader from "../partials/headers/HomePageHeader";

const Layout = () => {
  return (
    <>
      <HomePageHeader />
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
