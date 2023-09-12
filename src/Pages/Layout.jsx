import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import ScrollButton from "../Components/ScrollToTop/ScrollToTop";


const Layout = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>

      <div className="">
        <Outlet />
      </div>

      <div className="">
        <Footer />
      </div>
      <ScrollButton />
    </section>
  );
};

export default Layout;
