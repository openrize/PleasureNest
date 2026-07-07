import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EDUCATION_ARTICLES } from '../utils/categories';

const ARTICLE_CONTENT = {
    'beginner-guide': {
        title: 'Beginner Guide to Intimacy Wellness',
        body: [
            'Starting your wellness journey should feel empowering, not overwhelming. This guide walks you through the essentials — understanding your needs, choosing body-safe materials, and building confidence at your own pace.',
            'Look for medical-grade silicone, glass, or stainless steel. Avoid products with strong chemical odors or unclear material labels. Start with simpler designs and explore gradually as you learn what feels right for you.',
            'Remember: there is no rush. Intimacy wellness is deeply personal, and the best choices are the ones that align with your comfort, values, and goals.',
        ],
    },
    'relationship-wellness': {
        title: 'Relationship Wellness',
        body: [
            'Strong relationships thrive on communication, trust, and shared experiences. Intimacy wellness products can be a thoughtful way for couples to explore connection together — when both partners feel comfortable and curious.',
            'Start with open conversations about boundaries, preferences, and intentions. Choose products designed for shared experiences, and approach exploration as a journey you take together.',
            'Wellness in relationships is about more than products — it is about presence, patience, and mutual respect.',
        ],
    },
    'self-care': {
        title: 'Self-Care & Personal Wellness',
        body: [
            'Self-care is an essential part of overall wellbeing. Taking time for yourself — to relax, recharge, and reconnect with your body — supports confidence and emotional balance.',
            'Create a calming ritual: set aside private time, choose a comfortable environment, and select products designed for personal wellness and relaxation.',
            'There is no shame in prioritizing yourself. Self-care is a foundation for confidence in every area of life.',
        ],
    },
    'product-care': {
        title: 'Product Care Guide',
        body: [
            'Proper care ensures your products remain safe, hygienic, and long-lasting. Always clean before and after each use with warm water and mild soap, or a dedicated toy cleaner.',
            'Store items in a clean, dry pouch away from direct sunlight and extreme temperatures. Avoid storing silicone products touching each other, as they can bond over time.',
            'Never use silicone-based lubricants with silicone products — water-based lubricants are the safest choice for most materials.',
        ],
    },
    'safe-materials': {
        title: 'Understanding Safe Materials',
        body: [
            'Body-safe materials are non-porous, hypoallergenic, and free from harmful chemicals like phthalates. Medical-grade silicone, borosilicate glass, and stainless steel are among the safest options.',
            'Avoid products made from jelly rubber, PVC, or materials with strong chemical odors. When in doubt, look for clear material labeling and reputable brands.',
            'At Pleasure Nest, every product is curated to meet our strict body-safe standards. Your health and comfort come first.',
        ],
    },
};

const Education = () => {
    const { slug } = useParams();
    const article = slug ? EDUCATION_ARTICLES.find((a) => a.slug === slug) : null;
    const content = slug ? ARTICLE_CONTENT[slug] : null;

    const stagger = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    if (slug && article && content) {
        return (
            <section className="section" style={{ paddingTop: '120px' }}>
                <div className="container" style={{ maxWidth: '760px' }}>
                    <Link to="/education" className="breadcrumb" style={{ marginBottom: '32px', display: 'block' }}>
                        ← Back to Education
                    </Link>
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="post-tag">{article.tag}</span>
                        <h1 style={{ margin: '16px 0 32px' }}>{content.title}</h1>
                        {content.body.map((paragraph, i) => (
                            <p key={i} style={{ marginBottom: '20px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                                {paragraph}
                            </p>
                        ))}
                    </motion.article>
                </div>
            </section>
        );
    }

    return (
        <section className="section" style={{ paddingTop: '120px' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section-eyebrow">Education</div>
                    <h1 className="section-title">Wellness &amp; Intimacy Guides</h1>
                    <p className="section-sub">
                        Thoughtful resources on relationship wellness, self-care, and safe materials —
                        because knowledge builds confidence.
                    </p>
                </motion.div>

                <motion.div
                    className="guides-grid"
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                >
                    {EDUCATION_ARTICLES.map((item) => (
                        <motion.div key={item.slug} className="guide-card" variants={fadeUp}>
                            <div className="guide-icon">{item.icon}</div>
                            <span className="post-tag">{item.tag}</span>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <Link to={`/education/${item.slug}`} className="guide-read-link">
                                Read Article <i className="fa fa-arrow-right" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
