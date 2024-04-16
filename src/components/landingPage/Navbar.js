import React, {useState, useEffect} from 'react';
import FI1 from "../../assets/imgs/FI1.PNG";

const Navbar = () => {
    const[MenuOpen, setMenuOpen] = useState(false);
    const[scrolled, setScrolled] = useState(false);

    useEffect( () => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    const toggleMenu = () => {
        MenuOpen (!MenuOpen)
    };

    const handleNavLinkClick = () => {
        setMenuOpen(false)
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <div className="container">
            <div className="logo-container">
              <img src={FI1} alt="Logo" className="logo-image" />
            </div>
            <div className={`nav-links ${MenuOpen ? "active" : "" }`}>
              <a href="#home" onClick={handleNavLinkClick}>Home</a>
              <a href="#about us" onClick={handleNavLinkClick}>About Us</a>
              <a href="#what we do" onClick={handleNavLinkClick}>What We Do</a>
              <a href="#media resources" onClick={handleNavLinkClick}>Media Resources</a>
              <a href="#online giving" onClick={handleNavLinkClick}>Online Giving</a>
              <a href="#contact us" onClick={handleNavLinkClick}>Contact Us</a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      );

};

export default Navbar;