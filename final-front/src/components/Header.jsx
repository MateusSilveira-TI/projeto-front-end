import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "primeicons/primeicons.css";
import Logo from "./Logo"; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?filter=${searchTerm}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    
    <header className="header-container"> 
      <div className="secundaria">
        
        
        <div className="logo">
          <Link to="/">
             <Logo />
          </Link>
        </div>

       
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}>
          <i className="pi pi-bars"></i>
        </button>

        
        <div className="in">
          <input
            className="input"
            type="text"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <i 
            className="pi pi-search p1" 
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
        
       
        <div className="actions">
          <Link to="/register" className="link-cadastro">Cadastre-se</Link>
          <Link to="/login" className="btn-entrar">Entrar</Link>
        </div>
        
        
        <div className="cart">
          <i className="pi pi-cart-minus p2" style={{ fontSize: "2rem" }}></i>
          
        </div>
      </div>

      <nav className={`sublinks ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Produtos
        </NavLink>
        <NavLink to="/categories" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Categorias
        </NavLink>
        <NavLink to="/orders" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Meus Pedidos
        </NavLink>

       
        <div className="menu-actions">
           <Link to="/login" className="btn-outline">Entrar</Link>
           <Link to="/register" className="btn-primary">Cadastrar</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;