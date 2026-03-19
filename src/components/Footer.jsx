import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="footer-container">
                <div>
                    <span className="footer-logo">Pleasure<span>Nest</span></span>
                    <p>Your premier destination for premium intimate products. Bold, discreet, and unapologetically pleasurable.</p>
                    <div className="footer-social">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fa fa-instagram" />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <i className="fa fa-music" />
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
                        <li><Link to="/shop/vibrators">Vibrators</Link></li>
                        <li><Link to="/shop/dildos">Dildos</Link></li>
                        <li><Link to="/shop/couples">Couples</Link></li>
                        <li><Link to="/shop/bdsm">BDSM</Link></li>
                        <li><Link to="/shop/wellness">Wellness</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Help</h3>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/faq">Shipping Info</Link></li>
                        <li><Link to="/faq">Returns Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/guides">Guides &amp; Blog</Link></li>
                        <li><Link to="/faq">Privacy Policy</Link></li>
                        <li><Link to="/faq">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            {/* Trust Badges Row */}
            <div className="footer-trust">
                <span><i className="fa fa-lock" /> SSL Secured</span>
                <span><i className="fa fa-archive" /> Discreet Billing</span>
                <span><i className="fa fa-shield" /> Safe Checkout</span>
                <span className="footer-age-badge">18+</span>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} PleasureNest. All Rights Reserved. | Discreet Billing &amp; Shipping Always.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
