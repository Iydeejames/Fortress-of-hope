

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import FI1 from "../../assets/imgs/FI1.PNG";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="logo-container">
                    <img src={FI1} alt="Logo" className="logo-image" />
                </div>
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>

                    <Link to="/home" onClick={handleNavLinkClick}>Home</Link>
                    <Link to="/aboutus" onClick={handleNavLinkClick}>About Us</Link>
                    <Link to="/what we do" onClick={handleNavLinkClick}>About Us</Link>
                    <Link to="/media resources" onClick={handleNavLinkClick}>About Us</Link>
                    <Link to="/online giving" onClick={handleNavLinkClick}>About Us</Link>
                    <Link to="/contact us" onClick={handleNavLinkClick}>About Us</Link>
                    {/* Add more links as needed */}
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
