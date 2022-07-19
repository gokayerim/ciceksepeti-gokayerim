import React from "react";
import Header from "./Header";
import Title from "./Title";
import BreadCrumb from "./BreadCrumb";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Title />
      <BreadCrumb />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
