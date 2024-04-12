import React from "react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <div className="contact-section">
            <h1></h1>
            <div className="section-heading-line"></div>
            <div className="contact-wrapper">
                <div className="contact-details">
                    <div className="phone">
                        <FaMobileAlt />
                        <h3>Phone</h3>
                        <p>+234 000 000 0000</p>
                    </div>
                    <div className="address">
                        <FaMapMarkerAlt />
                        <h3>Address</h3>
                        <p> Fortress Of Hope Gospel Church, Nwaniba road, opposite NDLEA, Uyo.</p>
                    </div>
                    <div className="email">
                        <FaEnvelope />
                        <h3>Email</h3>
                        <p>fortressofhope@gmail.com</p>
                    </div>
                </div>
                <h2 className="form-text">Get in Touch</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message" />
                </form>
                <div className="social-media">
                    <a href="https://wa.me/233247447640" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/raisedinitiatives?igshid=YTQwZjQ0Nml0OA==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.x.com/raisedinitiative?t=VlwTiilHy96dk_RPltc4yA&s=09" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.facebook.com/raisedinitiatives?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://www.linkedin.com/company/raisedinitiatives/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ContactSection;
