import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const HomePageLayout = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePageLayout;
