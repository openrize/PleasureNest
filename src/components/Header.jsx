import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [location]);

    const navLinks = [
        { to: '/shop', label: 'Shop' },
        { to: '/collections', label: 'Collections' },
        { to: '/wellness', label: 'Wellness' },
        { to: '/education', label: 'Education' },
        { to: '/about', label: 'About' },
        { to: '/faq', label: 'FAQ' },
        { to: '/contact', label: 'Contact' },
        { to: '/rewards', label: 'Rewards' },
    ];

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="Pleasure Nest" style={{ height: '44px' }} />
                </Link>

                <nav>
                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        {navLinks.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) => isActive ? 'active-link' : ''}
                                    onClick={() => {
                                        setMenuOpen(false);
                                        if (window.innerWidth <= 768) {
                                            window.scrollTo(0, 0);
                                        }
                                    }}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="nav-icons">
                    <Link to="/shop" aria-label="Search"><i className="fa fa-search" /></Link>
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
