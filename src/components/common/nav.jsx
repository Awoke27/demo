
import "./common.css";
import logo from "../../assets/logo.png";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);


  return (
    
     <>
     <header className="navbar">
      <div className="logo">HomeAgent</div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/listings" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Listings</NavLink>
        <NavLink to="/messages" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Messages</NavLink>
        <NavLink to="/clients" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Clients</NavLink>
        <NavLink to="/settings" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Settings</NavLink>
      </nav>

      <button className="menu-btn" onClick={toggleMenu}>
        ☰
      </button>
    </header>
     </>
  );
}
