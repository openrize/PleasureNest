import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [location]);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    Pleasure<span>Nest</span>
                </Link>

                <nav>
                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
                        <li><NavLink to="/shop/vibrators" className={({ isActive }) => isActive ? 'active-link' : ''}>Vibrators</NavLink></li>
                        <li><NavLink to="/shop/couples" className={({ isActive }) => isActive ? 'active-link' : ''}>Couples</NavLink></li>
                        <li><NavLink to="/shop/bdsm" className={({ isActive }) => isActive ? 'active-link' : ''}>BDSM</NavLink></li>
                        <li><NavLink to="/shop/wellness" className={({ isActive }) => isActive ? 'active-link' : ''}>Wellness</NavLink></li>
                        <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active-link' : ''}>Journal</NavLink></li>
                    </ul>
                </nav>

                <div className="nav-icons">
                    <Link to="#"><i className="fa fa-search" /></Link>
                    <Link to="#"><i className="fa fa-shopping-bag" /></Link>
                    <div
                        className="mobile-toggle"
                        onClick={() => setMenuOpen(o => !o)}
                    >
                        <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
