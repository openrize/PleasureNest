import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../data/products.json';
import TrustBar from '../components/TrustBar';

const Home = () => {
    const bestSellers = [...products].slice(0, 4);
    const beginnerPicks = [...products].filter(p => p.type === 'vibrators' || p.type === 'wellness').slice(0, 4);

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay }
    });

    const staggerGrid = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };
    const staggerItem = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const testimonials = [
        {
            name: 'Sarah M.',
            rating: 5,
            text: 'Absolutely love my order. Packaging was super discreet and the product quality is incredible. Will be back!',
            label: 'Verified Buyer'
        },
        {
            name: 'Jamie L.',
            rating: 5,
            text: 'Finally a store that feels premium and safe. Body-safe materials, fast delivery, and no sketchy billing. 10/10.',
            label: 'Verified Buyer'
        },
        {
            name: 'Alex R.',
            rating: 4,
            text: 'Great selection for beginners. The guide section helped me choose, and shipping was exactly as described.',
            label: 'Verified Buyer'
        }
    ];

    const whyUs = [
        { icon: 'archive', title: 'Discreet Everything', text: 'Plain box. Private billing name. No logos. We protect your privacy at every step.' },
        { icon: 'certificate', title: 'Body-Safe Only', text: 'Medical-grade silicone, glass, and metal exclusively. Zero phthalates, ever.' },
        { icon: 'shield', title: 'Secure & Private', text: 'SSL-encrypted checkout. Your data is never sold, shared, or stored unnecessarily.' },
        { icon: 'star', title: 'Expert Curated', text: 'Every product is hand-picked by our wellness team for quality and genuine satisfaction.' },
    ];

    return (
        <>
            {/* ─ HERO ─ */}
            <section className="hero">
                <div className="hero-bg" />
                <div className="hero-content">
                    <motion.div className="hero-eyebrow" {...fadeUp(0.2)}>
                        Premium Adult Boutique
                    </motion.div>
                    <motion.h1 {...fadeUp(0.4)}>
                        Feel<br />Every<br /><em>Sensation</em>
                    </motion.h1>
                    <motion.p {...fadeUp(0.5)}>
                        Premium pleasure products, shipped discreetly, made with body-safe materials,
                        and designed for comfort and confidence.
                    </motion.p>
                    <motion.div className="hero-cta" {...fadeUp(0.7)}>
                        <Link to="/shop/vibrators" className="btn btn-primary">
                            Shop Best Sellers
                            <i className="fa fa-long-arrow-right" />
                        </Link>
                        <Link to="/shop/wellness" className="btn btn-outline">
                            Explore Beginner Picks
                        </Link>
                    </motion.div>
                </div>
                <div className="hero-scroll">
                    <span>Scroll</span>
                </div>
            </section>

            {/* ─ TRUST BAR ─ */}
            <TrustBar />

            {/* ─ CATEGORIES ─ */}
            <section className="section" style={{ paddingTop: '80px' }}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}
                    >
                        <div className="section-eyebrow">Collections</div>
                        <h2 className="section-title">Curated for Desire</h2>
                    </motion.div>

                    <motion.div
                        className="category-grid"
                        variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        <motion.div variants={staggerItem}>
                            <Link to="/shop/vibrators" className="category-card" style={{ height: '100%' }}>
                                <div className="cat-img placeholder-vibe" />
                                <div className="cat-overlay" />
                                <div className="cat-info">
                                    <div className="cat-info-left">
                                        <div className="cat-eyebrow">Solo Play</div>
                                        <h3>Vibrations</h3>
                                    </div>
                                    <div className="cat-arrow"><i className="fa fa-arrow-right" /></div>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div variants={staggerItem}>
                            <Link to="/shop/bdsm" className="category-card" style={{ height: '100%' }}>
                                <div className="cat-img placeholder-bdsm" />
                                <div className="cat-overlay" />
                                <div className="cat-info">
                                    <div className="cat-info-left">
                                        <div className="cat-eyebrow">Dominance</div>
                                        <h3>The Dark Room</h3>
                                    </div>
                                    <div className="cat-arrow"><i className="fa fa-arrow-right" /></div>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div variants={staggerItem} style={{ gridColumn: 'span 2' }}>
                            <Link to="/shop/couples" className="category-card category-card--wide" style={{ height: '380px' }}>
                                <div className="cat-img placeholder-couple" />
                                <div className="cat-overlay" />
                                <div className="cat-info">
                                    <div className="cat-info-left">
                                        <div className="cat-eyebrow">Together</div>
                                        <h3>Union</h3>
                                    </div>
                                    <div className="cat-arrow"><i className="fa fa-arrow-right" /></div>
                                </div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─ BEST SELLERS ─ */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}
                    >
                        <div className="section-eyebrow">Trending Now</div>
                        <h2 className="section-title">Best Sellers</h2>
                        <p className="section-sub">Our most loved products — trusted by thousands of happy customers.</p>
                    </motion.div>

                    <motion.div
                        className="product-grid"
                        variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        {bestSellers.map((item) => (
                            <motion.div key={item.id} className="product-card" variants={staggerItem}>
                                <Link to={`/product/${item.id}`} className="product-card-link">
                                    <div className="product-img">
                                        <div
                                            className="product-img-inner"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        />
                                        <div className="product-badge">Best Seller</div>
                                    </div>
                                </Link>
                                <div className="product-info">
                                    <div className="product-stars">
                                        {'★★★★★'.split('').map((s, i) => (
                                            <span key={i} className="star">{s}</span>
                                        ))}
                                        <span className="star-count">(48)</span>
                                    </div>
                                    <Link to={`/product/${item.id}`}>
                                        <h4 title={item.name}>{item.name}</h4>
                                    </Link>
                                    <p className="price">{item.price}</p>
                                    <div className="product-actions">
                                        <Link to={`/product/${item.id}`} className="btn btn-primary btn-small">Add to Cart</Link>
                                        <Link to={`/product/${item.id}`} className="btn btn-outline btn-small">View</Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div style={{ textAlign: 'center', marginTop: '48px' }}>
                        <Link to="/shop" className="btn btn-outline">View All Products <i className="fa fa-arrow-right" /></Link>
                    </div>
                </div>
            </section>

            {/* ─ WHY CHOOSE US ─ */}
            <section className="section why-choose-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}
                    >
                        <div className="section-eyebrow">Why Us</div>
                        <h2 className="section-title">Shop With Confidence</h2>
                    </motion.div>
                    <div className="features-grid">
                        {whyUs.map((f, i) => (
                            <motion.div
                                key={i} className="feature-item"
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                            >
                                <i className={`fa fa-${f.icon}`} />
                                <h3>{f.title}</h3>
                                <p>{f.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─ BEGINNER PICKS ─ */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}
                    >
                        <div className="section-eyebrow">Start Here</div>
                        <h2 className="section-title">Beginner Picks</h2>
                        <p className="section-sub">Gentle, approachable, and loved by first-timers. Perfect starting point.</p>
                    </motion.div>

                    <motion.div
                        className="product-grid"
                        variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        {beginnerPicks.map((item) => (
                            <motion.div key={item.id} className="product-card" variants={staggerItem}>
                                <Link to={`/product/${item.id}`} className="product-card-link">
                                    <div className="product-img">
                                        <div
                                            className="product-img-inner"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        />
                                        <div className="product-badge product-badge--beginner">Beginner</div>
                                    </div>
                                </Link>
                                <div className="product-info">
                                    <div className="product-stars">
                                        {'★★★★★'.split('').map((s, i) => (
                                            <span key={i} className="star">{s}</span>
                                        ))}
                                        <span className="star-count">(32)</span>
                                    </div>
                                    <Link to={`/product/${item.id}`}>
                                        <h4 title={item.name}>{item.name}</h4>
                                    </Link>
                                    <p className="price">{item.price}</p>
                                    <div className="product-actions">
                                        <Link to={`/product/${item.id}`} className="btn btn-primary btn-small">Add to Cart</Link>
                                        <Link to={`/product/${item.id}`} className="btn btn-outline btn-small">View</Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─ TESTIMONIALS ─ */}
            <section className="section testimonials-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}
                    >
                        <div className="section-eyebrow">What Customers Say</div>
                        <h2 className="section-title">Trusted by Thousands</h2>
                    </motion.div>

                    <motion.div
                        className="testimonial-grid"
                        variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        {testimonials.map((t, i) => (
                            <motion.div key={i} className="testimonial-card" variants={staggerItem}>
                                <div className="testimonial-stars">
                                    {'★'.repeat(t.rating)}
                                </div>
                                <p className="testimonial-text">"{t.text}"</p>
                                <div className="testimonial-author">
                                    <strong>{t.name}</strong>
                                    <span className="verified-badge"><i className="fa fa-check-circle" /> {t.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─ BOLD STRIP CTA ─ */}
            <div className="why-strip">
                <div className="container why-strip-inner">
                    <p>"Premium. Discreet. Unapologetically You."</p>
                    <Link to="/shop" className="btn btn-primary">
                        Find Your Match <i className="fa fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
