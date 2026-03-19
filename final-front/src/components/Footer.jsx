import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; 


import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";


const Information = ({ title, informations }) => {
  return (
    <div className="footer-col">
      <h3>{title}</h3>
      <nav>
        {informations.map((item, index) => (
          <Link key={index} to={item.link}>
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

function Footer() {
  
  const infoList = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/jobs" },
    { text: "Meus Pedidos", link: "/orders" },
  ];

  const categoryList = [
    { text: "Camisetas", link: "/products?c=camisetas" },
    { text: "Calças", link: "/products?c=calcas" },
    { text: "Bonés", link: "/products?c=bones" },
    { text: "Headphones", link: "/products?c=headphones" },
    { text: "Tênis", link: "/products?c=tenis" },
  ];

  const contactList = [
    { text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", link: "/location" },
    { text: "(85) 3051-3411", link: "tel:8530513411" },
    { text: "contato@dripstore.com", link: "mailto:contato@dripstore.com" },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        
        <div className="footer-brand">
          <div className="logo-white">
            <Logo />
          </div>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>

        
        <div className="footer-links">
          <Information title="Informação" informations={infoList} />
          <Information title="Categorias" informations={categoryList} />
          <Information title="Contato" informations={contactList} />
        </div>
      </div>

      
      <hr className="footer-line" />
      <p className="copyright">© 2024 Digital Store</p>
    </footer>
  );
}

export default Footer;