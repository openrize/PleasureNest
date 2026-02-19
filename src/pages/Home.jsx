import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {

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
                    <motion.p {...fadeUp(0.6)}>
                        A curated sanctuary for uninhibited pleasure. Discreet, luxurious, and unapologetically bold.
                    </motion.p>
                    <motion.div className="hero-cta" {...fadeUp(0.8)}>
                        <Link to="/shop" className="btn btn-primary">
                            Explore Boutique
                            <i className="fa fa-long-arrow-right" />
                        </Link>
                        <Link to="/about" className="btn btn-outline">Our Story</Link>
                    </motion.div>
                </div>
                <div className="hero-scroll">
                    <span>Scroll</span>
                </div>
            </section>

            {/* ─ CATEGORIES ─ */}
            <section className="section" style={{ paddingTop: 0 }}>
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

            {/* ─ BOLD STRIP ─ */}
            <div className="why-strip">
                <div className="container">
                    <p>"Premium. Discreet. Unapologetically You."</p>
                </div>
            </div>

            {/* ─ PRODUCTS ─ */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}
                    >
                        <div className="section-eyebrow">Trending</div>
                        <h2 className="section-title">Objects of Desire</h2>
                    </motion.div>

                    <motion.div
                        className="product-grid"
                        variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        {[
                            { id: 1, name: 'Eclipse Vibrator', price: '$149', cls: 'placeholder-p1' },
                            { id: 2, name: 'Velvet Restraints', price: '$59', cls: 'placeholder-p2' },
                            { id: 3, name: 'Pulse Massager', price: '$99', cls: 'placeholder-p3' },
                            { id: 4, name: 'Crystal Wand', price: '$79', cls: 'placeholder-p4' },
                        ].map((item) => (
                            <motion.div key={item.id} className="product-card" variants={staggerItem}>
                                <div className={`product-img ${item.cls}`} />
                                <div className="product-info">
                                    <h4>{item.name}</h4>
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

            {/* ─ FEATURES ─ */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="features-grid">
                        {[
                            { icon: 'certificate', title: 'Body-Safe', text: 'Medical-grade silicone. Nothing less.' },
                            { icon: 'archive', title: 'Discreet', text: 'Plain box. Private billing. Always.' },
                            { icon: 'heart', title: 'Pleasure First', text: 'Curated for genuine satisfaction.' },
                            { icon: 'lock', title: 'Private', text: 'Your data stays yours. Period.' },
                        ].map((f, i) => (
                            <motion.div
                                key={i} className="feature-item"
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
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
        </>
    );
};

export default Home;
