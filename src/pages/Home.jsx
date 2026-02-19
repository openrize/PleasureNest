import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
                        Premium<br />Pleasure<br />Delivered.
                    </motion.h1>
                    <motion.p variants={fadeInUp}>
                        Explore our curated collection of high-quality adult toys designed to enhance details of intimacy.
                    </motion.p>
                    <motion.div variants={fadeInUp}>
                        <Link to="/shop" className="btn btn-primary">Enter Boutique</Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Featured Categories */}
            <section id="categories" className="section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Curated Collections
                    </motion.h2>

                    <div className="category-grid">
                        <Link to="/shop/vibrators" className="category-card">
                            <div className="cat-img placeholder-vibe"></div>
                            <div className="cat-info">
                                <h3>Vibrators</h3>
                                <p>Powerful & Quiet</p>
                            </div>
                        </Link>
                        <Link to="/shop/dildos" className="category-card">
                            <div className="cat-img placeholder-dildo"></div>
                            <div className="cat-info">
                                <h3>Sculptural</h3>
                                <p>Realistic & Premium</p>
                            </div>
                        </Link>
                        <Link to="/shop/couples" className="category-card">
                            <div className="cat-img placeholder-couple"></div>
                            <div className="cat-info">
                                <h3>Connection</h3>
                                <p>For Couples</p>
                            </div>
                        </Link>
                        <Link to="/shop/bdsm" className="category-card card-wide">
                            <div className="cat-img placeholder-bdsm"></div>
                            <div className="cat-info">
                                <h3>The Dark Room</h3>
                                <p>BDSM & Accessories for the adventurous.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose section" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 className="section-title">The PleasureNest Promise</h2>
                    <div className="features-grid">
                        {[
                            { icon: "certificate", title: "Premium Materials", text: "Medical-grade silicone & glass." },
                            { icon: "archive", title: "Discreet Shipping", text: "Plain packaging, always." },
                            { icon: "undo", title: "Satisfaction", text: "30-day hassle-free returns." },
                            { icon: "user-secret", title: "Privacy First", text: "Your data is never shared." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-item glass-panel"
                                style={{ padding: '30px', textAlign: 'center' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <i className={`fa fa-${feature.icon}`} style={{ fontSize: '2rem', color: 'var(--accent-rose)', marginBottom: '20px' }}></i>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{feature.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{feature.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending Products */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Trending Now</h2>
                    <div className="product-grid">
                        {[1, 2, 3, 4].map((item, index) => (
                            <motion.div
                                key={item}
                                className="product-card"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={`product-img placeholder-p${item}`}></div>
                                <div className="product-info">
                                    <h4>Luxury Item {item}</h4>
                                    <p className="price">$129.00</p>
                                    <Link to={`/product/${item}`} className="btn btn-small" style={{ marginTop: '10px' }}>View Details</Link>
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
