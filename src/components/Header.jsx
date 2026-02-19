import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="container nav-container">
                <Link to="/" className="logo">PleasureNest</Link>
                <nav>
                    <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
                        <li><NavLink to="/shop/vibrators" className={({ isActive }) => isActive ? "active-link" : ""}>Vibrators</NavLink></li>
                        <li><NavLink to="/shop/dildos" className={({ isActive }) => isActive ? "active-link" : ""}>Dildos</NavLink></li>
                        <li><NavLink to="/shop/couples" className={({ isActive }) => isActive ? "active-link" : ""}>Couples</NavLink></li>
                        <li><NavLink to="/shop/bdsm" className={({ isActive }) => isActive ? "active-link" : ""}>BDSM</NavLink></li>
                        <li><NavLink to="/shop/wellness" className={({ isActive }) => isActive ? "active-link" : ""}>Wellness</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
                    </ul>
                    <div className="nav-icons">
                        <Link to="#"><i className="fa fa-search"></i></Link>
                        <Link to="#"><i className="fa fa-shopping-cart"></i></Link>
                        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <i className={`fa ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
