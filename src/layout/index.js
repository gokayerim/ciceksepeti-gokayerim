import React from "react";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import Footer from "./Footer";
import Container from "./Container";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <BreadCrumb />
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
