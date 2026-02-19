import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    // Ultra-slow, liquid animations
    const fadeInUp = {
        hidden: { opacity: 0, y: 80, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4 // Slower stagger
            }
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h1 variants={fadeInUp}>
                        Indulge Your<br />Deepest Desires.
                    </motion.h1>
                    <motion.p variants={fadeInUp}>
                        A curated sanctuary for intimacy, elegance, and uninhibited pleasure.
                    </motion.p>
                    <motion.div variants={fadeInUp}>
                        <Link to="/shop" className="btn btn-primary">Explore Intimacy</Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Featured Categories */}
            <section id="categories" className="section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        Curated Collections
                    </motion.h2>

                    <div className="category-grid">
                        <Link to="/shop/vibrators" className="category-card">
                            <div className="cat-img placeholder-vibe"></div>
                            <div className="cat-info">
                                <h3>Vibrations</h3>
                                <p>Whispers of Power</p>
                            </div>
                        </Link>
                        <Link to="/shop/dildos" className="category-card">
                            <div className="cat-img placeholder-dildo"></div>
                            <div className="cat-info">
                                <h3>Sculpture</h3>
                                <p>Art of Filling</p>
                            </div>
                        </Link>
                        <Link to="/shop/couples" className="category-card">
                            <div className="cat-img placeholder-couple"></div>
                            <div className="cat-info">
                                <h3>Union</h3>
                                <p>Shared Ecstasy</p>
                            </div>
                        </Link>
                        <Link to="/shop/bdsm" className="category-card card-wide">
                            <div className="cat-img placeholder-bdsm"></div>
                            <div className="cat-info">
                                <h3>The Dark Room</h3>
                                <p>Surrender Control.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose section" style={{ background: 'linear-gradient(to bottom, #050001, #1a0306, #050001)' }}>
                <div className="container">
                    <h2 className="section-title">The PleasureNest Promise</h2>
                    <div className="features-grid">
                        {[
                            { icon: "certificate", title: "Premium Touch", text: "Silicone softer than skin." },
                            { icon: "archive", title: "Secretive", text: "Delivered without a trace." },
                            { icon: "heart", title: "Passion First", text: "Curated for true connection." },
                            { icon: "lock", title: "Private", text: "Your secrets are safe with us." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-item glass-panel"
                                style={{ padding: '40px 30px', textAlign: 'center', borderColor: 'var(--glass-border)' }}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 1.0 }}
                            >
                                <i className={`fa fa-${feature.icon}`} style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', marginBottom: '25px', opacity: 0.8 }}></i>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', fontStyle: 'italic' }}>{feature.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{feature.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending Products */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Objects of Desire</h2>
                    <div className="product-grid">
                        {[1, 2, 3, 4].map((item, index) => (
                            <motion.div
                                key={item}
                                className="product-card"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 1.2 }}
                            >
                                <div className={`product-img placeholder-p${item}`}></div>
                                <div className="product-info">
                                    <h4>Obsession No. {item}</h4>
                                    <p className="price">$129.00</p>
                                    <Link to={`/product/${item}`} className="btn btn-small" style={{ marginTop: '20px', fontSize: '0.6rem' }}>View Object</Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
