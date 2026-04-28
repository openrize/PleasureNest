import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../data/products.json';
import TrustBar from '../components/TrustBar';
import QuoteActions from '../components/QuoteActions';
import { withInventory } from '../utils/inventory';

const Home = () => {
    const inventoryProducts = products.map(withInventory);
    const categoryDefinitions = [
        { key: 'vibrators', title: 'Vibrators', sub: 'Best for solo exploration', route: '/shop/vibrators', placeholder: 'placeholder-vibe' },
        { key: 'couples', title: 'Couples', sub: 'Partner-focused experiences', route: '/shop/couples', placeholder: 'placeholder-couple' },
        { key: 'bdsm', title: 'BDSM', sub: 'Power-play essentials', route: '/shop/bdsm', placeholder: 'placeholder-bdsm' },
        { key: 'dildos', title: 'Dildos', sub: 'Classic and realistic designs', route: '/shop/dildos', placeholder: 'placeholder-dildo' },
        { key: 'wellness', title: 'Wellness', sub: 'Care, comfort, and recovery', route: '/shop/wellness', placeholder: 'placeholder-wellness' },
    ];

    const bestSellers = [...inventoryProducts]
        .sort((a, b) => b.inventory.units - a.inventory.units)
        .slice(0, 4);
    const bestSellerIds = new Set(bestSellers.map((item) => item.id));

    const categoryHighlights = categoryDefinitions
        .map((category) =>
            inventoryProducts.find(
                (item) => item.type === category.key && !bestSellerIds.has(item.id)
            )
        )
        .filter(Boolean)
        .slice(0, 4);

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

                    <motion.div className="category-definition-grid" variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        {categoryDefinitions.map((category) => {
                            const categoryCount = inventoryProducts.filter((item) => item.type === category.key).length;
                            return (
                                <motion.div key={category.key} variants={staggerItem}>
                                    <Link to={category.route} className="category-definition-card">
                                        <div className={`cat-img ${category.placeholder}`} />
                                        <div className="cat-overlay" />
                                        <div className="cat-info">
                                            <div className="cat-info-left">
                                                <div className="cat-eyebrow">{category.sub}</div>
                                                <h3>{category.title}</h3>
                                                <p className="cat-count">{categoryCount} products</p>
                                            </div>
                                            <div className="cat-arrow"><i className="fa fa-arrow-right" /></div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
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
                                    <p className={`stock-badge ${item.inventory.stockClass}`}>{item.inventory.stockLabel}</p>
                                    <p className="price-hidden-copy">Price hidden - contact for quote</p>
                                    <QuoteActions productName={item.name} locationTag="home_best_sellers" />
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

            {/* ─ CATEGORY HIGHLIGHTS ─ */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}
                    >
                        <div className="section-eyebrow">Category Highlights</div>
                        <h2 className="section-title">Shop by Category</h2>
                        <p className="section-sub">A curated pick from each core category so customers can browse faster with less friction.</p>
                    </motion.div>

                    <motion.div
                        className="product-grid"
                        variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        {categoryHighlights.map((item) => (
                            <motion.div key={item.id} className="product-card" variants={staggerItem}>
                                <Link to={`/product/${item.id}`} className="product-card-link">
                                    <div className="product-img">
                                        <div
                                            className="product-img-inner"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        />
                                        <div className="product-badge product-badge--beginner">{item.type}</div>
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
                                    <p className={`stock-badge ${item.inventory.stockClass}`}>{item.inventory.stockLabel}</p>
                                    <p className="price-hidden-copy">Price hidden - contact for quote</p>
                                    <QuoteActions productName={item.name} locationTag="home_category_highlights" />
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
