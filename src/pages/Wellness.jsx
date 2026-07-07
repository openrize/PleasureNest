import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../data/products.json';
import QuoteActions from '../components/QuoteActions';
import { withInventory } from '../utils/inventory';

const Wellness = () => {
    const wellnessProducts = products
        .filter((p) => p.type === 'wellness')
        .map(withInventory)
        .slice(0, 8);

    const fadeUp = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="section" style={{ paddingTop: '120px' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section-eyebrow">Wellness</div>
                    <h1 className="section-title">Intimacy &amp; Self-Care</h1>
                    <p className="section-sub">
                        Helping adults explore wellness, intimacy, and self-care with intention,
                        comfort, and confidence.
                    </p>
                </motion.div>

                <motion.div
                    className="wellness-intro"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                >
                    <div className="wellness-intro-panel">
                        <h2>Relationship Wellness</h2>
                        <p>
                            Intimacy is a vital part of overall wellbeing. Our wellness collection
                            supports couples and individuals in building deeper connection, reducing
                            stress, and nurturing confidence.
                        </p>
                        <Link to="/education/relationship-wellness" className="guide-read-link">
                            Learn More <i className="fa fa-arrow-right" />
                        </Link>
                    </div>
                    <div className="wellness-intro-panel">
                        <h2>Self-Care Rituals</h2>
                        <p>
                            Personal wellness starts with self-awareness. Explore products and guides
                            designed to help you relax, recharge, and feel your best.
                        </p>
                        <Link to="/education/self-care" className="guide-read-link">
                            Explore Self-Care <i className="fa fa-arrow-right" />
                        </Link>
                    </div>
                </motion.div>

                <h2 style={{ textAlign: 'center', margin: '60px 0 32px' }}>Wellness Essentials</h2>
                <motion.div
                    className="product-grid"
                    initial="hidden"
                    animate="show"
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
                >
                    {wellnessProducts.map((item) => (
                        <motion.div key={item.id} className="product-card" variants={fadeUp}>
                            <Link to={`/product/${item.id}`} className="product-card-link">
                                <div className="product-img">
                                    <div
                                        className="product-img-inner"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    />
                                </div>
                            </Link>
                            <div className="product-info">
                                <Link to={`/product/${item.id}`}>
                                    <h4 title={item.name}>{item.name}</h4>
                                </Link>
                                <QuoteActions productName={item.name} locationTag="wellness_page" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="section-cta" style={{ marginTop: '48px' }}>
                    <Link to="/collections/wellness" className="btn btn-primary">
                        Shop All Wellness <i className="fa fa-arrow-right" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Wellness;
