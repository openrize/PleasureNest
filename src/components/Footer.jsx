import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <div className="footer-col">
                    <h3>PleasureNest</h3>
                    <p>Your online destination for premium adult toys. Fun, safe, and judgment-free.</p>
                </div>
                <div className="footer-col">
                    <h3>Customer Care</h3>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li><Link to="#">Shipping & Returns</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Shop</h3>
                    <ul>
                        <li><Link to="/shop/vibrators">Vibrators</Link></li>
                        <li><Link to="/shop/couples">Couples</Link></li>
                        <li><Link to="/shop/bdsm">BDSM</Link></li>
                        <li><Link to="/shop/wellness">Wellness</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Recent Blog Posts</h3>
                    <ul>
                        <li><Link to="/blog">Top 10 Toys for Couples</Link></li>
                        <li><Link to="/blog">Beginner's Guide to BDSM</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 PleasureNest. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
