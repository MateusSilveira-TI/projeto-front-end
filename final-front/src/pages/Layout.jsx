import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Layout = ({ children }) => {
  return (
    <div>
     
      <Header />

      
      <main style={{ minHeight: "70vh" }}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;