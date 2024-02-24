import react, {useState, useEffect} from 'react';

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

    }

};

export default Navbar;