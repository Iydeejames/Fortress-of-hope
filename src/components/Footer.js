import React from "react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const FooterSection = () => {

return(
<footer className="footer-section">
<div className="footer-nav">
    <a href="#home">Home</a>
    <a href="#about-us">About Us</a>
    <a href="#what-we-do">What we do</a>
    <a href="#media-resources">Media resources</a>
    <a href="#online-giving">Online giving</a>
</div>


<p className="copyright">Designed by IydeeJames 2024</p>
{/*Add a link to the copyright*/}
</footer>
);
};

export default FooterSection;