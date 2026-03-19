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

    const navLinks = [
        { to: '/shop', label: 'Shop All' },
        { to: '/shop/vibrators', label: 'Best Sellers' },
        { to: '/shop/wellness', label: 'New Arrivals' },
        { to: '/guides', label: 'Guides' },
        { to: '/faq', label: 'FAQ' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    Pleasure<span>Nest</span>
                </Link>

                <nav>
                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        {navLinks.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) => isActive ? 'active-link' : ''}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="nav-icons">
                    <Link to="/shop" aria-label="Search"><i className="fa fa-search" /></Link>
                    <Link to="/shop" aria-label="Cart"><i className="fa fa-shopping-bag" /></Link>
                    <button
                        className="mobile-toggle"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen(o => !o)}
                    >
                        <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
