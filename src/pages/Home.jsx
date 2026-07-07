import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../data/products.json';
import TrustBar from '../components/TrustBar';
import QuoteActions from '../components/QuoteActions';
import Newsletter from '../components/Newsletter';
import { withInventory } from '../utils/inventory';
import { COLLECTIONS, WELLNESS_PILLARS, EDUCATION_ARTICLES, getCollectionCount } from '../utils/categories';

const Home = () => {
    const inventoryProducts = products.map(withInventory);

    const bestSellers = [...inventoryProducts]
        .sort((a, b) => b.inventory.units - a.inventory.units)
        .slice(0, 4);

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
    });

    const staggerGrid = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };
    const staggerItem = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    };

    const testimonials = [
        {
            name: 'Sarah M.',
            rating: 5,
            text: 'The experience felt so premium and thoughtful. Discreet packaging, beautiful quality, and I felt completely at ease.',
            label: 'Verified Customer',
        },
        {
            name: 'Jamie L.',
            rating: 5,
            text: 'Finally a brand that treats intimacy as wellness. The education section helped me choose with confidence.',
            label: 'Verified Customer',
        },
        {
            name: 'Alex R.',
            rating: 5,
            text: 'Elegant, private, and professional. This is how modern wellness shopping should feel.',
            label: 'Verified Customer',
        },
    ];

    return (
        <>
            {/* 1 — Hero */}
            <section className="hero">
                <div className="hero-bg" />
                <div className="hero-content">
                    <motion.div className="hero-eyebrow" {...fadeUp(0.1)}>
                        Modern Wellness &amp; Intimacy
                    </motion.div>
                    <motion.h1 {...fadeUp(0.25)}>
                        Wellness.<br />Confidence.<br /><em>Connection.</em>
                    </motion.h1>
                    <motion.p {...fadeUp(0.4)}>
                        Designed for comfort, confidence, and connection. Premium intimacy
                        wellness for every relationship — curated with care.
                    </motion.p>
                    <motion.div className="hero-cta" {...fadeUp(0.55)}>
                        <Link to="/collections" className="btn btn-primary">
                            Shop Collection
                            <i className="fa fa-long-arrow-right" />
                        </Link>
                        <Link to="/education" className="btn btn-outline">
                            Explore Wellness Guides
                        </Link>
                    </motion.div>
                </div>
                <div className="hero-scroll">
                    <span>Scroll</span>
                </div>
            </section>

            <TrustBar />

            {/* 2 — Featured Collections */}
            <section className="section section--alt">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="section-eyebrow">Featured Collections</div>
                        <h2 className="section-title">Curated for Every Need</h2>
                    </motion.div>

                    <motion.div
                        className="collection-grid"
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {COLLECTIONS.map((collection) => (
                            <motion.div key={collection.slug} variants={staggerItem}>
                                <Link to={collection.route} className="collection-card">
                                    <div className={`cat-img ${collection.placeholder}`} />
                                    <div className="collection-card-body">
                                        <span className="cat-eyebrow">{collection.subtitle}</span>
                                        <h3>{collection.title}</h3>
                                        <span className="cat-count">
                                            {getCollectionCount(inventoryProducts, collection)} products
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3 — Shop by Need */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="section-eyebrow">Shop by Need</div>
                        <h2 className="section-title">Find What Feels Right</h2>
                        <p className="section-sub">
                            Browse by intention — whether for yourself, your partner, or as a thoughtful gift.
                        </p>
                    </motion.div>

                    <motion.div
                        className="need-grid"
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {COLLECTIONS.map((collection) => (
                            <motion.div key={`need-${collection.slug}`} variants={staggerItem}>
                                <Link to={collection.route} className="need-card">
                                    <h4>{collection.title}</h4>
                                    <p>{collection.subtitle}</p>
                                    <span className="need-link">
                                        Explore <i className="fa fa-arrow-right" />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4 — Best Sellers */}
            <section className="section section--alt">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="section-eyebrow">Customer Favorites</div>
                        <h2 className="section-title">Best Sellers</h2>
                        <p className="section-sub">
                            Our most-loved wellness essentials, trusted by thousands.
                        </p>
                    </motion.div>

                    <motion.div
                        className="product-grid"
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
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
                                    <p className={`stock-badge ${item.inventory.stockClass}`}>
                                        {item.inventory.stockLabel}
                                    </p>
                                    <QuoteActions productName={item.name} locationTag="home_best_sellers" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="section-cta">
                        <Link to="/shop" className="btn btn-outline">
                            View All Products <i className="fa fa-arrow-right" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5 — Why Pleasure Nest */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="section-eyebrow">Why Pleasure Nest</div>
                        <h2 className="section-title">Wellness You Can Trust</h2>
                    </motion.div>
                    <div className="features-grid features-grid--six">
                        {WELLNESS_PILLARS.map((pillar, i) => (
                            <motion.div
                                key={pillar.title}
                                className="feature-item"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06, duration: 0.6 }}
                            >
                                <i className={`fa fa-${pillar.icon}`} />
                                <h3>{pillar.title}</h3>
                                <p>{pillar.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6 — Education */}
            <section className="section section--alt">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="section-eyebrow">Education</div>
                        <h2 className="section-title">Learn &amp; Explore</h2>
                        <p className="section-sub">
                            Knowledge builds confidence. Explore our guides on wellness, intimacy, and self-care.
                        </p>
                    </motion.div>

                    <motion.div
                        className="guides-grid"
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {EDUCATION_ARTICLES.map((article) => (
                            <motion.div key={article.slug} className="guide-card" variants={staggerItem}>
                                <div className="guide-icon">{article.icon}</div>
                                <span className="post-tag">{article.tag}</span>
                                <h3>{article.title}</h3>
                                <p>{article.desc}</p>
                                <Link to={`/education/${article.slug}`} className="guide-read-link">
                                    Read Article <i className="fa fa-arrow-right" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="section-cta">
                        <Link to="/education" className="btn btn-outline">
                            View All Articles <i className="fa fa-arrow-right" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 7 — Reviews */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="section-eyebrow">Reviews</div>
                        <h2 className="section-title">Trusted by Our Community</h2>
                    </motion.div>

                    <motion.div
                        className="testimonial-grid"
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {testimonials.map((t, i) => (
                            <motion.div key={i} className="testimonial-card" variants={staggerItem}>
                                <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                                <div className="testimonial-author">
                                    <strong>{t.name}</strong>
                                    <span className="verified-badge">
                                        <i className="fa fa-check-circle" /> {t.label}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 8 — Newsletter */}
            <Newsletter />
        </>
    );
};

export default Home;
