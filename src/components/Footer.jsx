import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="footer-container">
                <div>
                    <Link to="/" className="footer-logo-link">
                        <img src="/logo.png" alt="Pleasure Nest" style={{ height: '52px', marginBottom: '20px' }} />
                    </Link>
                    <p>
                        Modern wellness and intimacy for every relationship.
                        Designed for comfort, confidence, and connection.
                    </p>
                    <div className="footer-social">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fa fa-instagram" />
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                            <i className="fa fa-pinterest" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fa fa-facebook" />
                        </a>
                    </div>
                </div>
                <div>
                    <h3>Shop</h3>
                    <ul>
                        <li><Link to="/shop">All Products</Link></li>
                        <li><Link to="/collections/couples">Couples</Link></li>
                        <li><Link to="/collections/self-care">Self-Care</Link></li>
                        <li><Link to="/collections/wellness">Wellness</Link></li>
                        <li><Link to="/collections/gift-ideas">Gift Ideas</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Learn</h3>
                    <ul>
                        <li><Link to="/education">Education</Link></li>
                        <li><Link to="/education/beginner-guide">Beginner Guide</Link></li>
                        <li><Link to="/education/safe-materials">Safe Materials</Link></li>
                        <li><Link to="/wellness">Wellness Hub</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Support</h3>
                    <ul>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/rewards">Rewards</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-trust">
                <span><i className="fa fa-lock" /> SSL Secured</span>
                <span><i className="fa fa-archive" /> Discreet Packaging</span>
                <span><i className="fa fa-shield" /> Body-Safe Materials</span>
                <span><i className="fa fa-truck" /> Fast Shipping</span>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Pleasure Nest. All Rights Reserved. | Discreet billing &amp; shipping always.</p>
                <div className="powered-by">
                    Powered by <a href="https://www.openrize.com" target="_blank" rel="noopener noreferrer">Openrize</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
