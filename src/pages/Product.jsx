import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import products from '../data/products.json';
import QuoteActions from '../components/QuoteActions';
import { SALES_EMAIL, SALES_PHONE, withInventory } from '../utils/inventory';

const StarRating = ({ rating = 4.7, count = 48 }) => (
    <div className="product-stars-detail">
        {[1,2,3,4,5].map(i => (
            <span key={i} className={`star-lg ${i <= Math.round(rating) ? 'filled' : ''}`}>★</span>
        ))}
        <span className="star-score">{rating}/5</span>
        <span className="star-count">({count} reviews)</span>
    </div>
);

const FAQAccordion = ({ items }) => {
    const [open, setOpen] = useState(null);
    return (
        <div className="product-faq">
            <h3 style={{ marginBottom: '20px' }}>Frequently Asked Questions</h3>
            {items.map((item, i) => (
                <div key={i} className="faq-item" onClick={() => setOpen(open === i ? null : i)}>
                    <div className="faq-q">
                        {item.q}
                        <i className={`fa fa-chevron-down faq-chevron ${open === i ? 'open' : ''}`} />
                    </div>
                    <div className={`faq-a ${open === i ? 'faq-a--open' : ''}`}>
                        <p>{item.a}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Product = () => {
    const { id } = useParams();
    const [activeImg] = useState(0);

    const product = withInventory(products.find(p => p.id === parseInt(id)) || {
        name: 'Product Not Found',
        price: '$0.00',
        sku: 'N/A',
        type: 'unknown',
        desc: "Sorry, we couldn't find the product you were looking for."
    });

    const related = products.filter(p => p.type === product.type && p.id !== product.id).map(withInventory).slice(0, 3);

    const levelMap = { vibrators: 'Beginner', couples: 'Intermediate', bdsm: 'Advanced', wellness: 'Beginner', dildos: 'Intermediate' };
    const level = levelMap[product.type] || 'All Levels';

    const faqItems = [
        { q: 'Is shipping discreet?', a: 'Yes — plain unmarked box, no logos or descriptions. Billing appears as a generic business name.' },
        { q: 'What materials is this made from?', a: 'All PleasureNest products use body-safe medical-grade silicone, glass, or metal. Zero phthalates.' },
        { q: 'Is it waterproof?', a: 'Most vibrators and massagers in our range are IPX7 waterproof unless stated otherwise in the specs.' },
        { q: 'What is the return policy?', a: 'Defective products can be replaced within 30 days. For hygiene reasons we cannot accept returns on opened items.' },
    ];

    const reviews = [
        { name: 'JessicaT', rating: 5, text: 'Absolutely love it. Great quality and exactly as described. Shipping was fast and so discreet.' },
        { name: 'M. Williams', rating: 5, text: 'My go-to shop now. The packaging was perfect and I felt totally safe buying here.' },
        { name: 'Alex K.', rating: 4, text: 'Really good product. Took a few days to arrive but well packaged and great value.' },
    ];

    return (
        <section className="section" style={{ paddingTop: '100px' }}>
            <div className="container">
                {/* BREADCRUMB */}
                <div className="breadcrumb">
                    <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span>
                </div>

                <div className="product-layout">
                    {/* Gallery */}
                    <div className="product-gallery">
                        <div className="product-main-img" style={{
                            backgroundImage: `url(${product.image})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }} />
                        <div className="product-thumbs">
                            {[product.image].map((img, i) => (
                                <div key={i} className={`thumb ${i === activeImg ? 'thumb--active' : ''}`}
                                    style={{ backgroundImage: `url(${img})` }} />
                            ))}
                        </div>
                    </div>

                    {/* Meta */}
                    <div className="product-meta">
                        {/* Level badge */}
                        <div className="who-badge">
                            <span className={`level-pill level-${level.toLowerCase().replace(' ', '-')}`}>
                                {level}
                            </span>
                            <span className="type-pill">{product.type}</span>
                        </div>

                        <h1>{product.name}</h1>
                        <StarRating rating={4.7} count={48} />
                        <div className={`stock-badge stock-badge-detail ${product.inventory.stockClass}`}>{product.inventory.stockLabel}</div>
                        <p className="price-hidden-copy">Retail price intentionally hidden</p>

                        <p className="product-desc">{product.desc}</p>

                        {/* Spec Table */}
                        <div className="spec-table">
                            <div className="spec-row"><span>Material</span><span>Medical-grade silicone</span></div>
                            <div className="spec-row"><span>Waterproof</span><span>✓ IPX7</span></div>
                            <div className="spec-row"><span>Rechargeable</span><span>✓ USB-C</span></div>
                            <div className="spec-row"><span>Vibration Modes</span><span>10 patterns</span></div>
                            <div className="spec-row"><span>SKU</span><span>PN-{product.id?.toString().padStart(4,'0')}</span></div>
                            <div className="spec-row"><span>Inventory Units</span><span>{product.inventory.units}</span></div>
                        </div>

                        <div className="quote-box">
                            <h3>Request Wholesale/Retail Pricing</h3>
                            <p>For exact price and minimum order details, contact our sales team directly.</p>
                            <div className="quote-contact-line">
                                <span><i className="fa fa-phone" /> {SALES_PHONE}</span>
                                <span><i className="fa fa-envelope" /> {SALES_EMAIL}</span>
                            </div>
                            <QuoteActions productName={product.name} locationTag="product_detail" />
                        </div>

                        {/* Discreet Shipping Note */}
                        <div className="discreet-note">
                            <i className="fa fa-archive" />
                            <span><strong>Discreet shipping guaranteed.</strong> Plain box, private billing. Usually ships in 1–3 business days.</span>
                        </div>

                        {/* Checkmarks */}
                        <ul className="product-checklist">
                            <li><i className="fa fa-check" /> Body-safe materials</li>
                            <li><i className="fa fa-check" /> Discreet packaging</li>
                            <li><i className="fa fa-check" /> Free returns on defective items</li>
                            <li><i className="fa fa-check" /> SSL-secured checkout</li>
                        </ul>

                        {/* Hygiene */}
                        <div className="hygiene-box">
                            <strong><i className="fa fa-medkit" /> Care &amp; Hygiene</strong>
                            <p>Clean before and after each use with warm water and mild soap or a dedicated toy cleaner. Store in the included pouch away from direct sunlight. Do not use silicone-based lubricants with silicone toys.</p>
                        </div>
                    </div>
                </div>

                {/* Product FAQ */}
                <div style={{ marginTop: '80px', maxWidth: '700px' }}>
                    <FAQAccordion items={faqItems} />
                </div>

                {/* Reviews */}
                <div className="reviews-section">
                    <h2>Customer Reviews</h2>
                    <div className="reviews-summary">
                        <div className="reviews-score">4.7</div>
                        <div>
                            <div className="product-stars-detail">
                                {'★★★★★'.split('').map((s,i) => <span key={i} className="star-lg filled">{s}</span>)}
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Based on 48 verified reviews</p>
                        </div>
                    </div>
                    <div className="reviews-grid">
                        {reviews.map((r, i) => (
                            <motion.div key={i} className="review-card"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <div className="review-stars">{'★'.repeat(r.rating)}</div>
                                <p>"{r.text}"</p>
                                <div className="review-author">
                                    <strong>{r.name}</strong>
                                    <span className="verified-badge"><i className="fa fa-check-circle" /> Verified Buyer</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Related Products */}
                {related.length > 0 && (
                    <div className="related-section">
                        <h2>You Might Also Like</h2>
                        <div className="related-grid">
                            {related.map(item => (
                                <div key={item.id} className="product-card">
                                    <div className="product-img">
                                        <div className="product-img-inner" style={{ backgroundImage: `url(${item.image})` }} />
                                    </div>
                                    <div className="product-info">
                                        <h4>{item.name}</h4>
                                        <p className={`stock-badge ${item.inventory.stockClass}`}>{item.inventory.stockLabel}</p>
                                        <Link to={`/product/${item.id}`} className="btn btn-outline btn-small">View Product</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Product;
