import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
    const values = [
        { icon: 'shield', title: 'Safety First', text: 'Every product passes our strict body-safe material standard. Medical-grade only.' },
        { icon: 'archive', title: 'Total Discretion', text: 'Plain packaging, private billing, no data sharing. Your privacy is sacred.' },
        { icon: 'heart', title: 'Judgment-Free', text: 'We believe pleasure and wellness are universal. No shame, ever.' },
    ];

    const stats = [
        { number: '10,000+', label: 'Happy Customers' },
        { number: '200+', label: 'Curated Products' },
        { number: '30-Day', label: 'Defect Guarantee' },
        { number: '100%', label: 'Body-Safe Promise' },
    ];

    const stagger = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    return (
        <section className="section" style={{ paddingTop: '100px' }}>
            <div className="container">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px' }}
                >
                    <div className="section-eyebrow">Our Story</div>
                    <h1>Redefining Intimate Wellness</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginTop: '20px' }}>
                        PleasureNest was born from a simple belief: everyone deserves access to high-quality, body-safe intimate products in a space that feels welcoming, private, and premium.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="about-stats"
                    variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
                >
                    {stats.map((s, i) => (
                        <motion.div key={i} className="about-stat" variants={fadeUp}>
                            <div className="stat-number">{s.number}</div>
                            <div className="stat-label">{s.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Story */}
                <motion.div
                    className="about-story"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8 }}
                >
                    <div className="about-story-panel">
                        <h2>Why We Started</h2>
                        <p>We noticed that most adult stores fell into one of two extremes — either clinical and cold, or cheap and tacky. Neither felt right for people exploring intimacy and wellness with intention.</p>
                        <p>PleasureNest was designed to feel like a luxurious, private boutique — a space where you can browse, learn, and buy without judgment, anxiety, or compromise on quality.</p>
                    </div>
                    <div className="about-story-panel">
                        <h2>Our Promise</h2>
                        <p>Every product in our collection is hand-selected for quality and safety. We work only with brands that meet our strict body-safe material standards. If it doesn't meet our bar, it doesn't make the cut.</p>
                        <p>From packaging to billing to customer support — absolute discretion is built into everything we do. Because your privacy isn't a feature. It's our foundation.</p>
                    </div>
                </motion.div>

                {/* Values */}
                <motion.div
                    style={{ marginTop: '80px' }}
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8 }}
                >
                    <div className="section-header">
                        <div className="section-eyebrow">Our Values</div>
                        <h2 className="section-title">Why Trust Us</h2>
                    </div>
                    <div className="features-grid">
                        {values.map((v, i) => (
                            <motion.div key={i} className="feature-item"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <i className={`fa fa-${v.icon}`} />
                                <h3>{v.title}</h3>
                                <p>{v.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <div style={{ textAlign: 'center', marginTop: '80px' }}>
                    <h3 style={{ marginBottom: '24px' }}>Ready to explore?</h3>
                    <Link to="/shop" className="btn btn-primary">Shop the Collection <i className="fa fa-arrow-right" /></Link>
                    <Link to="/guides" className="btn btn-outline" style={{ marginLeft: '16px' }}>Read Our Guides</Link>
                </div>

            </div>
        </section>
    );
};

export default About;
