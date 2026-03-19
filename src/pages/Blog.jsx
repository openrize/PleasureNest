import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
    const guides = [
        { id: 'g1', icon: '🌱', title: "Beginner's Complete Guide", desc: 'Not sure where to start? We walk you through everything — types, materials, what to look for, and what to avoid.', tag: 'Beginner Guide' },
        { id: 'g2', icon: '🛡️', title: 'Safety & Body-Safe Materials', desc: 'Learn the difference between body-safe and unsafe materials, and why it matters for your health.', tag: 'Safety' },
        { id: 'g3', icon: '💧', title: 'Lubricant Compatibility Guide', desc: 'The wrong lube can damage your toys. Here\'s exactly what to use — and what to avoid with each material.', tag: 'Care Guide' },
    ];

    const posts = [
        { id: 1, title: 'Top 10 Adult Toys for Couples in 2026', date: 'Feb 15, 2026', excerpt: 'Discover the trending toys that are bringing partners closer together this year.', tag: 'Couples', color: 'linear-gradient(135deg, #2d1b2e, #4a1942)' },
        { id: 2, title: 'How to Choose Your First Vibrator', date: 'Feb 12, 2026', excerpt: "A beginner's guide to navigating the world of vibes, from bullets to wands.", tag: 'Beginner', color: 'linear-gradient(135deg, #1a0b14, #3d1636)' },
        { id: 3, title: 'Benefits of Using Adult Toys for Wellness', date: 'Feb 10, 2026', excerpt: "It's not just about fun — it's about health, stress relief, and self-care.", tag: 'Wellness', color: 'linear-gradient(135deg, #0b1a1a, #163d36)' },
        { id: 4, title: 'Discreet Packaging: What You Need to Know', date: 'Feb 08, 2026', excerpt: 'We explain our shipping process to ensure your complete privacy.', tag: 'Shipping', color: 'linear-gradient(135deg, #1a1a0b, #3d3616)' },
        { id: 5, title: 'Exploring BDSM Safely: Beginner Tips', date: 'Feb 05, 2026', excerpt: 'SSC (Safe, Sane, Consensual) principles and how to start your journey.', tag: 'BDSM', color: 'linear-gradient(135deg, #1a0b0b, #3d1616)' },
        { id: 6, title: 'How Adult Toys Can Improve Intimacy', date: 'Feb 03, 2026', excerpt: 'Breaking down the stigma and enhancing connection with your partner.', tag: 'Couples', color: 'linear-gradient(135deg, #1b0b2d, #3e1954)' },
    ];

    const tagColors = {
        'Beginner': '#4caf8a',
        'Couples': '#c47dbf',
        'Wellness': '#7dbfc4',
        'Shipping': '#c4ac7d',
        'BDSM': '#c47d7d',
        'Safety': '#7d9fc4',
        'Care Guide': '#9fc47d',
        'Beginner Guide': '#4caf8a',
    };

    const stagger = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="section" style={{ paddingTop: '100px' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <div className="section-eyebrow">Knowledge Hub</div>
                    <h1>Guides &amp; Journal</h1>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '16px auto 0' }}>
                        Education builds trust. Browse our guides to shop smarter, safer, and with confidence.
                    </p>
                </motion.div>

                {/* Featured Guides */}
                <div style={{ marginBottom: '80px' }}>
                    <h2 style={{ marginBottom: '32px' }}>Essential Guides</h2>
                    <motion.div
                        className="guides-grid"
                        variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        {guides.map(guide => (
                            <motion.div key={guide.id} className="guide-card" variants={fadeUp}>
                                <div className="guide-icon">{guide.icon}</div>
                                <span className="post-tag" style={{ backgroundColor: tagColors[guide.tag] || 'var(--accent-color)' }}>
                                    {guide.tag}
                                </span>
                                <h3>{guide.title}</h3>
                                <p>{guide.desc}</p>
                                <Link to="#" className="guide-read-link">
                                    Read Guide <i className="fa fa-arrow-right" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Blog Posts */}
                <h2 style={{ marginBottom: '32px' }}>Latest Articles</h2>
                <motion.div
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px' }}
                    variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
                >
                    {posts.map(post => (
                        <motion.article key={post.id} className="blog-card" variants={fadeUp}>
                            <div className="blog-img" style={{ background: post.color }}>
                                <span className="post-tag" style={{ backgroundColor: tagColors[post.tag] || 'var(--accent-color)' }}>
                                    {post.tag}
                                </span>
                            </div>
                            <div className="blog-body">
                                <span className="blog-date">{post.date}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <Link to="#" className="guide-read-link">Read More <i className="fa fa-arrow-right" /></Link>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
