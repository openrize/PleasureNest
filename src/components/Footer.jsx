import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="footer-container">
                <div>
                    <span className="footer-logo">Pleasure<span>Nest</span></span>
                    <p>Your premier destination for premium intimate products. Bold, discreet, and unapologetically pleasurable.</p>
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
                        <li><Link to="#">Shipping</Link></li>
                        <li><Link to="#">Returns</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/blog">Journal</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} PleasureNest. All Rights Reserved. | Discreet Billing & Shipping Always.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
